const withImages = require('next-images');
var config = require('./config');
import pages from './pages';

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
  exportPathMap: async function() {
    return pages.reduce((map, page) => {
      map[page.path] = { page: page.component };
      return map;
    }, {});
  },
});