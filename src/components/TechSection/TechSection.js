import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import HorizontalCard from '../HorizontalCard/HorizontalCard';

const TechSection = () => {
    return (
        <Container fluid="true" className='tech-section'>
            <Row className='tech-section__top'>
                <div className='tech-section__top__image'>
                    <Image src='images/home/home-technology.png'/>
                </div>
                <div className='tech-section__top__text'>
                    <div className='tech-section__title'>
                        <p>La technologie<br/> 
                            Casapulse, au service<br/> 
                            de votre succès
                        </p>
                    </div>
                </div>
            </Row>
            <Row className='tech-section__list'>
                <Col lg={3}></Col>
                <Col>
                    <HorizontalCard
                        image={'images/home/big-data-card.svg'}
                        title={'BIG DATA'}
                        text={'Casapulse compile et analyse des millions de points d’information sur les marchés immobiliers, issues des annonces immobilières, des bases de données Open Data, des statistiques de l’INSEE, et de multiples autres sources. Grâce à notre technologie, vous devenez omniscient sur votre secteur.'}
                    />
                    <HorizontalCard
                        image={'images/home/ux-card.svg'}
                        title={'UX ET DATA VIZ'}
                        text={'Casapulse offre une expérience utilisateur optimisée. Les  interfaces de nos outils sont simples, ludiques et épurées et vous permettent d’interpréter des données de marché complexes grâce à des visualisations intuitives. Vous allez adorer les utiliser.'}
                    />
                    <HorizontalCard
                        image={'images/home/ai-card.svg'}
                        title={'INTELLIGENCE ARTIFICIELLE'}
                        text={'Casapulse exploite l’intelligence artificielle pour réaliser de façon efficace de multiples tâches à forte valeur ajoutée, allant de l’estimation à l’analyse automatique des caractéristiques d’annonces immobilières. Un gain de temps précieux à consacrer à vos clients.'}
                    />
                </Col>
            </Row>
        </Container>
    )
};
export default TechSection