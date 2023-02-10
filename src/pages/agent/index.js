import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import config from "../../../config";
import TopImageCaption from "../../components/Page1/MainSection/Haut/TopImageCaption";
import TopOtherImageCaption from "../../components/Page1/MainSection/Haut/TopOtherImageCaption";
import BottomImageCaption from "../../components/Page1/MainSection/Bas/BottomImageCaption";
import BottomOtherImageCaption from "../../components/Page1/MainSection/Bas/BottomOtherImageCaption";
import FooterSection from "../../components/Page1/FooterSection";
import BigTitle from "../../components/BigTitle/BigTitle";

export default function Page1() {
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
        <BigTitle title={"Agents et Mandataires"} subtitle={"Rentrez davantage de mandats immobiliers, en ligne et sur le terrain"} theme="dark" width="small" />
        <div className="main-section">
          <div className="section-container">
            <TopImageCaption
              imgSrc={"/images/page-1/joel-filipe.png"}
              caption={
                "Vous êtes agent immobilier ou mandataire ? Découvrez comment optimiser votre prospection et votre pige immobilière, pour rentrer davantage demandats."
              }
            />
            <TopOtherImageCaption
              titre={
                "Automatisez votre prospection en ligne grâce à des outils de pige avancés"
              }
              pargraphs={"Plus de 50 000 annonces immobilières sont publiées en ligne chaque jour dans la France entière. Pour garder la tête hors de l’eau dans cet océan d’opportunités tout en restant au sommet de votre réactivité, Casapulse met à votre disposition un assistant de pige intelligent<br/><br/>Nos algorithmes recensent les annonces parues sur tous les grands portails, sites d’annonces entre particuliers, sites d’agences et de mandataires, les agrègent et les enrichissent pour un contenu inédit.<br/><br/>Retrouvez sur un tableau de bord unique toutes les annonces publiées en ligne pour réaliser votre pige avec méthode.  Un moteur de recherche avancé, dédié aux professionnels, vous permet de cibler de façon précise les opportunités correspondant à votre périmètre.<br/><br/>Soyez alerté en temps réel lors de la mise sur le marché de nouveaux biens correspondant à vos critères, d’une baisse de prix ou du retrait d’une annonce suivie pour surveiller votre marché et conserver un temps d’avance.<br/><br/>Les annonces figurant sur plusieurs plateformes et correspondant à un même bien sont synthétisées par notre algorithme intelligent. Vous visualisez de façon simple toutes les informations relatives au bien, ainsi que l’historique complet depuis la mise en ligne, les modifications et changements de prix jusqu’au retrait de l’annonce.<br/><br/>Bénéficiez de notre technologie unique permettant de géolocaliser les biens de façon automatique et précise en fonction du contenu de leur description"}
              imgSrc={"/images/page-1/device-with-colleague-in-video-chat-window.png"}
            />
            <hr />
            <BottomImageCaption titre={"Prospectez sur le terrain en vous appuyant sur nos outils d’exploration"} paragraphs={"Ne partez plus jamais sur le terrain à l’improviste. Casapulse vous dote d’outils numériques puissants pour une efficacité de prospection décuplée.<br/><br/>Grâce à notre interface d’exploration cartographique, faites le lien entre le terrain et le monde digital. Vous avez repéré un appartement ou une maison digne d’intérêt ? Ciblez la sur une carte interactive et accédez à toutes les informations pertinentes qui se rattachent à la parcelle cadastrale d’un simple clic. Surface de la parcelle, année de construction du bâti, nombre de logements et surfaces associées, PLU en vigueur, historique des ventes à cette adresse, diagnostics DPE / GES réalisés, les parcelles n’ont plus aucun secret pour vous.<br/><br/>Cerise sur le gâteau, nos algorithmes recoupent toutes les informations disponibles en ligne pour dénicher pour vous les coordonnées du propriétaire."} imgSrc={"/images/page-1/christian-velitchkov.png"} />
            <BottomOtherImageCaption titre={"Convertissez vos prospects en mandats en mettant en avant votre connaissance pointue du marché"} paragraphs={"Une parfaite connaissance du marché est essentielle pour démontrer votre expertise et convertir vos prospects. Mais aujourd’hui, connaître le marché ne suffit plus, il faut également pouvoir en justifier factuellement. Ici encore, Casapulse se positionne comme votre partenaire de choix et vous dote d’une foule de données objectives sur l’état du marché, pour convaincre et engranger davantage de mandats.<br/><br/>Notre outil comprend un éditeur d’avis de valeur affichant les données clés dans un design dynamique présentant les couleurs et le logo de votre enseigne. Au format PDF, ce rapport d’estimation peut facilement être partagé à vos prospects pour être consulté sur tous les supports.<br/><br/>Sur ce document, Casapulse dresse pour vous le portrait robot du bien considéré et contextualise sa valeur. Fourchette de prix estimée, transactions historiques comparables, annonces de ventes immobilières similaires, attractivité du quartier : des arguments incontestables qui aideront à vous positionner en tant qu’expert auprès de vos prospects."} imgSrc={"/images/page-1/petr-slovacek.png"}/>
          </div>
        </div>
        <FooterSection imgSrc={"/images/page-1/Groupe-de-masques-5.png"} text={"L’intelligence artificielle de Casapulse vous fait passer dans la catégorie supérieure. Vous étiez déjà performant ? Devenez LA référence immobilière de votre secteur."} label={"S'inscrire gratuitement"} href={config.REGISTER_URL}/>
      </Layout>
    </>
  );
}
