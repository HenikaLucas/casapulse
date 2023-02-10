import React from 'react';
import PropTypes from 'prop-types';

/**
 * 
 * @props
 * theme [dark, light]
 * 
 */
const ListItem = ({item, theme='dark'}) => {
    return (
        <div className='listItem__item'>
            <div className='listItem__image'>
                <img src={theme === 'dark'? '/images/icon/check-dark.png' : '/images/icon/check.png'}></img>
            </div>
            <div className='listItem__text'>
                {item}
            </div>
        </div>
    )
};

ListItem.propTypes = {
    item: PropTypes.string,
    theme: PropTypes.string
};
export default ListItem;