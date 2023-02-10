import React from 'react';
import ProductPage from '../../components/ProductPage/productPage';
import config from "../../../config";

export default function AgentPage() {

    return (
        <ProductPage
            metaTitle={"Casapulse " + config.PRODUCT_AGENT.name}
            metaDescription="Plateforme SaaS de pige immobilière, veille concurrentielle et analyse du marché immobilier pour agents immobiliers"
            metaImage={config.BASE_URL + "/images/" + config.PRODUCT_AGENT.path + "/product-illustration.png"}
            metaCanonicalUrl={config.BASE_URL + "/" + config.PRODUCT_AGENT.path}
            pageTitle={<>Casapulse <span className="accent-secondary-color">{config.PRODUCT_AGENT.name}</span></>}
            pageSubtitle="Pige, étude de marché et veille concurentielle, sur une plateforme unique"
            pageCTALink={config.APP_BASE_URL + "/register"}
            pageCTAText="Inscription gratuite"
            pageHeroImage={"/images/" + config.PRODUCT_AGENT.path + "/product-illustration.svg"}
            whomTitle="Notre solution dédiée aux agents immobiliers"
            whomImage={"/images/" + config.PRODUCT_AGENT.path + "/user-illustration.svg"}
            whomUseCases={
                [
                    <><b>Automatisez votre prospection</b> et ne ratez plus un seul mandat en exploitant notre plateforme de pige exhaustive et ultra performante</>,
                    // <><b>Estimez en quelques clics la valeur de vos biens immobiliers</b> grâce à des outils d&#39;analyse s&#39;appuyant sur des données de marché détaillées et l&#39;intelligence artificielle</>,
                    <><b>Identifiez les biens ayant fait l&#39;objet d&#39;une baisse de prix ou recemment retirés du marché</b> pour concentrer vos efforts de prospection sur vos meilleures opportunités</>,
                    <><b>Combinez votre expertise aux rapports et analyses de marché de Casapulse</b> pour conserver un temps d&#39;avance et maximiser votre compétitivité</>
                ]}
            whyTitle={"Pourquoi Casapulse " + config.PRODUCT_AGENT.name + " ?"}
            whyFeatures={
                [
                    {
                        image: "/images/" + config.PRODUCT_AGENT.path + "/infinity.svg",
                        title: "Pige exhaustive",
                        text: "Les annonces immobilières de particuliers de la France entière combinées à un puissant moteur de recherche pour identifier vos prospects sans effort."
                    },
                    {
                        image: "/images/" + config.PRODUCT_AGENT.path + "/crm.svg",
                        title: "Suivi de prospection",
                        text: "Un Gestionnaire de Relation Client intégré, vous permettant d'assurer le suivi de vos prospects et mandats directement depuis votre interface de pige."
                    },
                    {
                        image: "/images/" + config.PRODUCT_AGENT.path + "/euro.svg",
                        title: "Dossiers d'estimation",
                        text: "Un générateur de dossiers d'estimation au format PDF simple et intuitif, partageable directement avec vos prospects."
                    },
                    {
                        image: "/images/" + config.PRODUCT_AGENT.path + "/line-chart.svg",
                        title: "Analyses de marché",
                        text: "Des visualisation des dynamiques du marché immobilier au niveau local et des benchmarks compétitifs pour identifier et tracker l'activité de vos concurrents."
                    }
                ]
            }
            pricingSubtitle={
                <>Inscription gratuite, sans engagement et sans carte de paiement.</>
            }
            pricingPlans={[
                {
                    planHeader: "GRATUIT",
                    planPriceUnit: "GRATUIT",
                    planPriceLabel: "pour toujours",
                    planFeatures: [
                        "Toutes les annonces",
                        "Prospection illimitée",
                        <>Moteur de recherche</>,
                        <>Alertes et notifications</>,
                        <>Outils d&#39;étude de marché limités</>,
                        "",
                        ""
                    ],
                    planCTALink: config.APP_BASE_URL + "/register",
                    planCTAText: "Inscription gratuite"
                },
                {
                    planHeader: "PRO",
                    planPriceUnit: "39.90€",
                    planPriceLabel: <>par mois</>,
                    planFeatures: [
                        "Toutes les annonces",
                        "Prospection illimitée",
                        <>Moteur de recherche <b>avancé</b></>,
                        <>Alertes et notifications <b>en temps réel</b></>,
                        <>Outils d&#39;étude de marché <b>sans limite</b></>,
                        "",
                        ""
                    ],
                    planCTALink: config.APP_BASE_URL + "/register",
                    planCTAText: "Inscription gratuite"
                },
                {
                    planHeader: "ENTREPRISE",
                    planPriceUnit: "CONTACTEZ-NOUS",
                    planPriceLabel: <><br /></>,
                    planFeatures: [
                        "Toutes les annonces",
                        "Prospection illimitée",
                        <>Moteur de recherche <b>avancé</b></>,
                        <>Alertes et notifications <b>en temps réel</b></>,
                        <>Outils d&#39;étude de marché <b>sans limite</b></>,
                        <><b>Discounts de volume</b></>,
                        <>Accès par <b>webhooks et APIs</b></>,
                    ],
                    planCTALink: "/" + config.CONTACT.path,
                    planCTAText: "Contactez-nous"
                }
            ]}
        />
    )
}