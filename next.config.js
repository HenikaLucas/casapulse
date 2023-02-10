const withImages = require('next-images');
var config = require('./config')

module.exports = withImages({
  images: {
    domains: [config.CONTENTFUL_ASSET_DOMAIN],
    loader: 'akamai',
  },
  distDir: 'build',
  async redirects() {
    return [
      {
        source: '/about.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/info.html',
        destination: '/' + config.INFOS.path,
        permanent: true,
      },
      {
        source: '/info/:slug.html',
        destination: '/' + config.INFOS.path + '/:slug',
        permanent: true,
      },
      {
        source: '/pro',
        destination: '/',
        permanent: true,
      },
    ]
  },
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/agent' : { page : '/agent'},
      '/datahub' : { page : '/datahub'},
      '/contact' : { page : '/contact'},
      '/hunter' : { page : '/hunter'},
      '/infos' : { page : '/infos'},
      '/promoter' : { page : '/promoter'},
      '/startup' : { page : '/startup'}
    }
  },
});