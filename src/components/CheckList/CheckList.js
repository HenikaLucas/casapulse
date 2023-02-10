import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * 
 * @props
 * theme [dark, light]
 * 
 */
const CheckList = ({list, theme='light'}) => {
    return (
        <div className={classnames('list', `list__`+theme)}>
            {list.map(item => (
                <div key={item} className='list__item'>
                    <div className='list__image'>
                        <img src={theme === 'dark'? '/images/icon/check-dark.png' : '/images/icon/check.png'}></img>
                    </div>
                    <div className='list__text'>
                        {item}
                    </div>
                </div>
            ))}
        </div>
    )
};

CheckList.propTypes = {
    list: PropTypes.array,
    theme: PropTypes.string
};
export default CheckList;