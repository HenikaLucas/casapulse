import React from "react";
import Title from "../home/Section2/Title/Title";

const Page1Header = () => {
  return (
    <div className="page1-header">
      <div className="section-container">
        <Title
          titre={"Agents et Mandataires"}
          paragraph={
            "Rentrez davantage de mandats immobiliers, en ligne et sur le terrain"
          }
        />
      </div>
    </div>
  );
};

export default Page1Header;
