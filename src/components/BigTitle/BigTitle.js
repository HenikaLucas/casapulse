import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

/**
 * 
 * @props
 * theme [dark, light]
 * width [full, large, medium, small]
 * 
 */
const BigTitle = ({title, subtitle, theme = 'dark', width = 'full'}) => {
  return (
    <div className={classnames('big-title', `big-title__`+theme, `big-title__`+width)}>
      <div className='big-title__container'>
        <h2>{title && title}</h2>
        <p>
            {subtitle && subtitle}
        </p>
      </div>
    </div>
  );
};

BigTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  theme: PropTypes.string,
  width: PropTypes.string,
};

export default BigTitle;
