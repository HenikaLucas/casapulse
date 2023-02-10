import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link'
import styles from './blogPostSnippet.module.scss'
import classnames from 'classnames';

export default function BlogPostSnippet({ imageUrl, title, description, date, url }) {
    return (

        <Card className={styles.card}>
            <Card.Header className={styles.cardHeader}>
                <Link href={url}>
                    <a title={title}>
                        <Card.Img variant="top" src={imageUrl} className={classnames(styles.cardImg, 'mx-auto d-block')} alt={title} />
                    </a>
                </Link>
            </Card.Header>
            <Card.Body>
                <Link href={url}>
                    <a className={styles.cardTitleLink} title={title}>
                        <Card.Title className={classnames(styles.cardTitle, 'font-family-primary')}>{title}</Card.Title>
                    </a>
                </Link>
                <Card.Text className={styles.cardDescription}>{description}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Row className="align-items-center">
                    <Col>
                        <Link href={url}><Button className={styles.cardButton} variant="outline-dark" size="sm">Lire l&#39;article</Button></Link>
                    </Col>
                    <Col>
                        <Card.Text className={classnames(styles.cardDate, 'text-end')}>Le {date}</Card.Text>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
}

BlogPostSnippet.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};