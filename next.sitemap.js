var config = require('./config')

module.exports = {
   siteUrl: config.BASE_URL,
   generateRobotsTxt: true,
   changefreq: 'weekly',
   exclude: [
      '/cgu-cgv'
   ],
   robotsTxtOptions: {
      policies: [
         {
            userAgent: '*',
            allow: '/',
         },
         {
            userAgent: '*',
            disallow: [
               '/cgu-cgv',
            ],
         },
      ],
   }
}