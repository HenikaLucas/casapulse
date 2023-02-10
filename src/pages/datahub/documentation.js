import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout/Layout'
import DocumentationTableOfContent from '../../components/DocumentationTableOfContent/documentationTableOfContent'
import Head from 'next/head'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './documentation.module.scss';
import { renderOptions, convertUnsupportedMarkdownToRichText } from '../../lib/contentfulRenderer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { richTextFromMarkdown } from '@contentful/rich-text-from-markdown';
import { createClient } from 'contentful';
import classnames from 'classnames';
import config from "../../../config";

const contentfulClient = createClient({
    space: config.CONTENTFUL_SPACE_ID,
    accessToken: config.CONTENTFUL_ACCESS_TOKEN
});

export async function getStaticProps() {
    let entry = await contentfulClient.getEntry('4vNWOmr5mNBBvoEj2BhfrL')
        .then(function (entry) {
            return entry
        })
        .catch(error => {
            console.log(error);
            return null
        });
    return {
        props: {
            data: await richTextFromMarkdown(
                entry.fields.markdown,
                convertUnsupportedMarkdownToRichText
            )
        }
    }
}

export default function DocumentationDatahub({ data }) {
    console.log(JSON.stringify(data, null, 2));
    const { asPath } = useRouter();
    const title = 'Documentation Casapulse Data Hub';
    const description = 'Guide d\'utilisation, wikis et documentation pour Casapulse Data Hub.';
    const content = documentToReactComponents(data, renderOptions);

    return (
        <Layout>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta itemProp="name" content={title} />
                <link rel="canonical" href={config.BASE_URL + asPath} />
                <meta itemProp="description" content={description} />

                <meta property="og:url" content={config.BASE_URL + asPath} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
            </Head>
            <div className={styles.mainContent}>
                <Container fluid="true" className='bianca'>
                    <Row className='justify-content-center'>
                        <Col className={classnames('d-none d-lg-block sticky-top', styles.tableOfContent)} lg={3}>
                            {
                                <DocumentationTableOfContent content={data.content} />
                            }
                        </Col>
                        <Col xs={11} md={10} lg={9} style={{ overflow: 'hidden' }}>
                            <h1>{title}</h1>
                            <Row>
                                <Col xs={12}>
                                    {content}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Layout>
    )
}

DocumentationDatahub.propTypes = {
    data: PropTypes.object.isRequired
};
