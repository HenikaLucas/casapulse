import React from "react";
import PropTypes from "prop-types"; 
import classNames from "classnames";

const TopOtherImageCaption = ({ titre, pargraphs, imgSrc,...other }) => {
  const className = other.className ? other.className : "";
  return (
    <div className={classNames("other-img-caption", className)}>
      <div className="other-img-caption__container">
        <div className="caption">
          <div className="titre">{titre}</div>
          <div
            className="paragraphs"
            dangerouslySetInnerHTML={{ __html: pargraphs }}
          ></div>
        </div>
        <div className={classNames("image", className)}>
          <img src={imgSrc} />
        </div>
      </div>
    </div>
  );
};

TopOtherImageCaption.propTypes = {
  titre: PropTypes.string,
  imgSrc: PropTypes.string,
  pargraphs: PropTypes.string,
  caption: PropTypes.string
};

export default TopOtherImageCaption;
