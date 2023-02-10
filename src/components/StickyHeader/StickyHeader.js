import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';
import Image from 'react-bootstrap/Image';
import classnames from 'classnames';
import config from '../../../config';
import PropTypes from 'prop-types';


const StickyHeader = ({ backgroundColor, theme = 'light' }) => {
    const [isHidden, setIsHidden] = useState(false);

    const hideHeader = () => {
        const pos = window.pageYOffset;
        pos > 50 ? setIsHidden(true) : setIsHidden(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", hideHeader, { passive: true });

        return () => {
            window.removeEventListener("scroll", hideHeader);
        };
    }, []);

    let mainTheme = theme === "dark" ? 'stickyHeader__dark stickyHeader' : 'stickyHeader';
    let navBarClass = mainTheme;
    let navBarClassHidden = mainTheme +' stickyHeaderHidden';

    return (
        <>
            <Navbar
                className={isHidden? navBarClassHidden : navBarClass}
                expand="lg"
                style={backgroundColor && { backgroundColor }}
            >
                <Container>
                    <Link href="/" passHref>
                        <Navbar.Brand className={'navbarBrand'}>
                            <Image className={'navbarBrandImage'}
                                src="/images/logo-new.svg"
                                height={45}
                                width={180}
                                alt="Logo Casapulse"
                                itemProp="logo"
                            />
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className={'navbarToggleButton'} />
                    <Navbar.Collapse id="responsive-navbar-nav" className={'responsiveNavBar'}>
                        <Nav className="ms-lg-auto">
                            <div className="menu">
                                <Link href={"/"}>Accueil</Link>
                            </div>
                            <div className="menu">
                                <NavDropdown title="Produits">
                                    <Link href={"/" + config.DATAHUB.path}>{config.DATAHUB.name}</Link>
                                    <Link href={"/" + config.SAAS.path}>{config.SAAS.name}</Link>
                                </NavDropdown >
                            </div>
                            <div className="menu">
                                <NavDropdown title="Cas d'usages">
                                    <Link href={"/" + config.PRODUCT_AGENT.path}>{config.PRODUCT_AGENT.name}</Link>
                                    <Link href={"/" + config.PRODUCT_HUNTER.path}>{config.PRODUCT_HUNTER.name}</Link>
                                    <Link href={"/" + config.PRODUCT_DEVELOPER.path}>{config.PRODUCT_DEVELOPER.name}</Link>
                                    <Link href={"/" + config.PRODUCT_DATAHUB.path}>{config.PRODUCT_DATAHUB.name}</Link>
                                </NavDropdown >
                            </div>
                            <div className="menu">
                                <Link href={"/" + config.INFOS.path}>{config.INFOS.name}</Link>
                            </div>
                            <div className="menu">
                                <Link className="menu contact" href={"/" + config.CONTACT.path}>{config.CONTACT.name}</Link>
                            </div>
                        </Nav>
                        <Nav className="space-menu">
                            <Link href={config.SIGNIN_URL}><span className={classnames('signinLink', 'mt-3 mt-lg-0')}>SE CONNECTER</span></Link>
                            <Link href={config.REGISTER_URL} variant="outline-dark" size="sm"><span className={classnames('registerLink', 'mt-2 mt-lg-0')} >S&#39;INSCRIRE</span></Link>
                            {/* <Link className={classnames('signinLink', 'mt-3 mt-lg-0')} href={config.APP_BASE_URL + "/signin"}>SE CONNECTER</Link>
                            <Link className={classnames('registerLink', 'mt-2 mt-lg-0')} href={config.APP_BASE_URL + "/register"} variant="outline-dark" size="sm">S&#39;INSCRIRE</Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className={'ghostHeader'}>
            </div>
        </>
    )
}

StickyHeader.propTypes = {
    backgroundColor: PropTypes.string,
    theme: PropTypes.string
};

export default StickyHeader