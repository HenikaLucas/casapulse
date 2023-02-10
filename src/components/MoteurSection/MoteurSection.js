import React from 'react';
import CardImage from '../CardImage/CardImage';
import TextLayout from '../TextLayout/TextLayout';

const MoteurSection = () => {
    return (
       <div className='moteur-section'>
            <div className='moteur-section__container'>
                <div className='moteur-section__container__text'>
                    <TextLayout 
                        title={'Un moteur de recherche révolutionnaire pour automatiser vos prospections de biens immobiliers'}
                        text={'Portails immobiliers, réseaux d’agences et de mandataires ou sites d’annonces entres particuliers, les offres de ventes et de locations immobilières sont aujourd’hui dispersées aux quatre coins du web, et parcourir continuellement ces multiples sources constitue une activité chronophage et fastidieuse. Grâce à Casapulse, vous mettez vos recherches sur pilote automatique et vous obtenez une réactivité sans pareille sur le marché.'}
                        direction={'row'}
                    />
                </div>
                <div className='moteur-section__container__grid'>
                    <CardImage 
                        image={'/images/components/video-chat.png'}
                        title={'Couverture totale'}
                        text={"Les annonces immobilières de vente et de location de la France entière issues des grands portails, sites d'agences et réseaux de mandataires, accessibles sur une plateforme unique. Plus de 50,000 offres sont agrégées et analysées chaque jour."}
                    />
                    <CardImage 
                        image={'/images/components/online-class.png'}
                        title={'Recherches avancées'}
                        text={"Un moteur de recherche spécialement conçu pour les professionnels permettant de filtrer par combinaisons de mots-clés, décote par rapport au marché, rendement locatif ou indicateurs socio-démographiques."}
                    />
                    <CardImage 
                        image={'/images/components/computer-with-colleague.png'}
                        title={'Analyse par intelligence artificielle'}
                        text={"Notre intelligence artificielle identifie les doublons, extrait les informations pertinentes des descriptions, géolocalise les biens, filtre les annonces frauduleuses et calcule les métriques financières clés pour votre confort le plus total. "}
                        largeTitle={true}
                    />
                    <CardImage 
                        image={'/images/components/remote-working.png'}
                        title={'Réactivité maximum'}
                        text={"Grâce au moteur d'alerte le plus rapide du marché, vous recevez une notification instantanément dès la parution, la baisse du prix ou la mise à jour d'un bien correspondant à vos critères de recherche."}
                        smallDesc={true}
                    />
                </div>
            </div>
            <div className='moteur-section__container'>
                <div className='moteur-section__container__text'>
                    <TextLayout 
                        title={'Une carte interactive inédite pour accompagner vos prospections de terrain'}
                        text={'Casapulse SaaS met entre vos mains un outil cartographique puissant pour appuyer toutes vos prospections de terrain, en vous apportant une vision complète des marchés immobiliers au niveau local. Parcourez votre secteur géographique comme si vous étiez, et bénéficiez d’une mine de données actualisées en temps réel pour une parfaite compréhension de votre environnement.'}
                        direction={'column'}
                        small={true}
                    />
                </div>
                <div className='moteur-section__container__grid moteur-section__container__grid-horizontal'>
                    <CardImage 
                        image={'/images/icon/triangle-bar.png'}
                        title={'Analyse du marché'}
                        type={'horizontal'}
                        textWidth={'small'}
                        text={"Pointez un bâtiment, une parcelle, ou dessinez un périmètre sur la carte pour générer une analyse complète de la zone, allant de la distribution des biens par typologie à l’évolution des prix au m² à la vente ou la location."}
                        small={true}
                    />
                    <CardImage 
                        image={'/images/icon/small-house.png'}
                        title={'Carte d’identité et historiques complets des parcelles et bâtiments'}
                        type={'horizontal'}
                        textWidth={'small'}
                        text={"Visualisez en un clic toutes les informations pertinentes se rapportant à une parcelle ou un bâtiment pour préparer et cibler votre prospection : surface, nombre de logements, PLU en vigueur, historique de ventes à l’adresse et diagnostics techniques réalisés."}
                    />
                    <CardImage 
                        image={'/images/icon/woman-avatar.png'}
                        title={'Coordonnées des propriétaires'}
                        type={'horizontal'}
                        textWidth={'small'}
                        text={"Vous avez repéré un bien ou un terrain à fort potentiel ? Nos algorithmes recoupent une multitude de sources en ligne pour identifier les coordonnées du propriétaire et vous permettre de le contacter rapidement et simplement."}
                    />
                </div>
            </div>
            <div className='moteur-section__container'>
                <div className='moteur-section__container__text'>
                    <TextLayout 
                        title={'Un assistant intelligent pour l’analyse et l’estimation immobilière'}
                        text={'Casapulse analyse chaque jour des centaines de milliers de points d’information sur les marchés immobiliers. Grâce à cette mine de données, nos algorithmes d’intelligence artificielle réalisent pour vous une analyse approfondie du marché, pour estimer la valeur d’un bien, ou encore projeter l’attractivité d’un quartier.'}
                        direction={'column'}
                    />
                </div>
                <div className='moteur-section__container__grid-vertical'>
                    <CardImage 
                        image={'/images/icon/chart.png'}
                        title={'Estimation'}
                        type={'vertical'}
                        textWidth={'small'}
                        text={"Grâce à une technologie propriétaire s’appuyant sur l’historique des ventes de biens comparables, les prix des annonces par typologie de biens et l’attractivité de l’environnement local, Casapulse estime de façon précise et transparente les valeurs à la vente et à la location de vos biens immobiliers."}
                    />
                    <CardImage 
                        image={'/images/icon/round-chart.png'}
                        title={'Etude de marché'}
                        type={'vertical'}
                        textWidth={'small'}
                        text={"Ville, quartier, rue - ciblez votre périmètre de prédilection et Casapulse génère pour vous une étude de marché complète comprenant toutes les dynamiques locales du marché immobilier: prix au m² par typologie de bien, évolution des prix à la vente et à la location, tensions locatives, plus-values ou encore rendements locatifs prévisionnels"}
                    />
                    <CardImage 
                        image={'/images/icon/folder.png'}
                        title={'Génération de rapports au format PDF'}
                        type={'vertical'}
                        textWidth={'small'}
                        text={"Ville, quartier, rue - ciblez votre périmètre de prédilection et Casapulse génère pour vous une étude de marché complète comprenant toutes les dynamiques locales du marché immobilier: prix au m² par typologie de bien, évolution des prix à la vente et à la location, tensions locatives, plus-values ou encore rendements locatifs prévisionnels"}
                    />
                </div>
            </div>
       </div>
    )
};
export default MoteurSection