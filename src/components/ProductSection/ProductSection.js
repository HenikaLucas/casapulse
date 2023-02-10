import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import config from '../../../config';
import BigCard from '../BigCard/BigCard';

const ProductSection = () => {
    return (
        <Container fluid="true" className='product__container'>
            <div className='product-section'>
                <Row>
                    <Col>
                        <div className='product-section__title'>
                            <p> La suite de produits<br/>
                                Casapulse
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='product-section__image'>
                        <img src={'/images/home/product-illustration.svg'}></img>
                    </Col>
                </Row>
                <Row className='product-section__list'>
                    <Col className='product-section__list__cards'>
                        <div className='product-section__list__cards-top'>
                            <BigCard
                                number={'01'}
                                title={'Casapulse SaaS'}
                                description={'Casapulse SaaS est notre solution “Software as a Service”: une application web hébergée dans le cloud, accessible à chaque instant depuis votre ordinateur ou votre smartphone.'}
                                text={'Casapulse SaaS s’articule en 3 modules:<br/><br/><span>Recherche de biens et pige immobilière</span> pour accéder à toutes les annonces de vente et location du marché depuis un tableau de bord unique, muni d’un moteur de recherche avancé<br/><br/><span>Prospection immobilière pour explorer le terrain depuis un outil cartographique intuitif</span> intégrant données de marché, fiche d’identité des parcelles cadastrales, PLUs, historiques des ventes, coordonnées des propriétaires et bien d’autres informations<br/><br/><span>Estimation et analyse de marché</span> pour générer des avis de valeur et des rapports de marché au couleurs de votre enseigne'}
                                href={config.SAAS.path}
                            />
                        </div>
                        <div className='product-section__list__cards-bottom'>
                            <BigCard
                                theme={'light'}
                                number={'02'}
                                title={'Casapulse datahub'}
                                description={'Casapulse Data Hub  est une suite d’API (Application Programming Interface) complète donnant un accès direct aux données et algorithmes immobiliers développés par Casapulse.'}
                                text={'Il s’agit d’une solution particulièrement adaptée aux professionnels les plus sophistiqués, désireux d’intégrer l’expertise de Casapulse à leurs systèmes d’information, en vue de développer et d’enrichir des logiciels métiers internes ou des applications innovantes à destination de leurs utilisateurs et clients.'}
                                href={config.DATAHUB.path}
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
};
export default ProductSection