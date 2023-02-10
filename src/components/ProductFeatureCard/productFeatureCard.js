import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import classNames from 'classnames';


export default function ProductFeatureCard({ cardClass, featureImage, featureTitle, featureText }) {

    return (
        <Col xs={12} lg={6} xl={3} className="mb-4">
            <Card className={classNames("shadow-sm h-100", cardClass)}>
                <Card.Body className="p-4">
                    <Image
                        src={featureImage}
                        width={30}
                        alt={featureTitle}
                        className="mb-2"
                    />
                    <h3 className={"mt-1 mb-3 fs-5"}>{featureTitle}</h3>
                    <p className="fs-8">
                        {featureText}
                    </p>
                </Card.Body>
            </Card>
        </Col>
    )
}

ProductFeatureCard.propTypes = {
    cardClass: PropTypes.string,
    featureImage: PropTypes.string.isRequired,
    featureTitle: PropTypes.string.isRequired,
    featureText: PropTypes.string.isRequired,
};