import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import ImmobilierSection from '../components/ImmobilierSection/immobilierSection';
import SolutionSection from "../components/home/Section2/SolutionSection";
import config from "../../config";
import TechSection from '../components/TechSection/TechSection';
import ProductSection from '../components/ProductSection/ProductSection';
import ChiffreSection from "../components/home/Chiffres/ChiffreSection";
import ConfianceSection from '../components/ConfianceSection/ConfianceSection';


export default function Home() {

    const title = "Casapulse";
    const description = "Casapulse met à votre disposition tous les outils nécessaires pour exploiter la révolution digitale du secteur immobilier.";
    const image = "https://casapulse.fr/images/favicon-1024.png"

    return (
        <>
            <Layout>
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
                <ImmobilierSection image='images/home/immobilier-home.png'></ImmobilierSection>
                <SolutionSection />
                <TechSection />
                <ProductSection />
                <ChiffreSection />
                <ConfianceSection />
            </Layout >
        </>
    )
}