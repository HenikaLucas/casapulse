import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * 
 * @props
 * type [horizontal, vertical]
 * textWidth= [full, medium, small] 
 */
const CardImage = ({image, title, text, type='vertical', textWidth='full', largeTitle = false, smallDesc = false, small = false, bigImg = false, ...other}) => {
    const className = other.className;
    return (
        <div className={classnames('cardImage', `cardImage__`+type, `cardImage__`+textWidth, largeTitle ? 'cardImage__largeTitle' : '', smallDesc ? 'cardImage__smallDesc' : '', className)}>
            <div className='cardImage__top'>
                <div className={classnames(bigImg ? 'cardImage__top__bigImage' : 'cardImage__top__image', className)}>
                    <img src={image}></img>
                </div>
                <div className='cardImage__top__title'>
                    <p dangerouslySetInnerHTML={{__html: title}}></p>
                </div>
            </div>         
            <div className={classnames('cardImage__bottom' , small ? 'cardImage__bottom-small' : '')}>
                <p dangerouslySetInnerHTML={{__html: text}}></p>
            </div>         
       </div>
    )
};

CardImage.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    type: PropTypes.string,
    textWidth: PropTypes.string,
    largeTitle: PropTypes.bool,
    smallDesc: PropTypes.bool,
    bigImg: PropTypes.bool,
    small: PropTypes.bool,
};

export default CardImage