import React from 'react';
import PropTypes from 'prop-types';

const BottomImageCaption = ({ titre, paragraphs, imgSrc }) => {
  return (
    <div className="bottom-img-caption">
      <div className="bottom-img-caption__container">
        <div className="titre">{titre}</div>
        <div className="img-and-caption">
          <div className="image">
            <img src={imgSrc} />
          </div>
          <div
            className="caption"
            dangerouslySetInnerHTML={{ __html: paragraphs }}
          ></div>
        </div>
      </div>
    </div>
  );
};

BottomImageCaption.propTypes = {
  titre: PropTypes.string,
  imgSrc: PropTypes.string,
  paragraphs: PropTypes.string
};

export default BottomImageCaption;
