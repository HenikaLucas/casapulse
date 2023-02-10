import React from 'react';
import config from '../../../../config';
import Card from "./Card/Card";
import Title from "./Title/Title";


const SolutionSection = () => {
  return (
    <div className="solution-section">
      <div className="section-container">
        <div className="solution">
          <Title titre={'Une solution<br/>pour votre métier'} paragraph={'Casapulse offre une palette d’outils avancés pour les professionnels désireux de rester à la pointe sur leur secteur. Chasseurs de biens, marchands de biens, agents immobiliers, mandataires, promoteurs, notaires : <br/>Casapulse a une solution pour votre besoin.'} />
          <div className="cards">
            <Card
              titre={"Agents et Mandataires"}
              texte={
                "Multiplier les nouveaux mandats grâce à notre plateforme unique intégrant la pige immobilière, la prospection de terrain, l’estimation de biens et l’analyse de marché. Avec Casapulse, vous êtes accompagné du début à la fin : identifier de nouveaux prospects et remporter des mandats n’a jamais été aussi simple."
              }
              href={config.PRODUCT_AGENT.path}
            />
            <Card
              titre={"Chasseurs de biens"}
              texte={
                "Boostez votre prospection en utilisant notre interface de recherche unique et intuitive. Nos outils analysent vos critères de recherche et effectuent une veille permanente du marché immobilier pour dénicher en temps réel le bien idéal parmi toutes les annonces de vente et de location publiées en France. Biens exceptionnels, décotés ou à fort rendement, sécurisez ces perles rares pour vos clients, avant vos concurrents grâce à Casapulse."
              }
              href={config.PRODUCT_HUNTER.path}
            />
            <Card
              titre={"Promoteurs Immobiliers"}
              texte={
                "Décelez du foncier à fort potentiel en vous appuyant sur de puissants outils d'analyse du cadastre. Attractivité d’une parcelle, faisabilité de votre programme et coordonnées du propriétaire, toutes les informations critiques à la réalisation de votre projet sont à portée de clic sur Casapulse."
              }
              href={config.PRODUCT_DEVELOPER.path}
            />
            <Card
              titre={"Proptechs et Startups"}
              texte={
                "Développez des applications immobilières innovantes en vous appuyant sur l’expertise et les données Casapulse. Notre suite d'API sécurisée s’intègre à vos systèmes d’information et vous donne un accès illimité à toutes nos données de prospection, d’estimation, d’étude de marché et de veille concurrentielle."
              }
              href={config.PRODUCT_DATAHUB.path}
            />
          </div>
          <div className="quisomme">
            <h5>QUI SOMMES-NOUS?</h5>

             <div className="algorithmes__img">
              <img src="/images/home/two-people-working-remotely-2.png" />
            </div>
            <p>
              Casapulse est une équipe de <b>passionnés</b> de l’immobilier, de{" "}
              <b>data scientists</b> et d’<b>experts</b> du développement
              logiciel, réunis autour d’une mission simple : concevoir des
              outils numériques révolutionnaires pour{" "}
              <b>décupler la compétitivité</b> des professionnels de
              l’immobilier.
            </p>
          </div>
          <div className="algorithmes">
            <div className="algorithmes__caption">
              Les algorithmes propriétaires que nous avons développés s’appuient
              sur des méthodes avancées de science des données et d’intelligence
              artificielle pour consolider, croiser, analyser et enrichir
              l’ensemble des points d’information touchant à l’écosystème
              immobilier : annonces de vente et location, registres des
              notaires, données socio-démographiques, économiques et
              environnementales, bases de données fiscales et cadastrales, ou
              encore plans locaux d’urbanisme.
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
