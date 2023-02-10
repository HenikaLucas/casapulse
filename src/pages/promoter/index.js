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

export default function Page3() {
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
        <BigTitle title={"Promoteurs Immobiliers"} subtitle={"Trouvez du foncier de qualité et analysez votre position concurrentielle"} theme="dark" width="small" />
        <div className="main-section">
          <div className="section-container">
            <TopImageCaption
              imgSrc={"/images/page-3/simone-hutsch.png"}
              caption={
                "Vous êtes promoteur immobilier ? Découvrez les fonctionnalités de l'application Casapulse pour dénicher de nouvelles opportunités de foncier à forte valeur ajoutée et suivre votre position concurrentielle en temps réel."
              }
            />
            <TopOtherImageCaption
              titre={
                "Identifiez des opportunités de foncier à fort potentiel de valeur "
              }
              pargraphs={"Dans un secteur fortement concurrentiel, trouver du foncier est un enjeu de taille pour la promotion immobilière. Véritable matière première de l’activité, le terrain constructible se fait de plus en plus rare notamment dans les zones fortement urbanisées. Dotez-vous d’outils performants pour identifier les opportunités, garantir en amont la faisabilité de votre projet et décupler votre performance.<br/><br/>Grâce à une interface d’exploration cartographique révolutionnaire, Casapulse vous permet de parcourir l’ensemble des terrains et parcelles cadastrales de façon interactive. Visualisez en un coup d'œil de multiples indicateurs d’attractivité et décelez les parcelles à fort potentiel d’exploitation pour y implanter vos futurs projets immobiliers.<br/><br/>Notre outil intègre les informations issues des plans locaux d’urbanisme (PLU) vous permettant d’estimer en quelques clics la faisabilité de votre projet immobilier au regard des contraintes techniques imposées dans le secteur concerné.<br/><br/>Cerise sur le gâteau, nos algorithmes parcourent de nombreuses sources en ligne et identifient pour vous les coordonnées des propriétaires."}
            />
            <hr />
            <BottomImageCaption titre={"Analysez les dynamiques du marché grâce à l’intelligence artificielle"} paragraphs={"Pour garantir la viabilité de vos programmes immobiliers, une étude minutieuse du marché est indispensable. Depuis une interface unique, Casapulse vous offre la possibilité d’analyser en profondeur les dynamiques du marché de l’ancien.<br/><br/>En amont et durant l'exécution de vos programmes, visualisez l’évolution des prix au m², à la vente et à la location au niveau hyper local. En consultant nos indicateurs de tension de marché, vous mesurerez également l’intensité de la demande pour différentes typologies de biens. Avec cette vue d’ensemble sur le marché, vos équipes disposent de toutes les cartes en main pour établir le programme immobilier qui s’intègre parfaitement à son environnement."} imgSrc={"/images/page-3/markus-spiske.png"} />
            <BottomOtherImageCaption titre={"Votre positionnement concurrentiel sur le marché du neuf"} paragraphs={"Nos algorithmes réalisent une veille permanente sur le marché du neuf et monitorent en temps réel le lancement de nouveaux programmes et l’écoulement de leurs stocks sur l’ensemble les plateformes en ligne.<br/><br/>Nos outils vous octroient ainsi une visibilité sans pareille sur l’empreinte des acteurs du marché de la promotion, leurs directions stratégiques et leurs performances de vente. Avec Casapulse, votre marché et votre positionnement concurrentiel n'auront plus aucun secret pour vous."} imgSrc={"/images/page-3/tilted-wavy-graph-and-code-screen.png"}/>
          </div>
        </div>
        <FooterSection imgSrc={"/images/page-3/Groupe-de-masques-6.png"} text={"Vous êtes prêt à multiplier les permis de construire ? Contactez-nous pour une démonstration produit."} label={"S'inscrire gratuitement"} href={config.REGISTER_URL}/>
      </Layout>
    </>
  );
}
