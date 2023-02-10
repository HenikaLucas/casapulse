import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout/Layout';
import Head from 'next/head';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import styles from './cgu-cgv.module.scss';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } from '../../config';
import { createClient } from 'contentful';

const contentfulClient = createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_ACCESS_TOKEN
});

export async function getStaticProps() {
    let entry = await contentfulClient.getEntry('7ek9ypUjP3JMFIudR6Ix1W')
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

export default function CGUCGV({ data }) {
    let content = documentToReactComponents(data.fields.content);
    return (
        <Layout>
            <Head>
                <title>CGU-CGV Casapulse</title>
            </Head>
            <Container fluid="true" className='bianca'>
                <Row className='justify-content-center'>
                    <Col xs={11} md={10} lg={9} className={styles.main}>
                        {content}
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

CGUCGV.propTypes = {
    data: PropTypes.object.isRequired
};