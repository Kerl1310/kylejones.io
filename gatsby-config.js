require("dotenv").config({
  path: `.env`,
})

const config = require("./data/siteConfig");

const devApiKey = process.env.DEV_TOKEN;
const googleAnalyticsId = process.env.GA_ID;
const goodreadsApiKey = process.env.GOODREADS_KEY;
const spotifyId = process.env.SPOTIFY_CLIENT_ID;
const spotifySecret = process.env.SPOTIFY_CLIENT_SECRET;
const spotifyRefreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

const articleType = {
  type_of: 'String',
  id: 1,
  title: 'String',
  description: 'String',
  cover_image: 'String',
  published: true,
  published_at: 'DateTime',
  slug: 'String',
  path: 'String',
  url: 'String',
  canonical_url: 'String',
  comments_count: 1,
  positive_reactions_count: 1,
  page_views_count: 1,
  published_timestamp: 'String',
  body_markdown: 'String',
  user: {
    name: 'String',
    username: 'String',
    twitter_username: 'String',
    github_username: 'String',
    website_url: 'String',
    profile_image: 'String',
    profile_image_90: 'String',
  },
  tag_list: ['tech', 'software'],
  organization: {
    name: 'String',
    username: 'String',
    slug: 'String',
    profile_image: 'String',
    profile_image_90: 'String',
  },
  flare_tag: {
    name: 'String',
    bg_color_hex: 'String',
    text_color_hex: 'String',
  },
}

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
        fetchPlaylists: false,
        fetchRecent: false,
        timeRanges: ['short_term'],
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
    {
      resolve: 'gatsby-source-apiserver',
      options: {
        // Type prefix of entities from server
        typePrefix: 'internal__',

        // The url, this should be the endpoint you are attempting to pull data from
        url: `https://dev.to/api/articles/me/published`,

        method: 'get',

        headers: {
          'Content-Type': 'application/json',
          'api-key': devApiKey,
        },

        // Request body
        data: {},

        // Name of the data to be downloaded.  Will show in graphQL or be saved to a file
        // using this name. i.e. posts.json
        name: `articles`,

        // Nested level of entities in response object, example: `data.posts`
        //entityLevel: ``,

        // Define schemaType to normalize blank values
        // example:
        schemaType: articleType,

        // Request parameters
        // Only available from version 2.1.0
        params: {
          per_page: 10,
          page: 1,
        },

        // Optional payload key name if your api returns your payload in a different key
        // Default will use the full response from the http request of the url
        // payloadKey: `body`,

        // Optionally save the JSON data to a file locally
        // Default is false
        localSave: false,

        //  Required folder path where the data should be saved if using localSave option
        //  This folder must already exist
        path: `${__dirname}/data/`,

        // Optionally include some output when building
        // Default is false
        verboseOutput: true, // For debugging purposes

        // Optionally skip creating nodes in graphQL.  Use this if you only want
        // The data to be saved locally
        // Default is false
        skipCreateNode: false, // skip import to graphQL, only use if localSave is all you want

        // Optionally re-source data when it changes and
        // `gatsby develop` is running.
        // Requires `ENABLE_GATSBY_REFRESH_ENDPOINT=true`.
        // See https://www.gatsbyjs.org/docs/environment-variables/#reserved-environment-variables
        // Default is false
        enableDevRefresh: true,

        // Optionally override key used to re-source data
        // when `gatsby develop` is running.
        // Requires `enableDevRefresh: true`.
        // See setting directly above this one.
        // See also https://github.com/gatsbyjs/gatsby/issues/14653
        // Default is `id`
        refreshId: `id`,

        // Pass an array containing any number of the entity configuration properties (except verbose, auth0Config),
        // any not specified are defaulted to the general properties that are specified
        // Only available from version 2.1.0
        entitiesArray: [
          {
            typePrefix: 'internal__',
            url: `https://dev.to/api/articles/me/published`,
            method: 'get',
            headers: {
              'Content-Type': 'application/json',
              'api-key': devApiKey,
            },
            name: `articles`,
            schemaType: articleType,
          },
        ],
      },
    },
  ],
}
