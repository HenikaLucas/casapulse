import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import styles from './productCard.module.scss'


export default function ProductCard({ useCaseImage, useCaseText, productImage, productTitle, productText, buttonText, buttonLink }) {

    return (
        <Col className="col-12 col-md-6 col-xl-3 mb-3">
            <div className="text-center">
                <Image src={useCaseImage} width="50px" />
                <span className="fs-4 font-family-secondary ms-2 me-2">
                    {useCaseText}
                </span>
            </div>
            <Card className={styles.productCard}>
                <Card.Header className="bg-white align-content-center p-2">
                    <Card.Title className='mb-0 fs-6'>
                        <Image
                            src={productImage}
                            width='50px'
                            className='me-2 rounded-2 bg-light'
                        />
                        {productTitle}
                    </Card.Title>
                </Card.Header>
                <Card.Body className='pt-1 mt-2'>
                    <Card.Text>
                        {productText}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                    <a className="gradient-btn-dark fs-8 p-2 ps-4 pe-4" href={buttonLink} title={buttonText}>
                        {buttonText}
                    </a>
                </Card.Footer>
            </Card>
        </Col>
    )
}

ProductCard.propTypes = {
    useCaseImage: PropTypes.string.isRequired,
    useCaseText: PropTypes.object.isRequired,
    productImage: PropTypes.string.isRequired,
    productTitle: PropTypes.string.isRequired,
    productText: PropTypes.object.isRequired,
    buttonText: PropTypes.string.isRequired,
    buttonLink: PropTypes.string.isRequired
};