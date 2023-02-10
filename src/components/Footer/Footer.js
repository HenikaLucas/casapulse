import React from 'react';
import Link from 'next/link';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import config from "../../../config";

export default function Footer() {
    return (
        <>
            <div className={'footer'}>
                <Container className="pt-4 pb-4 footer-container">
                    <Row className="justify-content-center align-content-top">
                        <Col xs={12} lg={3} className="ps-5 ps-lg-0 footer__brand">
                        <a href={"/"}>
                            <Image
                                src={'/images/footer/logo.svg'}
                                width={203}
                                height={82}
                                alt={'casapulse logo'}
                            />
                        </a>
                        <div className='footer__brand__text'>
                            <span><strong>Casapulse</strong>© {new Date().getFullYear()}. Tous droits réservés.</span>
                            <div>contact@casapulse.fr</div>
                            <div>15 rue des Halles, 75001 Paris, France</div>
                        </div>
                        </Col>
                        <Col xs={12} lg={3} className="ps-5 mb-4 footer-element">
                            <Row className="fs-6 fw-bold mb-3 footer__title">Produits</Row>
                            <Row className="fs-6 mb-3 footer-link">
                                <Link href={"/" + config.DATAHUB.path}>
                                    <a title={config.DATAHUB.name}>Casapulse DataHub</a>
                                </Link>
                            </Row>
                            <Row className="fs-6 mb-3 footer-link">
                                <Link href={"/" + config.SAAS.path}>
                                    <a title={config.SAAS.name}>Casapulse Saas</a>
                                </Link>
                            </Row>
                        </Col>
                        <Col xs={12} lg={3} className="ps-5 mb-4 footer-element">
                            <Row className="fs-6 fw-bold mb-3 footer__title">Cas d&apos;usage</Row>
                            <Row className="fs-6 mb-3 footer-link">
                                <Link href={"/" + config.PRODUCT_AGENT.path}>
                                    <a title={config.PRODUCT_AGENT.name}>{config.PRODUCT_AGENT.name}</a>
                                </Link>
                            </Row>
                            <Row className="fs-6 mb-3 footer-link">
                                <Link href={"/" + config.PRODUCT_HUNTER.path}>
                                    <a title={config.PRODUCT_HUNTER.name}>{config.PRODUCT_HUNTER.name}</a>
                                </Link>
                            </Row>
                            <Row className="fs-6 mb-3 footer-link">
                                <Link href={"/" + config.PRODUCT_DEVELOPER.path}>
                                    <a title={config.PRODUCT_DEVELOPER.name}>{config.PRODUCT_DEVELOPER.name}</a>
                                </Link>
                            </Row>
                            <Row className="fs-6 mb-3 footer-link">
                                <Link href={"/" + config.PRODUCT_DATAHUB.path}>
                                    <a title={config.PRODUCT_DATAHUB.name}>{config.PRODUCT_DATAHUB.name}</a>
                                </Link>
                            </Row>
                        </Col>
                        <Col xs={12} lg={2} className="ps-5 ps-lg-0 mb-4 footer-element mini">
                            <Row className="fs-6 fw-bold mb-3 footer__title">Ressources</Row>
                            <Row className="fs-6 mb-3 footer-link">
                                <Link href={"/" + config.BLOG.path}>
                                    <a title="Blog">Blog</a>
                                </Link>
                            </Row>
                        </Col>
                        <Col xs={12} lg={3} className="ps-5 ps-lg-0 mb-4 footer-element">
                            <Row className="fs-6 fw-bold mb-3 footer__title">À propos</Row>
                            <Row className="fs-6 mb-3 footer-link">
                                <Link href={"/" + config.CONTACT.path}>
                                    <a title={config.CONTACT.name}>{config.CONTACT.name}</a>
                                </Link>
                            </Row>
                            <Row className="fs-6 mb-3 footer-link">
                                <Link href={"/" + config.TERMS.path}>
                                    <a title={config.TERMS.name}>{config.TERMS.name}</a>
                                </Link>
                            </Row>
                            <Row xs="auto" className="fs-6 mb-3">
                                <Col className="pe-0">
                                    <a target="_blank" href="https://facebook.com/casapulse.fr" title="page facebook" rel="noreferrer">
                                        <Image
                                            src={'/images/social/facebook.svg'}
                                            width={20}
                                            height={20}
                                            alt={'page facebook logo'}
                                        />
                                    </a>
                                </Col>
                                <Col className="pe-0">
                                    <a target="_blank" href="https://linkedin.com/company/casapulse" title="page linkedin" rel="noreferrer">
                                        <Image
                                            src={'/images/social/linkedin.svg'}
                                            width={20}
                                            height={20}
                                            alt={'page linkedin logo'}
                                        />
                                    </a>
                                </Col>
                                <Col className="pe-0">
                                    <a target="_blank" href="https://twitter.com/casapulse1" title="page twitter" rel="noreferrer">
                                        <Image
                                            src={'/images/social/twitter.svg'}
                                            width={20}
                                            height={20}
                                            alt={'page twitter logo'}
                                        />
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}