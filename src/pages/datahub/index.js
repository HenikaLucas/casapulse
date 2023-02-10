import React from 'react';
import Head from 'next/head';
import config from "../../../config";
import Layout from '../../components/Layout/Layout';
import BigTitle from '../../components/BigTitle/BigTitle';
import ImageFullCaption from '../../components/ImageFullCaption/ImageFullCaption';
import TopOtherImageCaption from '../../components/Page1/MainSection/Haut/TopOtherImageCaption';
import CheckList from '../../components/CheckList/CheckList';
import TextRightCaption from '../../components/TextRightCaption/TextRightCaption';
import FooterSection from '../../components/Page1/FooterSection';
import BottomOtherImageCaption from '../../components/Page1/MainSection/Bas/BottomOtherImageCaption';

export default function DataHub() {

    const title = "Casapulse";
    const description = "Casapulse met à votre disposition tous les outils nécessaires pour exploiter la révolution digitale du secteur immobilier.";
    const image = "https://casapulse.fr/images/favicon-1024.png"

    return(
        <>
            <Layout>
                <Head>
                    <title>{title}</title>
                    <meta charSet="utf-8" />
                    <link rel="shortcut icon" type="image/jpg" href="/images/favicon.ico" />
                    <meta name="description" content={description} />
                    <meta itemProp="name" content={title} />
                    <link rel="canonical" href={config.BASE_URL} />
                    <meta itemProp="description" content={description} />
                    <meta itemProp="image" content={image} />

                    <meta property="og:url" content={config.BASE_URL} />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                    <meta property="og:image" content={image} />

                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={title} />
                    <meta name="twitter:description" content={description} />
                    <meta name="twitter:image" content={image} />
                </Head>
                <BigTitle 
                        title='Casapulse DataHub'
                        subtitle='API de données immobilières pour la prospection et l’analyse de marché'
                        theme='light'
                        width='small'
                />
                <div className="datahub">
                    <div className="datahub-section">
                        <div className="section-container">
                            <ImageFullCaption
                                image={"/images/page-6/screen.png"}
                                caption={[  `Fort d’une équipe diverse de data scientists, d’experts du développement logiciel et de professionnels de l’immobilier, Casapulse a conçu un entrepôt de données et des algorithmes avancés permettant de parcourir, analyser et décrypter les marchés de l’immobilier.`,
                                            `Avec Casapulse Data Hub, vous pouvez désormais vous approprier cette expertise et concevoir vos propres solutions, en intégrant directement notre suite d’API à vos systèmes d’information.`,
                                            `Développez vos outils internes et applications innovantes grâce à Casapulse, et prenez une longueur d’avance sur votre secteur.`
                                        ]}
                            />
                            <TopOtherImageCaption
                                titre={ "Flux d’annonces et recherche immobilière " }
                                pargraphs={"L’API d’annonces en temps réel vous donne accès à un flux continu et exhaustif de toutes les annonces immobilières publiées sur les grands portails immobiliers, les sites d’agences et de mandataires ou encore les plateformes de petites annonces entre particuliers.<br/><br/> Au delà de la simple agrégation, nos algorithmes enrichissent l’information pour la rendre plus accessible et utile"}
                            />
                            <br/>
                            <CheckList
                                list={[ 'Déduplication et croisement des doublons',
                                        'Retrait des annonces frauduleuses',
                                        'Extraction d’informations par analyse des descriptions',
                                        'Géolocalisation des biens'
                                    ]}
                                theme='dark'
                            />
                            <TextRightCaption
                                caption={[  `Grâce à l’API de recherche d’annonces immobilières, vous disposez d’un flux de biens riche, structuré et continu pour créer vos propres outils de prospection ou d’étude de marché.`,
                                            `L’API permet également la création d’alertes programmatiques, pour recevoir les nouveaux biens dès leur publication sur le webhook de votre choix, ou être informé dès la modification du prix d’une annonce`
                                        ]}
                            />
                            <div className="section__img">
                                <img src={"/images/page-6/computer.png"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='under-datahub'>
                    <div className="estimation-section">
                        <div className="section-container"> 
                            <BottomOtherImageCaption
                                titre={"API d’estimation immobilière"}
                                paragraphs={
                                    `Les algorithmes de Casapulse consolident et analysent continuellement toutes les données ayant trait aux marchés de l’immobilier : des annonces de ventes et locations, aux registres de transactions des notaires en passant par les données publiques d’urbanisme et d’aménagement du territoire. <br/><br/>
                                    S’appuyant sur cette technologie, Casapulse Data Hub met à votre disposition une API permettant d’estimer de façon transparente et précise la valeur de vente ou de location de vos biens immobiliers.
                                    `
                                }
                                imgSrc={"/images/page-6/collaborating.png"}
                                className="light"
                            />
                        </div>
                    </div>
                    <FooterSection
                        text={"Prêts à révolutionner le secteur immobilier ? Contactez-nous pour plus d’informations sur Casapulse Data Hub"}
                        label={"Contactez-nous"}  
                        href={config.CONTACT.path}   
                    />       
                </div>
            </Layout>
        </>
    )
}