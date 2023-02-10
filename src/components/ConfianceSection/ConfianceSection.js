import React from 'react';
import ImageConfiance from "./ImageConfiance";

const ConfianceSection = () => {
  return (
    <div className="confiance-section">
      <div className="section-container">
        <div className="titre">
          <h5>Ils nous font confiance</h5>
        </div>
        <div className="confiance-elements">
          <div className="confiance__row">
            <ImageConfiance image='./././images/home/confiance/1.png'/>
            <ImageConfiance image='./././images/home/confiance/2.png'/>
            <ImageConfiance image='./././images/home/confiance/3.png'/>
            <ImageConfiance image='./././images/home/confiance/4.png'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfianceSection;
