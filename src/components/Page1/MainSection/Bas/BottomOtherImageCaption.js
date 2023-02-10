import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";

const BottomOtherImageCaption = ({ titre, paragraphs, imgSrc, ...other }) => {
  const className = other.className ? other.className : "";
  return (
    <div className={classNames("bottom-other-img-caption", className)}>
      <div className="bottom-other-img-caption__container">
        <div className="caption">
          <div className="titre">{titre}</div>
          <div
            className="paragraphs"
            dangerouslySetInnerHTML={{ __html: paragraphs }}
          ></div>
        </div>
        <div className="image">
          <img src={imgSrc} />
        </div>
      </div>
    </div>
  );
};

BottomOtherImageCaption.propTypes = {
  titre: PropTypes.string,
  imgSrc: PropTypes.string,
  paragraphs: PropTypes.string
};

export default BottomOtherImageCaption;
