import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import config from "../../../config";
import TopImageCaption from "../../components/Page1/MainSection/Haut/TopImageCaption";
import BigTitle from "../../components/BigTitle/BigTitle";
import TopOtherImageCaption from "../../components/Page1/MainSection/Haut/TopOtherImageCaption";
import CheckList from "../../components/CheckList/CheckList";
import FooterSection from "../../components/Page1/FooterSection";
import CardImage from "../../components/CardImage/CardImage";
import BottomOtherImageCaption from "../../components/Page1/MainSection/Bas/BottomOtherImageCaption";

export default function Page4() {
  const title = "Casapulse";
  const description =
    "Casapulse met à votre disposition tous les outils nécessaires pour exploiter la révolution digitale du secteur immobilier.";
  const image = "https://casapulse.fr/images/favicon-1024.png";
  const checkLists = [
    "Déduplication des annonces",
    "Suppression des annonces trompeuses ou illicites",
    "Analyse du contenu des descriptions et extraction d’informations",
    "Géolocalisation des biens par quartier et adresse",
  ];

  return (
    <>
      <Layout theme={"dark"}>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <link
            rel="shortcut icon"
            type="image/jpg"
            href="/images/favicon.ico"
          />
          <meta name="description" content={description} />
          <meta itemProp="name" content={title} />
          <link rel="canonical" href={config.BASE_URL} />
          <meta itemProp="description" content={description} />
          <meta itemProp="image" content={image} />

          <meta property="og:url" content={config.BASE_URL} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={image} />
        </Head>
        <BigTitle
          title={"Startups et Proptechs"}
          subtitle={
            "Proptechs et startups de l’immobilier, créez et enrichissez vos applications innovantes avec Casapulse Data Hub"
          }
          theme="dark"
          width="small"
        />
        <div className="main-section">
          <div className="section-container">
            <TopImageCaption
              imgSrc={"/images/page-4/louis-paulin.png"}
              caption={
                "Vous êtes une proptech ou une startup de l’immobilier ? Appropriez-vous l’expertise de Casapulse pour développer vos propres solutions innovantes."
              }
            />
            <TopOtherImageCaption
              titre={"Flux d’annonces et recherche immobilière"}
              pargraphs={
                "Casapulse Data Hub offre un accès illimité à un flux programmatique d’annonces immobilières de vente et location. Grâce à cette API, vous bénéficiez d’une vue exhaustive du marché de l’immobilier, mise à jour à chaque instant.<br /><br />Loin d’une simple agrégation, nos algorithmes effectuent un travail complet de nettoyage et d'enrichissement de la donnée pour vous permettre de créer des services à forte valeur ajoutée"
              }
            />
            <br />
            <CheckList list={checkLists} theme={"dark"} />
            <div className="section-container__section-break"></div>
          </div>
        </div>
        <FooterSection
          text={"Discutons de votre cas d’usage !"}
          label={"contactez-nous"}
          href={config.CONTACT.path}
        />
        <div className="card-section">
          <div className="section-container">
            <CardImage
              textWidth="small"
              smallDesc = {true}
              title={"Application de recherche de bien"}
              text="Générez des leads pour vos produits immobiliers en offrant gratuitement à vos prospects une application performante de recherche de biens en vente ou en location"
              image={"/images/page-4/Groupe 137.png"}
              className="mini"
            />
            <CardImage
              textWidth="small"
              smallDesc = {true}
              title={"Outil interne de prospection"}
              text="Développez votre plateforme métier de prospection pour vos chasseurs immobiliers en combinant l’API de Casapulse à vos données internes"
              image={"/images/page-4/Groupe de masques 11.png"}
              className="mini"
            />
            <CardImage
              textWidth="small"
              smallDesc = {true}
              title={"CRM"}
              text="Intégrez notre flux d’annonces à votre CRM pour décuplez votre efficacité et la qualité de votre relation client"
              image={"/images/page-4/Groupe de masques 12.png"}
              className="mini"
            />
          </div>
        </div>
        <div className="estimation-section">
          <div className="section-container">
            <BottomOtherImageCaption
              titre={"Estimation immobilière"}
              paragraphs={
                "S’appuyant sur l’analyse de millions de points d’informations issus des marchés immobiliers, Casapulse Data Hub propose un service d’estimation immobilière par API à la fois précis et transparent.<br /><br />Nos algorithmes analysent notamment les transactions historiques répertoriées par les notaires de France, les annonces de ventes et de locations publiées en ligne ainsi que les données sociodémographiques et d’aménagement du territoire au niveau local pour déterminer le juste prix de marché de vos biens immobiliers, à la vente ou à la location."
              }
              imgSrc={"/images/page-4/Groupe 160.png"}
              className="light"
            />
          </div>
        </div>
        <FooterSection
          text={"Discutons de votre cas d’usage !"}
          label={"contactez-nous"}
          href={config.CONTACT.path}
        />
        <div className="card-section">
          <div className="section-container">
            <CardImage
              // largeTitle={true}
              bigImg = {true}
              textWidth="small"
              title={"Générateur de leads vendeurs"}
              text="Intégrez notre technologie d’estimation en marque blanche à vos formulaires pour générer des leads vendeurs depuis votre site web ou votre application mobile"
              image={
                "/images/page-4/device-with-colleague-in-video-chat-window.png"
              }
            />
            <CardImage
              // largeTitle={true}
              bigImg = {true}
              textWidth="small"
              title={"Outil de valorisation de portefeuille"}
              text="Appuyez-vous sur notre API d’estimation pour quantifier en temps réel la valeur d’un portefeuille immobilier et son évolution dans le temps"
              image={"/images/page-4/office-setup-with-video-chat-window.png"}
            />
            <CardImage
              // largeTitle={true}
              bigImg = {true}
              textWidth="small"
              title={"Détecteur de décote et d’opportunités immobilières"}
              text="Intégrez notre flux d’annonces à votre CRM pour décuplez votre efficacité et la qualité de votre relation client"
              image={"/images/page-4/studying-setup.png"}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
