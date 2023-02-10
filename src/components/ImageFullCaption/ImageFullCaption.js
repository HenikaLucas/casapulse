import React from "react";
import PropTypes from "prop-types"; 
import { Button } from "../Button/Button";
import config from "../../../config";

  /**
   * image: image for the section
   * caption: caption for the section
   * onclickplus: onclick function for the button
   */
  
const ImageFullCaption = ({image, caption, onclickplus}) => {
  return (
    <div className="imagefull-caption">
      <div className="imagefull-caption__container">
        <div className="screen__img">
          <img src={image} />
        </div>
        <div className="caption">
            {caption?.map(item => (
                <p key={item} className="caption-paragraph" dangerouslySetInnerHTML={{__html: item}}></p>
            ))}
            <br/>
            <Button
                label='En savoir plus'
                primary={true}
                onClick={onclickplus}
                href={'/'+ config.DATAHUB.path +'/documentation'}
            />
        </div>
      </div>
    </div>
  );
};

ImageFullCaption.propTypes = {
    image: PropTypes.string,
    caption: PropTypes.array,
    onclickplus: PropTypes.func,
};

export default ImageFullCaption;
