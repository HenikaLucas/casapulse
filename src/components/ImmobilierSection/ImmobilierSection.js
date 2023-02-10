import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import config from '../../../config';

export default function immobilierSection({image}) {
    return (
        <>
            <Row className='align-items-center mt-5 immo__container'>
                <Col xs={12} lg={5} className='text-center'>
                    <Image src={image} />
                </Col>
                <Col xs={12} lg={7} className='ps-4 fs-6 bloc-droite'>
                    <p className='title'>Décoder <br/>le marché de <br/>l&apos;immobilier</p>
                    <p className='contenu'>Suite d&apos;outils de prospection et d&apos;étude de marché pour professionnels de l&apos;immobiliers</p>
                    <p>
                        <a className='gradient-btn mt-4 sign-up' href={config.REGISTER_URL}>S&apos;INSCRIRE GRATUITEMENT</a>
                    </p>
                </Col>
            </Row>
        </>
        )
}

immobilierSection.propTypes = {
    image: PropTypes.string.isRequired,
};