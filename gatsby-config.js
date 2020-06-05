require("dotenv").config({
  path: `.env`,
})

const config = require("./data/siteConfig");

const googleAnalyticsId = process.env.GA_ID;
const goodreadsApiKey = process.env.GOODREADS_KEY;
const spotifyId = process.env.SPOTIFY_CLIENT_ID;
const spotifySecret = process.env.SPOTIFY_CLIENT_SECRET;
const spotifyRefreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    author: config.authorName,
    ...config,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ]
      }
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitle,
        start_url: config.pathPrefix,
        background_color: config.background_color,
        theme_color: config.theme_color,
        display: config.display,
        icon: config.icon,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: googleAnalyticsId,
      },
    },
    {
      resolve: `gatsby-source-spotify`,
      options: {
        clientId: spotifyId,
        clientSecret: spotifySecret,
        refreshToken: spotifyRefreshToken,

        fetchPlaylists: false, // optional. Set to false to disable fetching of your playlists
        fetchRecent: false, // optional. Set to false to disable fetching of your recently played tracks
        timeRanges: ['short_term'], // optional. Set time ranges to be fetched
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: '@halkeye/gatsby-source-goodreads',
      options: {
        developerKey: goodreadsApiKey,
        goodReadsUserId: '19330885-kyle-jones',
        userShelf: 'currently-reading',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
}
