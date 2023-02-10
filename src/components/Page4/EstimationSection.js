import React from "react";

const EstimationSection = () => {
  return (
    <div className="estimation-section">
      <div className="section-container">
        <div className="img-and-caption">
          <div className="img-and-caption__container">
            <div className="caption">
              <div className="titre">Estimation immobilière</div>
              <div className="paragraphs">
                S’appuyant sur l’analyse de millions de points d’informations
                issus des marchés immobiliers, Casapulse Data Hub propose un
                service d’estimation immobilière par API à la fois précis et
                transparent.
                <br />
                <br />
                Nos algorithmes analysent notamment les transactions historiques
                répertoriées par les notaires de France, les annonces de ventes
                et de locations publiées en ligne ainsi que les données
                sociodémographiques et d’aménagement du territoire au niveau
                local pour déterminer le juste prix de marché de vos biens
                immobiliers, à la vente ou à la location.
              </div>
            </div>
            <div className="img-container">
              <img src="/images/page-4/Groupe 160.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstimationSection;
