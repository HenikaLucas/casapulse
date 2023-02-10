import React from 'react';
import Head from 'next/head';
import config from "../../../config";
import Layout from '../../components/Layout/Layout';
import BigTitle from '../../components/BigTitle/BigTitle';
import CheckList from '../../components/CheckList/CheckList';
import TitleList from '../../components/TitleList/TitleList';
import ContentList from '../../components/ContentList/ContentList';
import DetailedCheck from '../../components/DetailedCheck/DetailedCheck';
import SubTitleList from '../../components/SubTitleList/SubTitleList';
import { Button } from "../../components/Button/Button";

export default function ValeursFoncieres() {

    const title = "Casapulse";
    const description = "Casapulse met à votre disposition tous les outils nécessaires pour exploiter la révolution digitale du secteur immobilier.";
    const image = "https://casapulse.fr/images/favicon-1024.png"

    return(
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
                <BigTitle title='Demandes de Valeurs Foncières : accédez à l’historique des ventes immobilières' />
                <div className='content'>
                    <TitleList title={'Demandes de Valeurs Foncières : de quoi s’agit-il ?'} />
                    <ContentList content={['La consultation des Demandes de Valeurs Foncières permet désormais à tout un chacun de connaître l’historique des transactions immobilières réalisées en France depuis l’année 2014. La base de données complète, publiée en Open Data donne notamment accès aux informations suivantes :']}/>
                    <CheckList list={[  'Adresse exacte des biens vendus', 
                                        'Nature des biens (appartement, maison, terrain, local commercial etc.)', 
                                        'Nombre de pièces', 
                                        'Surface habitable et surface des terrains', 
                                        'Prix d’achat, hors honoraires d’agence et frais de notaire'
                                    ]}
                                theme='dark'
                    />
                    <ContentList content={[ 'La publication de la base DVF est une véritable révolution et apporte une transparence sans précédent sur le secteur immobilier. DVF permet en effet aux professionnels de s’informer sur les dynamiques locales du marché, de délivrer des conseils mieux informés à leurs prospects et clients, ou encore d’estimer les prix de vente de biens ou de terrains.', 
                                            'Les particuliers quant à eux peuvent recourir à DVF pour obtenir une fourchette de prix dans le cadre de la vente ou de l’achat de biens immobiliers, ou encore pour réaliser certaines de leurs démarches administratives et fiscales.'
                                        ]}
                    />
                    <TitleList title={'Demandes de Valeurs Foncières : successeur de la base PATRIM'} />
                    <ContentList content={[ 'Vous avez peut-être entendu parler d’une autre base de données recensant les transactions immobilières historiques : le service PATRIM. Il s’agit de la base de données sur laquelle la Direction Générale des Finances Publiques (DGFiP) s’est historiquement appuyée pour estimer la valeur de biens immobiliers dans le cadre de calculs d’ISF (aujourd’hui remplacé par l’IFI), de successions ou encore de donations immobilières.', 
                                            'En 2014, la DGFiP a ouvert l’accès à la base PATRIM, afin de permettre aux particuliers d’estimer la valeur de leurs biens avec les mêmes outils que l’administration. Le service reste à l’époque limité à des usages précis : la déclaration d’ISF, le calcul de droits de succession ou encore de donations. En 2017 cependant, l’accès à PATRIM est généralisé et on peut désormais y recourir pour tout type d’usage. ',
                                            'Aujourd’hui, PATRIM est toujours d’actualité mais son utilisation reste contraignante. En effet, il est nécessaire pour consulter la base de données, de se connecter au site des impôts au moyen de son numéro fiscal et de remplir un formulaire pour obtenir un extrait des transactions immobilières. Par ailleurs, le nombre de requêtes est également limité. A l’inverse, les fichiers DVF sont disponibles instantanément et dans leur intégralité, sans besoin de se connecter. Ceci en fait une option de choix pour propulser de nouveaux usages tels que l’analyse de marché et l’estimation immobilière.'
                                        ]}
                    />
                    
                    <TitleList title={'Demandes de Valeurs Foncières : fréquence de mise à jour'} />
                    <ContentList content={[ 'La base des Demandes de Valeurs Foncières est mise à jour et publiée deux fois par an, en avril et en octobre, par les équipes d’Etalab, l’entité gouvernementale qui coordonne la politique d’ouverture et de partage des données publiques.', 
                                            'La dernière mise à jour a été publiée le 17 octobre 2022.'
                                        ]}
                    />
                    <DetailedCheck  check={['N° de disposition: ']} theme='dark'
                                    paragraph='un numéro unique attribué à chaque acte de vente. Un même acte de vente ou une même disposition peut correspondre à plusieurs “mutations” ou transactions'
                    />
                    <DetailedCheck  check={['Date mutation ']} theme='dark'
                                    paragraph='date de signature de l’acte de vente '
                    />
                    <DetailedCheck  check={['Nature mutation']} theme='dark'
                                    paragraph='un numéro unique attribué à chaque acte de vente. Un même acte de vente ou une même disposition peut correspondre à plusieurs “mutations” ou transactions'
                    />
                    <DetailedCheck  check={['Valeur foncière ']} theme='dark'
                                    paragraph='le montant de la transaction, hors honoraires d’agence ou frais de notaire '
                    />
                    <DetailedCheck  check={['Prix d’achat, hors honoraires d’agence et frais de notaire']} theme='dark'
                                    paragraph='l’ensemble des éléments identifiant l’adresse exacte du bien concerné par la mutation'
                                    listesub={[ 'N° voie',
                                                'B/T/Q',
                                                'Type de voie',
                                                'Code voie',
                                                'Voie',
                                                'Code postal',
                                                'Commune',
                                                'Code departement',
                                                'Code commune'
                                    ]}  
                    />
                    <DetailedCheck  check={['Cadastre ']} theme='dark'
                                    paragraph='l’ensemble des éléments caractérisant la parcelle cadastrale du bien concerné par la mutation'
                                    listesub={[ 'Préfixe de section',
                                                'Section',
                                                'N° plan',
                                                'N° Volume'
                                    ]}  
                    />
                    <DetailedCheck  check={['Lots et leur surface ']} theme='dark'
                                    paragraph='la liste des lots (appartement, cave, dépendance) rattachés à la mutation ainsi que les surfaces Carrez correspondantes, dans la limite de 5 lots'
                                    listesub={[ 'Nombre de lots',
                                                '1er lot',
                                                'Surface Carrez du 1er lot',
                                                '2ème lot',
                                                'Surface Carrez du 2ème lot',
                                                '3ème lot',
                                                'Surface Carrez du 3ème lot',
                                                '4ème lot',
                                                'Surface Carrez du 4ème lot',
                                                '5ème lot',
                                                'Surface Carrez du 5ème lot'
                                    ]}  
                    />
                    <DetailedCheck  check={['Type de local ']} theme='dark'
                                    paragraph='le type de bien concerné par la mutation (maison, appartement, dépendance (isolée) ou Local industriel et commercial ou assimilés)'
                                    listesub={[ 'Code type local',
                                                'Type local'
                                    ]}  
                    />
                    <DetailedCheck  check={['Surface réelle bâti']} theme='dark'
                                    paragraph='la somme de la surface réelle du local et des surfaces des dépendances'
                    />
                    <DetailedCheck  check={['Nombre pièces principales ']} theme='dark'
                                    paragraph='la somme de la surface réelle du local et des surfaces des dépendances'
                    />
                    <DetailedCheck  check={['Nature culture ']} theme='dark'
                                    paragraph='la nature du terrain concerné par la mutation (terrains à bâtir, bois, pâtures, carrières, etc.)'
                                    listesub={[ 'Nature culture',
                                                'Nature culture spéciale'
                                    ]}  
                    />
                    <DetailedCheck  check={['Surface terrain ']} theme='dark'
                                    paragraph='la surface du terrain concerné par la mutation'
                    />
                    
                    <TitleList title={'Demandes de Valeurs Foncières : successeur de la base PATRIM'} />
                    <ContentList content={[ 'Malgré la révolution que constitue la publication en Open Data de la base de données DVF, celle-ci présente un certain nombre de limitations dont il faudra tenir compte lors de son utilisation.'
                                        ]}
                    />
                    <SubTitleList subtitle={'Une consultation rendue compliquée par le volume de données'} />
                    <ContentList content={[ 'Le principal inconvénient de DVF est lié à sa consultation fastidieuse'
                                        ]}
                    />
                    <CheckList list={[  'Chaque fichier pèse entre 300 et 400 Mo et contient des millions de transactions', 
                                        'Ces fichiers CSV doivent être importés dans une base de donnée car ils sont trop volumineux pour être ouverts sur Excel', 
                                        'Telle qu’elle est distribuée, la donnée ne peut pas être triée, agrégée ou filtrée simplement (par exemple par type de bien, par zone géographique etc.)'
                                    ]}
                                theme='dark'
                    />
                    <SubTitleList subtitle={'Le retard de publication des transactions'} />
                    <ContentList content={[ 'Les données brutes répertoriées dans la base de données DVF sont principalement issues du service de la publicité foncière, alimenté directement par les notaires via l’application “Télé@ctes”.',
                                            'La saisie manuelle, le nettoyage des données et leur croisement avec les bases de données du cadastre impliquent un retard dans la mise à disposition des transactions. En pratique et comme abordé précédemment, la base de données DVF est mise à jour tous les 6 mois'
                                        ]}
                    />
                    <CheckList list={[  'En octobre avec les transactions jusqu’au mois de juin', 
                                        'En avril avec les transactions jusqu’au mois de décembre de l’année précédente'
                                    ]}
                                theme='dark'
                    />
                    <ContentList content={[ 'Pour les régions très dynamiques, cette fréquence d’actualisation de la base DVF peut s’avérer insuffisante dans l’optique d’obtenir une vision fiable du marché en temps réel. Pour pallier ce manquement, on pourra combiner à DVF d’autres sources comme par exemple un observatoire des annonces de vente publiées en ligne.'
                                        ]}
                    />
                    <SubTitleList subtitle={'Certains départements sont exclus de DVF'} />
                    <ContentList content={[ 'Certains départements ne sont pas référencés sur la base de données DVF : il s’agit du Haut-Rhin, Bas-Rhin, Moselle et Mayotte. Pour l’ancienne Alsace-Moselle, les transactions sont enregistrées dans le Livre Foncier, le système de publicité foncière local. A ce jour, son contenu n’est malheureusement pas ouvert au grand public.'
                                        ]}
                    />
                    
                    <TitleList title={'Mieux que les Demandes de Valeurs Foncières '} />
                    <ContentList content={[ 'La base DVF est une source d’information essentielle pour les professionnels de l’immobilier, elle permet en particulier d’effectuer des estimations plus précises, de comprendre les dynamiques du marché immobilier, ou encore de prospecter de façon plus efficace. Mais son utilisation est complexe et fastidieuse.',
                                            `Chez Casapulse, nous avons à cœur de simplifier la vie des professionnels de l’immobilier grâce au développement d'outils numériques performants et ludiques.<br/>
                                            Nos algorithmes nettoient, agrègent, enrichissent et analysent toutes les données liées aux marchés immobiliers, dont la base de données DVF, et restituent l’information au moyen d’une interface simple et intuitive`
                                        ]}
                    />
                    <CheckList list={[  'Recherchez une adresse ou un périmètre géographique par autocomplétion, ou en dessinant sur une carte', 
                                        'Filtrez simplement les transactions par typologie de biens',
                                        'Bénéficiez d’une vision à 360° des marchés grâce au recoupement des données DVF avec de multiples autres sources d’information (données socio-démographiques de l’INSEE, PLUs, base de données des bâtiments de France etc.)',
                                        'Plus besoin de passer un temps fou à rechercher des transactions parmi les milliers de lignes de la base DVF. Que vous soyez promoteur, agent, chasseur de biens ou tout autre professionnel de l’immobilier, décuplez votre efficacité en créant dès aujourd’hui votre compte gratuitement sur Casapulse.'
                                    ]}
                                theme='dark'
                    />
                    <div className="btn__container">
                        <Button
                            label={"S'inscrire gratuitement"}
                            backgroundColor={"#FFD166"}
                            href={config.REGISTER_URL}
                        />
                    </div>
                </div>
            </Layout>
        </>
    )
}