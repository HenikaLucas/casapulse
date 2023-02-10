/* eslint-disable react/display-name */
import React from 'react';
import slugify from 'slugify'
import PropTypes from 'prop-types';
import styles from './blogPostTableOfContent.module.scss'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types";

export default function BlogPostTableOfContent({ blogPostBodyContent }) {

    const headingTypes = [BLOCKS.HEADING_2, BLOCKS.HEADING_3]
    const headings = blogPostBodyContent.filter(item => headingTypes.includes(item.nodeType))
    const headingsDocument = {
        nodeType: 'document',
        content: headings,
    }
    const renderTableOfContentOptions = {
        renderNode: {
            [BLOCKS.HEADING_2]: (node, children) => {
                return (
                    <a className={styles.sectionLink} href={"#h2_" + slugify(node.content[0].value, { lower: true })}>
                        <li className={styles.section}>
                            {children}
                        </li>
                    </a>
                );
            },
            [BLOCKS.HEADING_3]: (node, children) => {
                return (
                    <a className={styles.subSectionLink} href={"#h3_" + slugify(node.content[0].value, { lower: true })}>
                        <li className={styles.subSection}>{children}</li>
                    </a>
                )
            },
        },
    };
    const tableOfContent = documentToReactComponents(headingsDocument, renderTableOfContentOptions);

    return (
        <div className={styles.programme}>
            <div className={styles.title}>
                AU PROGRAMME
            </div>
            <div>
                {tableOfContent}
            </div>
        </div>
    )
}

BlogPostTableOfContent.propTypes = {
    blogPostBodyContent: PropTypes.array,
};