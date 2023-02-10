import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Head from 'next/head';
import PlanTable from '../../../components/PlanTable/planTable';
import Layout from '../../../components/Layout/Layout';
import config from "../../../../config";


export default function AgentPricingPage() {

    const metaTitle = "Casapulse " + config.PRODUCT_AGENT.name + " - Tarifs";
    const metaDescription = "Plateforme SaaS de pige immobilière, veille concurrentielle et analyse du marché immobilier pour agents immobiliers";
    const metaImage = config.BASE_URL + "/images/" + config.PRODUCT_AGENT.path + "/product-illustration.png";
    const metaCanonicalUrl = config.BASE_URL + "/" + config.PRODUCT_AGENT.path + "/pricing";

    const plansData =
        [
            {
                planHeader: "GRATUIT",
                planPriceUnit: "GRATUIT",
                planPriceLabel: "pour toujours",
                planFeatures: [
                    <>Annonces immobilières : <span className="fw-bold">toutes</span></>,
                    <>Recherches enregistrées : <span className="fw-bold">3</span></>,
                    <>Recherche par mots-clés : <span className="fw-bold">non</span></>,
                    <>Filtre annonces particuliers : <span className="fw-bold">non</span></>,
                    <>Filtre changement de prix : <span className="fw-bold">non</span></>,
                    "",
                    <>Alertes simultanées : <span className="fw-bold">1</span></>,
                    <>Notifications d&#39;alerte : <span className="fw-bold">toutes les 24h</span></>,
                    "",
                    <>Recherches transactions : <span className="fw-bold">3 par jour</span></>,
                    <>Etudes de marché : <span className="fw-bold">3 par jour</span></>
                ],
                planCTAText: "Inscription gratuite",
                planCTALink: config.APP_BASE_URL + "/register",
            },
            {
                planHeader: "PRO",
                planPriceUnit: "39.90€",
                planPriceLabel: <>par mois</>,
                planFeatures: [
                    <>Annonces immobilières : <span className="fw-bold">toutes</span></>,
                    <>Recherches enregistrées : <span className="fw-bold">illimitées</span></>,
                    <>Recherche par mots-clés : <span className="fw-bold">oui</span></>,
                    <>Filtre annonces particuliers : <span className="fw-bold">oui</span></>,
                    <>Filtre changement de prix : <span className="fw-bold">oui</span></>,
                    "",
                    <>Alertes simultanées : <span className="fw-bold">15</span></>,
                    <>Notifications d&#39;alerte : <span className="fw-bold">instantanées</span></>,
                    "",
                    <>Recherches transactions : <span className="fw-bold">illimitées</span></>,
                    <>Etudes de marché : <span className="fw-bold">illimitées</span></>
                ],
                planCTAText: "Inscription gratuite",
                planCTALink: config.APP_BASE_URL + "/register",
            },
            {
                planHeader: "ENTREPRISE",
                planPriceUnit: "CONTACTEZ-NOUS",
                planPriceLabel: <><br /></>,
                planFeatures: [
                    <><b>Discounts de volume</b></>,
                    <>Accès par <b>webhooks et APIs</b></>,
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                ],
                planCTAText: "Contactez-nous",
                planCTALink: "/" + config.CONTACT.path,
            }
        ];
    return (
        <>
            <Layout>
                <Head>
                    <title>{metaTitle}</title>
                    <meta charSet="utf-8" />
                    <link rel="shortcut icon" type="image/jpg" href="/images/favicon.ico" />
                    <meta itemProp="name" content={metaTitle} />
                    <meta name="description" content={metaDescription} />
                    <link rel="canonical" href={metaCanonicalUrl} />

                    <meta itemProp="description" content={metaDescription} />
                    <meta itemProp="image" content={metaImage} />

                    <meta property="og:url" content={metaCanonicalUrl} />
                    <meta property="og:title" content={metaTitle} />
                    <meta property="og:description" content={metaDescription} />
                    <meta property="og:image" content={metaImage} />

                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={metaTitle} />
                    <meta name="twitter:description" content={metaDescription} />
                    <meta name="twitter:image" content={metaImage} />
                </Head>
                <Container>
                    <Row className="align-items-center justify-content-start">
                        <h1 className="fs-1 fw-bold mb-3">Casapulse <span className="accent-secondary-color">{config.PRODUCT_AGENT.name}</span></h1>
                        <div className="fs-5">
                            Tarifs et formules détaillés
                        </div>
                    </Row>
                    <Row className="mt-5 mb-5">
                        <PlanTable plansData={plansData} />
                    </Row>
                </Container>
            </Layout>
        </>
    )
}