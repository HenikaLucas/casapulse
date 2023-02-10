import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button } from '../Button/Button';

const BigCard = ({number, title, description, text, href, theme='dark'}) => {
    return (
        <div className={classnames('big-card', `big-card__`+theme)}>
            <div className='big-card__container'>
                <div className='big-card__title'>
                    <div className='big-card__title__number'>
                        {number}
                    </div>
                    <div className='big-card__title__text'>
                        {title}
                    </div>
                </div>
                <div className='big-card__body'>
                    <div className='big-card__body__left'>
                        <p>
                            {description}
                        </p>
                        <div className='big-card__body__left__button'>
                            <Button 
                                label='En savoir plus'
                                primary={true}
                                href={href}
                            />
                        </div>
                    </div>
                    <div className='big-card__body__right'>
                        <p dangerouslySetInnerHTML={{__html: text}}></p>
                    </div>
                </div>
            </div>
        </div>
    )
};

BigCard.propTypes = {
    number: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    text: PropTypes.string,
    href: PropTypes.string,
    theme: PropTypes.string
};
export default BigCard;