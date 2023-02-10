import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, href, newTab = false, fullWidth = false, ...props }) => {
  const mode = primary ? 'custom-button--primary' : 'custom-button--secondary';
  return (
    <a href={href && href} target={newTab ? '_blank' : '_self'} rel="noreferrer">
    <button
      type="button"
      className={['custom-button', `custom-button--${size}`, mode, fullWidth ? 'custom-button__full' : '' ].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
    </a>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  newTab: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
