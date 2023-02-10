import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Image from 'react-bootstrap/Image';
import Layout from '../Layout/Layout';
import PlanTable from '../PlanTable/planTable';
import ProductFeatureCard from '../ProductFeatureCard/productFeatureCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classnames from 'classnames';
import styles from './productPage.module.scss';

export default function ProductPage({
    metaTitle,
    metaDescription,
    metaImage,
    metaCanonicalUrl,
    pageTitle,
    pageSubtitle,
    pageCTALink,
    pageCTAText,
    pageHeroImage,
    whyTitle,
    whyFeatures,
    whomTitle,
    whomImage,
    whomUseCases,
    pricingSubtitle,
    pricingPlans
}) {

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
                    <div className={styles.section}>
                        <Container>
                            <Row className='align-items-center mb-4'>
                                <h2 className={classnames(styles.h2, "text-center")}>{whomTitle}</h2>
                            </Row>
                            <Row className='align-items-center fs-6'>
                                <Col lg={7} className='mb-lg-0 mb-5 d-flex justify-content-center align-items-center'>
                                    <Image
                                        src={whomImage}
                                        width='80%'
                                        alt={whomTitle}
                                    />
                                </Col>
                                <Col lg={5}>
                                    {
                                        whomUseCases.map((whomUseCase, index) => {
                                            return (
                                                <div key={index} className='mb-4 d-flex align-items-center'>
                                                    <Image
                                                        className='me-3'
                                                        src='/images/common/check.svg'
                                                        width='20px'
                                                        height='20px'
                                                        alt="check"
                                                    />
                                                    <div>
                                                        {whomUseCase}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className={classnames(styles.section, styles.shapeDividerTopContainer, styles.darkBg)}>
                        <div className={styles.shapeDividerTop}>
                            <svg className={styles.shapeDividerSVGBase} viewBox="0 0 1200 120" preserveAspectRatio="none">
                                <path className={styles.shapeFill} d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                            </svg>
                        </div>
                        <div className={styles.shapeDividerTop}>
                            <svg className={styles.shapeDividerSVGOverlay} viewBox="0 0 1200 120" preserveAspectRatio="none">
                                <path className={styles.shapeFill} opacity="0.5" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                            </svg>
                        </div>
                        <Container>
                            <Row className='align-items-center mb-4'>
                                <h2 className={classnames(styles.h2, "text-center")}>{whyTitle}</h2>
                            </Row>
                            <Row>
                                {
                                    whyFeatures.map((whyFeature, index) => {
                                        return (
                                            <ProductFeatureCard
                                                key={index}
                                                featureImage={whyFeature.image}
                                                featureTitle={whyFeature.title}
                                                featureText={whyFeature.text}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </Container>
                    </div>
                    <div className={styles.section}>
                        <Container>
                            <Row className='align-items-center'>
                                <h2 className={classnames(styles.h2, "text-center")}>Tarification</h2>
                            </Row>
                            <Row className={classnames("align-items-center justify-content-center mb-4 text-center fs-5")}>
                                <Col xs={12} lg={8}>
                                    {pricingSubtitle}
                                </Col>
                            </Row>
                            <PlanTable
                                plansData={pricingPlans}
                            />
                        </Container>
                    </div>
                </div>
            </Layout >
        </>
    )
}

ProductPage.propTypes = {
    metaTitle: PropTypes.string.isRequired,
    metaDescription: PropTypes.string.isRequired,
    metaImage: PropTypes.string.isRequired,
    metaCanonicalUrl: PropTypes.string.isRequired,
    pageTitle: PropTypes.string.isRequired,
    pageSubtitle: PropTypes.string.isRequired,
    pageCTAText: PropTypes.string.isRequired,
    pageCTALink: PropTypes.string.isRequired,
    pageHeroImage: PropTypes.string.isRequired,
    whyTitle: PropTypes.string.isRequired,
    whyFeatures: PropTypes.array.isRequired,
    whomTitle: PropTypes.string.isRequired,
    whomImage: PropTypes.string.isRequired,
    whomUseCases: PropTypes.array.isRequired,
    pricingSubtitle: PropTypes.string.isRequired,
    pricingPlans: PropTypes.array.isRequired,
    pricingCTALink: PropTypes.string.isRequired,
    pricingCTAText: PropTypes.string.isRequired
};