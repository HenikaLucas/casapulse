import React from "react";
import PropTypes from "prop-types"; 

const TopImageCaption = ({imgSrc, caption}) => {
  return (
    <div className="image-caption">
      <div className="image-caption__container">
        <div className="immobilier__img">
          <img src={imgSrc} />
        </div>
        <div className="caption">
          {caption}
        </div>
      </div>
    </div>
  );
};

TopImageCaption.propTypes = {
  imgSrc: PropTypes.string,
  caption: PropTypes.string
};

export default TopImageCaption;
