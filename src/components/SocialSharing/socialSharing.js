import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classnames from 'classnames';
import styles from './socialSharing.module.scss';


export default function SocialSharing({ url }) {
    const encodeUrl = encodeURIComponent(url)
    const facebookShareUrl = 'http://www.facebook.com/share.php?u=' + encodeUrl
    const twitterShareUrl = 'http://twitter.com/share?url=' + encodeUrl
    const linkedinShareUrl = 'https://www.linkedin.com/shareArticle?mini=true&url=' + encodeUrl
    return (
        <>
            <Container fluid="true">
                <Row xs="auto" className={classnames(styles.socialSharingRow, 'align-items-center')}>
                    <Col className={styles.socialIcon}>
                        <a target="_blank" rel="noreferrer" href={facebookShareUrl} title="partager sur facebook">
                            <img
                                src={'/images/social/pics/facebook.png'} 
                                width={22}
                                height={22}
                                alt={'partage facebook logo'}
                            />
                        </a>
                    </Col>
                    <Col className={styles.socialIcon}>
                    <a target="_blank" rel="noreferrer" href={linkedinShareUrl} title="partager sur linkedin">
                            <img
                                src={'/images/social/pics/linkedin.png'}
                                width={22}
                                height={22}
                                alt={'partage linkedin logo'}
                            />
                        </a>
                    </Col>
                    <Col className={styles.socialIcon}>
                    <a target="_blank" rel="noreferrer" href={twitterShareUrl} title="partager sur twitter">
                            <img
                                src={'/images/social/pics/twitter.png'}
                                width={22}
                                height={22}
                                alt={'partage twitter logo'}
                            />
                        </a>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

SocialSharing.propTypes = {
    url: PropTypes.string.isRequired
};