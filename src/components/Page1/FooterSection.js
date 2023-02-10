import React from "react";
import classnames from 'classnames';
import { Button } from "../Button/Button";
import PropTypes from 'prop-types';

const FooterSection = ({imgSrc, text, label, small=false, href}) => {
  return (
    <div className="footer-section">
      <div className="footer-section__container">
        <div className="image-container">
          <img src={imgSrc} />
        </div>
        <div className={classnames('caption-container', small ? 'caption-container-small' : '')}>
          <div className='text'>
            {text}
          </div>
          <div className="btn__container">
            <Button label={label} backgroundColor={"#FFD166"} href={href && href} />
          </div>
        </div>
      </div>
    </div>
  );
};

FooterSection.propTypes = {
  imgSrc: PropTypes.string,
  text: PropTypes.string,
  label: PropTypes.string,
  href: PropTypes.string,
  small: PropTypes.bool
};


export default FooterSection;
