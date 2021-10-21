const { BLOCKS, INLINES } = require("@contentful/rich-text-types")

try {
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })
} catch (error) {
  console.log(`Failed to load .env.${process.env.NODE_ENV}`)
}

/**
 * gatsby-source-contentful config
 */
let gatsbyContentfulConfig = {
  spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
  accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
}

if (process.env.HTTPS_PROXY) {
  const url = new URL(process.env.HTTPS_PROXY)
  gatsbyContentfulConfig.proxy = {
    protocol: url.protocol,
    host: url.hostname,
    port: url.port,
  }
}

if (process.env.CONTENTFUL_HOST) {
  gatsbyContentfulConfig.host = process.env.CONTENTFUL_HOST
}

/**
 * gatsby-transformer-contentful-richtext
 */
let gatsbyContentfulRichtextOptions = {
  renderOptions: {
    renderNode: {
      // [BLOCKS.EMBEDDED_ASSET]: node => {
      //   return renderEmbeddedAsset(node)
      // },
      // [BLOCKS.HEADING_3]: node => {
      //   return renderHeading(node)
      // },
      // [BLOCKS.EMBEDDED_ENTRY]: node => {
      //   return renderEmbeddedEntry(node)
      // },
    },
  },
}

/**
 * Google Tag Manager Plugin options
 */

let gatsbyGTMOptions = {
  id: process.env.GATSBY_GOOGLE_TAGMANAGER_ID,
  includeInDevelopment: true,
  // Defaults to null
  defaultDataLayer: { platform: "gatsby" },

  // Specify optional GTM environment details.
  // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
  // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
  // dataLayerName: "YOUR_DATA_LAYER_NAME",

  // Name of the event that is triggered
  // on every Gatsby route change.
  // Defaults to gatsby-route-change
  // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
  // Defaults to false
  enableWebVitalsTracking: true,
}

if (process.env.GATSBY_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING) {
  gatsbyGTMOptions = {
    ...gatsbyGTMOptions,
    gtmAuth: process.env.GATSBY_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING,
  }
}
if (process.env.GATSBY_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME) {
  gatsbyGTMOptions = {
    ...gatsbyGTMOptions,
    gtmPreview: process.env.GATSBY_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME,
  }
}
if (process.env.GATSBY_DATA_LAYER_NAME) {
  gatsbyGTMOptions = {
    ...gatsbyGTMOptions,
    dataLayerName: process.env.GATSBY_DATA_LAYER_NAME,
  }
}
if (process.env.GATSBY_ROUTE_CHANGE_EVENT_NAME) {
  gatsbyGTMOptions = {
    ...gatsbyGTMOptions,
    routeChangeEventName: process.env.GATSBY_ROUTE_CHANGE_EVENT_NAME,
  }
}

console.log("gatsbyContentfulConfig", gatsbyContentfulConfig)
console.log("gatsbyContentfulRichtextOptions", gatsbyContentfulRichtextOptions)
console.log("gatsbyGTMOptions", gatsbyGTMOptions)

const { spaceId, accessToken } = gatsbyContentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  )
}

module.exports = {
  siteMetadata: {
    title: `Alcoholism.org`,
    description: `Alcoholism treatment program`,
    author: `Alcoholism Team`,
    siteUrl: `https://alcoholism.org`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/Images`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: gatsbyContentfulConfig,
    },
    {
      resolve: "@contentful/gatsby-transformer-contentful-richtext",
      options: gatsbyContentfulRichtextOptions,
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `alcoholism.org`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-sass",
    // {
    //   resolve: "gatsby-plugin-sass",
    //   options: {
    //     sassOptions: {
    //       includePaths: ["src/images"],
    //     },
    //     data: `@import "${__dirname}/src/styles/styles";`, // global styles
    //   },
    // },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /Icons/,
        },
      },
    },
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        // output: "/",
        entryLimit: 1000,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://alcoholism.gatsbyjs.io",
        sitemap: "https://alcoholism.gatsbyjs.io/sitemap/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: gatsbyGTMOptions,
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
