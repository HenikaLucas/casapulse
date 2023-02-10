import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { renderOptions } from '../lib/contentfulRenderer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { createClient } from 'contentful';
import config from "../../config";

const contentfulClient = createClient({
    space: config.CONTENTFUL_SPACE_ID,
    accessToken: config.CONTENTFUL_ACCESS_TOKEN
});

export async function getStaticProps() {
    let entry = await contentfulClient.getEntry('tsvMU7Rx13Qf6WRUf9pKm')
        .then(function (entry) {
            return entry
        })
        .catch(error => {
            console.log(error);
            return null
        });
    return {
        props: {
            data: entry
        }
    }
}

export default function FAQs({ data }) {

    const title = "Questions fréquentes";
    const description = "Trouvez les reponses a vos questions";

    const faqs = documentToReactComponents(data.fields.content, renderOptions);

    return (
        <>
            <Layout theme='dark'>
                <Head>
                    <title>{title}</title>
                    <meta charSet="utf-8" />
                    <link rel="shortcut icon" type="image/jpg" href="/images/favicon.ico" />
                    <meta name="description" content={description} />
                    <meta itemProp="name" content={title} />
                    <link rel="canonical" href={config.BASE_URL + '/' + config.FAQS.path} />
                    <meta itemProp="description" content={description} />

                    <meta property="og:url" content={config.BASE_URL + '/' + config.FAQS.path} />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />

                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={title} />
                    <meta name="twitter:description" content={description} />
                </Head>
                <Container fluid="true" className='bianca faq'>
                    <Row className='justify-content-center'>
                        <Col xs={11} md={10} lg={9}>
                            <h1>{title}</h1>
                            {faqs}
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </>
    )
}

FAQs.propTypes = {
    data: PropTypes.object.isRequired
};