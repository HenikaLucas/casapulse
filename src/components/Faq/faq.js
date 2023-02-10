import React from 'react';
import PropTypes from 'prop-types';
import Accordion from 'react-bootstrap/Accordion';
import styles from './faq.module.scss'


export default function FAQ({ question, answer }) {
    return (
        <>
            <Accordion className={styles.accordion}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{question}</Accordion.Header>
                    <Accordion.Body>
                        {answer}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

FAQ.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
};