import React from 'react';
import ProductPage from '../../components/ProductPage/productPage';
import config from "../../../config";

export default function DeveloperPage() {

    return (
        <ProductPage
            metaTitle={"Casapulse " + config.PRODUCT_DEVELOPER.name}
            metaDescription="Plateforme SaaS de veille concurrentielle et d'optimisation de portefeuille pour promoteurs immobiliers"
            metaImage={config.BASE_URL + "/images/" + config.PRODUCT_DEVELOPER.path + "/product-illustration.png"}
            metaCanonicalUrl={config.BASE_URL + "/" + config.PRODUCT_DEVELOPER.path}
            pageTitle={<>Casapulse <span className="accent-secondary-color">{config.PRODUCT_DEVELOPER.name}</span></>}
            pageSubtitle="Analyses compétitives, optimisation et suivi de vos programmes neufs"
            pageCTALink={"/" + config.CONTACT.path}
            pageCTAText={config.CONTACT.name}
            pageHeroImage={"/images/" + config.PRODUCT_DEVELOPER.path + "/product-illustration.svg"}
            whomTitle="Notre solution dédiée aux promoteurs immobiliers"
            whomImage={"/images/" + config.PRODUCT_DEVELOPER.path + "/user-illustration.svg"}
            whomUseCases={[
                <><b>Traquez votre positionnement concurrentiel en temps réel</b>. Visualisez l&#39;empreinte de vos compétiteurs au niveau local et suivez l&#39;écoulement de leurs stocks</>,
                <><b>Recherchez des terrains constructibles</b>, comparez différents emplacements et selectionnez les plus porteurs pour y implanter vos futurs programmes</>,
                <><b>Optimisez et faites évoluer votre stratégie tarifaire</b> en analysant la trajectoire des marchés de l&#39;immobiliers au niveau local</>
            ]}
            whyTitle={"Pourquoi Casapulse " + config.PRODUCT_DEVELOPER.name + " ?"}
            whyFeatures={
                [
                    {
                        image: "/images/" + config.PRODUCT_DEVELOPER.path + "/leaderboard-icon.svg",
                        title: "Benchmarks concurrentiels",
                        text: "Une vue à 360° du marché du neuf. Mesurez votre performance en termes de présence et d'écoulement des stocks par rapport à vos concurrents directs."
                    },
                    {
                        image: "/images/" + config.PRODUCT_DEVELOPER.path + "/line-chart.svg",
                        title: "Analyses de marché",
                        text: "De puissants outils d'analyse du marché immobilier. Observez l'évolution des prix au m² à la vente comme à la location, et assurez le suivi de vos programmes."
                    },
                    {
                        image: "/images/" + config.PRODUCT_DEVELOPER.path + "/map-pin.svg",
                        title: "Outils cartographiques",
                        text: "Visualisez les terrains à bâtir directement sur une carte et mesurer le potentiel de différents emplacements en fonction de multiples variables."
                    },
                    {
                        image: "/images/" + config.PRODUCT_DEVELOPER.path + "/building-icon.svg",
                        title: "Simulations de programme",
                        text: "Etudiez différentes configurations pour vos programmes et optimisez la valeur de votre foncier grâce aux dernières données de marché au niveau local."
                    }
                ]
            }
            pricingSubtitle={<>
                <div>Nous proposons des forfaits adaptés à tout type d&#39;organisation.< br /> Contactez-nous pour obtenir un devis.</div>
            </>}
            pricingPlans={[]}
            pricingCTALink={"/" + config.CONTACT.path}
            pricingCTAText={config.CONTACT.name}
        />
    )
}