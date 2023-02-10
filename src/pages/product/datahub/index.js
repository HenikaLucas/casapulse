import React from 'react';
import Head from 'next/head';
import Layout from '../../../components/Layout/Layout';
import PlanTable from '../../../components/PlanTable/planTable';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SyntaxHighlighter from '../../../components/syntaxHighlighter';
import config from "../../../../config";
import classnames from 'classnames';
import styles from '../../../components/ProductPage/productPage.module.scss';


export default function DataHubPage() {
    const metaTitle = "Casapulse " + config.PRODUCT_DATAHUB.name;
    const metaDescription = "Suite d'API donnant accès à toutes les données des marchés immobiliers de Casapulse";
    const metaImage = config.BASE_URL + "/images/" + config.PRODUCT_DATAHUB.path + "/product-illustration.png";
    const metaCanonicalUrl = config.BASE_URL + "/" + config.PRODUCT_DATAHUB.path;
    const pageTitle = <>Casapulse <span className="accent-secondary-color">{config.PRODUCT_DATAHUB.name}</span></>;
    const pageSubtitle = "Toutes les données des marchés immobiliers, accessibles du bout des doigts";
    const pageCTALink = "/" + config.CONTACT.path;
    const pageCTAText = config.CONTACT.name;
    const pageHeroImage = "/images/" + config.PRODUCT_DATAHUB.path + "/product-illustration.svg";
    const pricingSubtitle = <>
        <div>Nous proposons des forfaits adaptés à tout type d&#39;organisation.< br /> Contactez-nous pour obtenir un devis.</div>
        <a className="gradient-btn-dark mt-4" href={"/" + config.CONTACT.path} title={config.CONTACT.name}>
            {config.CONTACT.name}
        </a>
    </>;
    const pricingPlans = [];
    return (
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
            <div>
                <div className={classnames(styles.section, styles.topSection, styles.shapeDividerBottomContainer, styles.darkBg)}>
                    <Container>
                        <Row className="align-items-center justify-content-start">
                            <Col lg={5}>
                                <h1 className="fs-1 fw-bold mb-3">{pageTitle}</h1>
                                <div className="fs-5">
                                    {pageSubtitle}
                                </div>
                                <a className="gradient-btn mt-4" href={pageCTALink} title={pageCTAText}>
                                    {pageCTAText}
                                </a>
                            </Col>
                            <Col lg={5} className="mt-4 lg-mt-0">
                                <Image
                                    src={pageHeroImage}
                                    alt={metaTitle}
                                    width="80%"
                                />
                            </Col>
                        </Row>
                    </Container>
                    <div className={styles.shapeDividerBottom}>
                        <svg className={styles.shapeDividerSVGBase} viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path className={styles.shapeFill} d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                        </svg>
                    </div>
                    <div className={styles.shapeDividerBottom}>
                        <svg className={styles.shapeDividerSVGOverlay} viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path className={styles.shapeFill} opacity="0.5" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div>
                <Container>
                    <Row className="mt-5 align-items-center">
                        <Col xs={12} lg={7} className="ps-4">
                            <h2>Accès aux données par API</h2>
                            <p>
                                L&#39;intégralité des données Casapulse est <strong>accessible via une API REST sécurisée</strong>, mise à jour à chaque instant en fonction de millions de points d&#39;informations.
                            </p>
                            <p>
                                L&#39;accès programmatique aux données permet aux utilisateurs les plus avancés <strong>d&#39;intégrer l&#39;expertise de Casapulse directement dans leurs systèmes d&#39;informations et applications propriétaires</strong>, et offre ainsi une flexibilité sans limite.
                            </p>
                            <Row className='mt-4 mb-5'>
                                <Col>
                                    {/*
                                    <a className="gradient-btn-dark me-3" href={"/" + config.PRODUCT_DATAHUB.path + "/" + config.DOC.path} title="Documentation API" target="_blank" rel="noreferrer">
                                        {config.DOC.name}
                                    </a>
                                    */}
                                    <a className="gradient-btn-dark me-3" href={"/" + config.CONTACT.path} title={config.CONTACT.name} target="_blank" rel="noreferrer">
                                        {config.CONTACT.name}
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} lg={5} className="text-center">
                            <SyntaxHighlighter
                                code={
                                    '{\n' +
                                    '   "geography": {\n' +
                                    '        "type": "department"\n' +
                                    '        "name": "Charente-Maritime",\n' +
                                    '        "code": "charente maritime",\n' +
                                    '    },\n' +
                                    '    "data": {\n' +
                                    '        "transactions": {\n' +
                                    '            "count": 1137,\n' +
                                    '            "median_price_m2": 2812,\n' +
                                    '            "variation_median_price_m2_1_year": 8.4,\n' +
                                    '            "variation_median_price_m2_5_year": 15.6\n' +
                                    '        },\n' +
                                    '        "listings": {\n' +
                                    '            "average_gross_yield": 4.8\n' +
                                    '            "...": "..."\n' +
                                    '        }\n' +
                                    '    }\n' +
                                    '}'
                                }
                                language="json"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={classnames(styles.section)}>
                <Container>
                    <Row className='align-items-center mt-5'>
                        <h2 className={classnames(styles.h2, "text-center")}>Tarification</h2>
                    </Row>
                    <Row className={classnames(styles.smallTextParagraph, "align-items-center justify-content-center text-center")}>
                        <Col xs={12} lg={8}>
                            {pricingSubtitle}
                        </Col>
                    </Row>
                    <PlanTable
                        plansData={pricingPlans}
                    />
                </Container>
            </div>
        </Layout>
    )
}