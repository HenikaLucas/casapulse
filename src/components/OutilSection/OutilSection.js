import React from 'react';
import Caption from '../Caption/Caption';
import ImageText from '../ImageText/ImageText';

const OutilSection = () => {
    return (
       <div className='outil-section'>
        <div className='outil-section__container'>
            <ImageText 
                list={['Recherche performante de biens immobiliers','Pige immobilière automatisée et captation de mandats','Prospection immobilière de terrain par analyse cartographique', 'Estimation de biens immobiliers, et étude de marché']}
                image={'/images/pages/outils-section.png'} 
                text={'Vous êtes à la recherche d’une solution immobilière digitale pour accroître votre productivité et l’efficacité de vos processus ?<br/>Découvrez Casapulse SaaS, l’application web aux fonctionnalités sur-mesure qui répond aux enjeux modernes des professionnels de l’immobilier.<br/><br/>Quel que soit votre métier, Casapulse SaaS vous dote d’outils digitaux sophistiqués pour rester à la pointe sur votre secteur'}   
            />
        </div>
        <Caption 
            text={'Grâce à notre outil SaaS hébergé dans le cloud, vous accédez à l’expertise de Casapulse depuis votre ordinateur, tablette ou smartphone, où que vous soyez. On vous emmène ?'}    
        />
       </div>
    )
};
export default OutilSection