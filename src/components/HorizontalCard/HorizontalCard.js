import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';

const HorizontalCard = ({image, title, text}) => {
    return (
        <div className='horizontal-card'>
            <div className='horizontal-card__left'>
                <div className='horizontal-card__left__image'>
                    <Image src={image}></Image>
                </div>
            </div>
            <div className='horizontal-card__right'>
                <div className='horizontal-card__right__title'>
                    {title}
                </div>
                <div className='horizontal-card__right__text'>
                    {text}
                </div>
            </div>
        </div>
    )
};

HorizontalCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
};
export default HorizontalCard