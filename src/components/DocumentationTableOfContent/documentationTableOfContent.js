/* eslint-disable react/display-name */
import React from 'react';
import slugify from 'slugify'
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import styles from './documentationTableOfContent.module.scss'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types";

export default function DocumentationTableOfContent({ content }) {
    const headingTypes = [BLOCKS.HEADING_2, BLOCKS.HEADING_3, BLOCKS.HEADING_4]
    const headings = content.filter(item => headingTypes.includes(item.nodeType))
    const headingsDocument = {
        nodeType: 'document',
        content: headings,
    }
    const renderOptions = {
        renderNode: {
            [BLOCKS.HEADING_2]: (node) => {
                return (
                    <a className={styles.heading_2Link} href={"#h2_" + slugify(node.content[0].value, { lower: true })}>
                        <li className={styles.heading_2}>
                            {node.content[0].value}
                        </li>
                    </a>
                );
            },
            [BLOCKS.HEADING_3]: (node) => {
                return (
                    <a className={styles.heading_3Link} href={"#h3_" + slugify(node.content[0].value, { lower: true })}>
                        <li className={styles.heading_3}>
                            {node.content[0].value}
                        </li>
                    </a>
                )
            },
            [BLOCKS.HEADING_4]: (node) => {
                return (
                    <a className={styles.heading_4Link} href={"#h4_" + slugify(node.content[0].value, { lower: true })}>
                        <li className={styles.heading_4}>
                            {node.content[0].value}
                        </li>
                    </a>
                )
            },
        },
    };
    const tableOfContent = documentToReactComponents(headingsDocument, renderOptions);

    return (
        <Container className={styles.container}>
            {tableOfContent}
        </Container>
    )
}

DocumentationTableOfContent.propTypes = {
    content: PropTypes.array,
};