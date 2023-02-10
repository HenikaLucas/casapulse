import React from 'react';
import Chiffres from "./Chiffres";

const ChiffreSection = () => {
  return (
    <div className="chiffre-section">
      <div className="section-container">
        <div className="titre">
          <h5>Casapulse en<br/>quelques chiffres</h5>
        </div>
        <div className="chiffres-elements">
          <div className="chiffre__row">
            <Chiffres
              number1={"36 millions"}
              number2={"d’annonces immobilières analysées"}
            />
            <Chiffres
              number1={"+50 000"}
              number2={"nouvelles annonces ajoutées par jour"}
            />
            <Chiffres
              number1={"6 millions "}
              number2={"de transactions immobilières recensées"}
            />
          </div>
          <div className="chiffre__row">
            <Chiffres
              number1={"85 millions"}
              number2={"de parcelles cadastrales étudiées"}
            />
            <Chiffres
              number1={"110 millions"}
              number2={"de notifications d’alertes envoyées"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChiffreSection;
