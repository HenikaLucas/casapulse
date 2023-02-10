import React from "react";
import PropTypes from "prop-types";

/**
 * caption: caption for the section
 */
  
const TextRightCaption = ({ caption }) => {
  return (
    <div className="textright-caption">
      <div className="textright-caption__container">
        <div className="caption">
            {caption?.map(item => (
                <p key={item} className="caption-paragraph" dangerouslySetInnerHTML={{__html: item}}></p>
            ))}
        </div>
      </div>
    </div>
  );
};

TextRightCaption.propTypes = {
    caption: PropTypes.array
};

export default TextRightCaption;
