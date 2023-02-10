import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import config from "../../../config";
import TopImageCaption from "../../components/Page1/MainSection/Haut/TopImageCaption";
import BigTitle from "../../components/BigTitle/BigTitle";
import TopOtherImageCaption from "../../components/Page1/MainSection/Haut/TopOtherImageCaption";
import BottomImageCaption from "../../components/Page1/MainSection/Bas/BottomImageCaption";
import BottomOtherImageCaption from "../../components/Page1/MainSection/Bas/BottomOtherImageCaption";
import FooterSection from "../../components/Page1/FooterSection";

export default function Page2() {
  const title = "Casapulse";
  const description =
    "Casapulse met à votre disposition tous les outils nécessaires pour exploiter la révolution digitale du secteur immobilier.";
  const image = "https://casapulse.fr/images/favicon-1024.png";

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
        <BigTitle title={"Chasseurs et Marchands de Biens"} subtitle={"Chasseurs immo, identifiez les opportunités de marché grâce à l’intelligence artificielle"} theme="dark" width="small" />
        <div className="main-section">
          <div className="section-container">
            <TopImageCaption imgSrc={'/images/page-2/petr-slovacek.png'} caption={'Lassé de sillonner les sites d’annonces à la recherche de la perle rare pour votre client ? Avec Casapulse, bienvenue dans l’immobilier 2.0.'}/>
            <TopOtherImageCaption
              titre={
                "Vos recherches de biens sur pilote automatique"
              }
              className="page-2"
              pargraphs={"Chaque jour, plus de 50 000 annonces immobilières sont publiées en ligne dans la France entière. Face à ces volumes colossaux, prospecter de façon exhaustive sans manquer la moindre opportunité semble relever de la mission impossible ? C’est compter sans les solutions Casapulse.<br/><br/>Nos algorithmes passent au crible toutes les sources disponibles sur internet, des grands portails immobiliers, aux réseaux d’agence et de mandataires, en passant par les sites d’annonces entre particuliers. Les offres de vente et de locations sont analysées, agrégées, synthétisées et enrichies puis mises à votre disposition sur un tableau de bord unique, couplé à un moteur de recherche conçu spécialement pour les professionnels de l’immobilier.<br/><br/>Et ce n’est pas tout, notre technologie propriétaire s’appuie sur l’analyse sémantique de la description des annonces pour en extraire toutes les informations pertinentes et géolocaliser les biens de façon précise. Les annonces présentes sur plusieurs plateformes et relatives à un même bien sont également regroupées par notre intelligence artificielle pour vous donner une vue synthétique de l’offre du marché . <br/><br/>Avec Casapulse, vous confiez le travail répétitif de recherche à votre assistant de prospection intelligent et vous concentrez vos efforts sur la négociation et la relation client pour une efficacité maximum."}
              imgSrc={"/images/page-2/browser-window-showing-person-working.png"}
            />
            <hr/>
            <BottomImageCaption titre={"Identifier des opportunités d’acquisition avant les autres "} paragraphs={"Sur le secteur fortement concurrentiel de l’investissement immobilier, la réactivité est devenu le fer de lance de la compétitivité. En zone tendue, une annonce sous le prix du marché ou présentant un bien rare peut en effet être retirée en quelques heures.<br/><br/>Grâce à Casapulse, vous êtes alerté immédiatement lorsqu’un bien correspondant à vos critères de recherche est mis sur le marché. Notre technologie assure une veille permanente et vous permet également de suivre sans effort tout mouvement sur votre secteur. Un bien que vous suivez tarde à se vendre et a vu son prix baisser ? Vous êtes informé immédiatement pour préparer votre négociation.<br/><br/>Notre algorithme ultra réactif est la garantie pour vous de conserver un temps d’avance et de rester au sommet de votre compétitivité."} imgSrc={"/images/page-2/petr-sl.png"} />
            <BottomOtherImageCaption titre={"Analysez le marché grâce à l’intelligence artificielle"} paragraphs={"Vous souhaitez convaincre votre client investisseur de la viabilité d’un projet d’acquisition ? Grâce à Casapulse, éditez d’un simple clic des rapports complets aux couleurs de votre société, présentant les dynamiques locales du marché, depuis les prix au m² par typologie de bien en passant par l’évolution des prix à la vente et à la location, jusqu’aux plus-values et rendements locatifs prévisionnels.<br/><br/>Vous préparez une négociation musclée avec un vendeur pour accroître la rentabilité d’une opération ? Nos outils produisent pour vous un rapport d’estimation sur mesure intégrant une évaluation factuelle du juste prix de vente, appuyée par les transactions historiques comparables et les annonces de ventes immobilières similaires."} imgSrc={"/images/page-2/robynne-hu.png"}/>
          </div>
        </div>
        <FooterSection imgSrc={"/images/page-2/Groupe-de-masques-7.png"} text={"Combinez vos connaissances du terrain à l’efficacité des outils Casapulse et devenez inarrêtable !"} label={"S'inscrire gratuitement"} href={config.REGISTER_URL}/>
      </Layout>
    </>
  );
}
