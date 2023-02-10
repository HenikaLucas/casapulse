import React from 'react';
import slugify from 'slugify';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import FAQ from '../components/Faq/faq';
import Message from '../components/Message/message';
import Link from 'next/link';
import SyntaxHighlighter from '../components/syntaxHighlighter';
import config from '../../config';
import { Button } from '../components/Button/Button';
import ListItem from '../components/ListItem/ListItem';

const textRenderOptions = {
    renderText: text => {
        return text.split('\n').reduce((children, textSegment, index) => {
            return [...children, index > 0 && <br key={index} />, textSegment];
        }, []);
    }
}

export const renderOptions = {
    ...textRenderOptions,
    renderNode: {
        [INLINES.EMBEDDED_ENTRY]: (node) => {
            // target the contentType of the EMBEDDED_ENTRY to display as you need
            if (node.data.target.sys.contentType.sys.id === "faq") {
                return (
                    <FAQ
                        question={node.data.target.fields.question}
                        answer={documentToReactComponents(node.data.target.fields.richAnswer, textRenderOptions)}
                    />
                );
            } else if (node.data.target.sys.contentType.sys.id === "messageBlock") {
                return (
                    <Message
                        content={documentToReactComponents(node.data.target.fields.content)}
                        type={node.data.target.fields.type}
                    />
                )
            } else if (node.data.target.sys.contentType.sys.id === "codeBlock") {
                return (
                    <SyntaxHighlighter
                        language={node.data.target.fields.language}
                        code={node.data.target.fields.code}
                    />
                )
            } else if (node.data.target.sys.contentType.sys.id === "button") {
                return (
                    <Button fullWidth={true} label={node.data.target.fields.content} newTab={true} backgroundColor={"#FFD166"} href={node.data.target.fields.link} />
                );
            } else if (node.data.target.sys.contentType.sys.id === "illustration") {
                return (
                    <Image
                        src={'https:' + node.data.target.fields.asset.fields.file.url}
                        height={node.data.target.fields.height}
                        width={node.data.target.fields.width}
                        alt={node.data.target.fields.description}
                    />
                );
            }
        },
        [BLOCKS.EMBEDDED_ENTRY]: (node) => {
            if (node.data.target.sys.contentType.sys.id === "button") {
                return (
                    <Button fullWidth={true} label={node.data.target.fields.content} newTab={true} backgroundColor={"#FFD166"} href={node.data.target.fields.link} />
                );
            }
            else if (node.data.target.sys.contentType.sys.id === "illustration") {
                return (
                    <Image
                        src={'https:' + node.data.target.fields.asset.fields.file.url}
                        height={node.data.target.fields.height}
                        width={node.data.target.fields.width}
                        alt={node.data.target.fields.description}
                    />
                );
            }
            else if (node.data.target.sys.contentType.sys.id === "html") {
                return (
                    <div dangerouslySetInnerHTML={{ __html: node.data.target.fields.html }} />
                );
            }
        },
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
            return (
                <Container className="overflow-auto">
                    <Image className="mw-100" style={{ minWidth: '600px' }}
                        src={'https:' + node.data.target.fields.file.url}
                        alt={node.data.target.fields.description}
                    />
                </Container>
            );
        },
        [BLOCKS.HEADING_2]: (node, children) => {
            return (
                <h2 id={'h2_' + slugify(node.content[0].value, { lower: true })}><div className='upper marginTitle'>{children}</div></h2>
            )
        },
        [BLOCKS.HEADING_3]: (node, children) => {
            return (
                <h3 id={'h3_' + slugify(node.content[0].value, { lower: true })}><div className='bold marginTop'>{children}</div></h3>
            )
        },
        [BLOCKS.HEADING_4]: (node, children) => {
            return (
                <h4 id={'h4_' + slugify(node.content[0].value, { lower: true })}>{children}</h4>
            )
        },
        [BLOCKS.HEADING_5]: (node, children) => {
            return (
                <h5 id={'h5_' + slugify(node.content[0].value, { lower: true })}>{children}</h5>
            )
        },
        [BLOCKS.HEADING_6]: (node, children) => {
            return (
                <h6 id={'h6_' + slugify(node.content[0].value, { lower: true })}><div className='bold marginTitle'>{children}</div></h6>
            )
        },
        [BLOCKS.PARAGRAPH]: (node, children) => {
            if (
                node.content.some(
                    childNode => childNode.nodeType === `text` &&
                        childNode.marks.some(
                            mark => mark.type === MARKS.CODE
                        )
                )
            ) {
                return children
            } else {
                return <p>{children}</p>
            }
        },
        [BLOCKS.QUOTE]: (node, children) => {
            return (
                <Message
                    content={children}
                    type='info'
                />
            )
        },
        [MARKS.CODE]: (text) => {
            return (
                <SyntaxHighlighter
                    language='javascript'
                    code={text}
                />
            )
        },
        [INLINES.HYPERLINK]: (node, children) => {
            return (
                <Link href={node.data.uri}>
                    <a target={
                        node.data.uri.startsWith(config.BASE_URL) ||
                            node.data.uri.startsWith('/') ||
                            node.data.uri.startsWith('#')
                            ? '' : '_blank'
                    }>
                        {children}
                    </a>
                </Link>
            )
        },
        [BLOCKS.LIST_ITEM]: (node, children) => {
            return (
                <ListItem item={children}/>
            )
        }
    }
};

export const convertUnsupportedMarkdownToRichText = (node) => {
    if (node.type === 'code') {
        return (
            {
                nodeType: 'embedded-entry-inline',
                content: [],
                data: {
                    target: {
                        sys: {
                            contentType: {
                                sys: {
                                    id: 'codeBlock'
                                }
                            }
                        },
                        fields: {
                            language: node.lang,
                            code: node.value
                        }
                    }
                }
            }
        )
    } else if (node.type === 'html' && node.value === '<br>') {
        return (
            {
                nodeType: 'text',
                data: {},
                marks: [],
                value: '\n\n'
            }
        )
    }
    return null;
}