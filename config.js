const config = {
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    APP_BASE_URL: process.env.NEXT_PUBLIC_APP_BASE_URL,
    REGISTER_URL: 'https://app.casapulse.fr/register',
    SIGNIN_URL: 'https://app.casapulse.fr/signin',
    PRODUCT_HUNTER: {
        name: 'Chasseurs et Marchands',
        path: 'hunter'
    },
    PRODUCT_AGENT: {
        name: 'Agents et Mandataires',
        path: 'agent'
    },
    PRODUCT_DEVELOPER: {
        name: 'Promoteurs Immobiliers',
        path: 'promoter'
    },
    PRODUCT_DATAHUB: {
        name: 'Startups et Proptechs',
        path: 'startup'
    },
    DOC: {
        name: 'Documentation',
        path: 'documentation'
    },
    BLOG: {
        name: 'Infos',
        path: 'infos'
    },
    INFOS: {
        name: 'Infos',
        path: 'info'
    },
    FAQS: {
        name: 'FAQs',
        path: ''
    },
    CONTACT: {
        name: 'Contactez-nous',
        path: 'contact'
    },
    TERMS: {
        name: 'CGU / CGV',
        path: 'cgu-cgv'
    },
    VALEURS_FONCIERES: {
        name: 'Valeurs foncières',
        path: 'valeurs'
    },
    DATAHUB: {
        name: 'DataHub',
        path: 'datahub'
    },
    SAAS: {
        name: 'SaaS',
        path: 'saas'
    },
    CONTENTFUL_SPACE_ID: '0wyp1mo52kzi',
    CONTENTFUL_ACCESS_TOKEN: '7wwq7yVGBbeluv8-7HzhObzuzrJSebG4ypFvcShdFxI',
    CONTENTFUL_ASSET_DOMAIN: 'images.ctfassets.net',
};

module.exports = config;