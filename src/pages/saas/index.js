import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import config from "../../../config";
import BigTitle from '../../components/BigTitle/BigTitle';
import OutilSection from '../../components/OutilSection/OutilSection';
import MoteurSection from '../../components/MoteurSection/MoteurSection';
import FooterSection from '../../components/Page1/FooterSection';


export default function Home() {

    const title = "Casapulse";
    const description = "Casapulse met à votre disposition tous les outils nécessaires pour exploiter la révolution digitale du secteur immobilier.";
    const image = "https://casapulse.fr/images/favicon-1024.png"

    return (
        <>
            <Layout theme={"dark"}>
                <Head>
                    <title>{title}</title>
                    <meta charSet="utf-8" />
                    <link rel="shortcut icon" type="image/jpg" href="/images/favicon.ico" />
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
                    title={'Plateforme Saas de prospection et d’analyse immobilière pour tous vos besoins professionnels'}
                    theme={'dark'}
                    width={'large'}
                />
                <OutilSection/>
                <MoteurSection/>
                <FooterSection 
                    label={"S'inscrire gratuitement"}
                    imgSrc={"/images/page-1/Groupe-de-masques-5.png"} 
                    text={"Inscrivez-vous pour tester Casapulse SaaS gratuitement  pendant 14 jours, sans engagement et ni carte bancaire."}
                    small={true}
                    href={config.REGISTER_URL}
                />
            </Layout >
        </>
    )
}