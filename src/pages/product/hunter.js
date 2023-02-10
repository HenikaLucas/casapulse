import React from 'react';
import ProductPage from '../../components/ProductPage/productPage';
import config from "../../../config";

export default function HunterPage() {

    return (
        <ProductPage
            metaTitle={"Casapulse " + config.PRODUCT_HUNTER.name}
            metaDescription="Plateforme SaaS de recherche et d'analyse immobilière pour chasseurs de biens"
            metaImage={config.BASE_URL + "/images/" + config.PRODUCT_HUNTER.path + "/product-illustration.png"}
            metaCanonicalUrl={config.BASE_URL + "/" + config.PRODUCT_HUNTER.path}
            pageTitle={<>Casapulse <span className="accent-secondary-color">{config.PRODUCT_HUNTER.name}</span></>}
            pageSubtitle="Toutes les annonces de ventes et locations immobilières, sur une plateforme unique"
            pageCTALink={config.APP_BASE_URL + "/register"}
            pageCTAText="Inscription gratuite"
            pageHeroImage={"/images/" + config.PRODUCT_HUNTER.path + "/product-illustration.svg"}
            whomTitle="Notre solution dédiée aux chasseurs de biens"
            whomImage={"/images/" + config.PRODUCT_HUNTER.path + "/user-illustration.svg"}
            whomUseCases={[
                <><b>Economisez des heures de recherches manuelles</b> et de configuration d’alertes sur les multiples plateformes d&#39;annonces immobilières</>,
                <><b>Ne manquez plus une seule opportunité</b> grâce à une couverture complète du marché, un moteur de recherche avancé et des alertes en temps réel</>,
                <><b>Recommandez à vos clients des biens rentables </b> à fort potentiel de plus-value en leur présentant les dynamiques locales du marché de l&#39;immobilier</>


            ]}
            whyTitle={"Pourquoi Casapulse " + config.PRODUCT_HUNTER.name + " ?"}
            whyFeatures={
                [
                    {
                        image: "/images/" + config.PRODUCT_HUNTER.path + "/infinity.svg",
                        title: "Couverture Exhaustive",
                        text: "Les annonces immobilières de la France entière issues des grands portails, sites d'agences et réseaux de mandataires. Plus de 50,000 offres sont agrégées et analysées chaque jour."
                    },
                    {
                        image: "/images/" + config.PRODUCT_HUNTER.path + "/hourglass.svg",
                        title: "Alertes Instantanées",
                        text: "Le moteur d'alerte le plus rapide du marché. Vous recevez une notification instantanément dès la parution d'un bien correspondant à vos critères de recherche."
                    },
                    {
                        image: "/images/" + config.PRODUCT_HUNTER.path + "/binoculars.svg",
                        title: "Recherches avancées",
                        text: "Un moteur de recherche spécialement conçu pour les professionnels. Filtrez par combinaisons de mots-clés, rendement locatif ou indicateurs socio-démographiques."
                    },
                    {
                        image: "/images/" + config.PRODUCT_HUNTER.path + "/line-chart.svg",
                        title: "Analyses approfondies",
                        text: "Des outils d'analyse transparents et objectifs. Comparer le potentiel de plus-value et la rentabilité de différents projets et partagez les analyses avec vos prospects et clients."
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