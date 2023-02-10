import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './author.module.scss'


export default function Author({ img, firstLine, secondLine }) {
    return (
        <>
            <Container fluid="true" className={styles.authorContainer}>
                <Row xs="auto" className='align-items-center'>
                    <Col>
                        <img
                            src={img}
                            width={70}
                            height={70}
                            alt={firstLine + ' auteur Casapulse'}
                        />
                    </Col>
                    <Col className={styles.authorDetailsContainer}>
                        <div className={styles.authorFirstLine}>
                            {firstLine}
                        </div>
                        <div className={styles.authorSecondLine}>
                            {secondLine}
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

Author.propTypes = {
    img: PropTypes.string.isRequired,
    firstLine: PropTypes.string.isRequired,
    secondLine: PropTypes.string.isRequired,
};