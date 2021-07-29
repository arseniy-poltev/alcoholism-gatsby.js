const { BLOCKS, INLINES } = require("@contentful/rich-text-types")

try {
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })
} catch (error) {
  console.log(`Failed to load .env.${process.env.NODE_ENV}`)
}

let contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}

if (process.env.HTTPS_PROXY) {
  const host = process.env.HTTPS_PROXY.split(":")[0]
  const port = process.env.HTTPS_PROXY.split(":")[1]
  contentfulConfig.proxy = {
    host,
    port,
  }
}

console.log("contentfulConfig", contentfulConfig)

if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  )
}

const renderEmbeddedAsset = node => {
  const { title, description, file } = node.data.target.fields
  const mimeType = file["en-US"].contentType
  const mimeGroup = mimeType.split("/")[0]
  console.log(`gatsby-config-->renderEmbeddedAsset`, node)
  switch (mimeGroup) {
    case "image":
      return `<img
          title="${title ? title["en-US"] : null}"
          alt="${description ? description["en-US"] : null}"
          src="${file["en-US"].url}"
        />`
    case "video":
      return `<div className="embed-responsive embed-responsive-16by9">
          <video controls>
            <source src="${file.url}" type="video/mp4" />
            <p>Your browser doesnt support HTML5 video.</p>
          </video>
        </div>`
    case "application":
      return `<a
          alt="${description ? description["en-US"] : null}"
          href="${file["en-US"].url}"
        >
          ${title ? title["en-US"] : file["en-US"].details.fileName}
        </a>`
    default:
      return `<span >${mimeType} embedded asset</span>`
  }
}

const renderEmbeddedEntry = node => {
  const contentTypeId = node.data.target.sys.contentType.sys.id
  const fields = node.data.target.fields
  console.log(`gatsby-config-->renderEmbeddedEntry`, node)

  switch (contentTypeId) {
    case "topic":
      return `<h3 id="${fields.slug["en-US"]}">${fields.title["en-US"]}</h3>`
    default:
      return `<div>Embedded Entry</div>`
  }
}

module.exports = {
  siteMetadata: {
    title: `Alcoholism`,
    description: `Alcoholism.org web app`,
    author: `Robert Popescu`,
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
      options: contentfulConfig,
    },
    {
      resolve: "@contentful/gatsby-transformer-contentful-richtext",
      options: {
        renderOptions: {
          renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: node => {
              return renderEmbeddedAsset(node)
            },
            [BLOCKS.EMBEDDED_ENTRY]: node => {
              return renderEmbeddedEntry(node)
            },
          },
        },
      },
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
    //     // data: `@import "${__dirname}/src/styles/styles";`, // global styles
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
    `gatsby-plugin-gatsby-cloud`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
