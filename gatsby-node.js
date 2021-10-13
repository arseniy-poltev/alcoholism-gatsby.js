const path = require("path")
const contentful = require("contentful")
const { upperCaseFirstLetter } = require("./src/lib/utils")

try {
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })
} catch (error) {
  console.log(`Failed to load .env.${process.env.NODE_ENV}`)
}

// let contentfulClientConfig = {
//   space: process.env.GATSBY_CONTENTFUL_SPACE_ID,
//   accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
// }

// if (process.env.HTTPS_PROXY) {
//   const url = new URL(process.env.HTTPS_PROXY)
//   process.env.HTTPS_PROXY.match
//   contentfulClientConfig.proxy = {
//     protocol: url.protocol,
//     host: url.hostname,
//     port: url.port,
//   }
// }

// if (process.env.CONTENTFUL_HOST) {
//   contentfulClientConfig.host = process.env.CONTENTFUL_HOST
// }

// const { space, accessToken } = contentfulClientConfig

// if (!space || !accessToken) {
//   throw new Error("Contentful space and the access token need to be provided.")
// }

// const contentfulClient = contentful.createClient(contentfulClientConfig)

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type ContentfulProfile implements Node {
      joinedAt: Date
      twitterUsername: String
    }
    type ContentfulPost implements Node {
      category: String
      editor: ContentfulProfile
      reviewer: ContentfulProfile
    }
  `
  createTypes(typeDefs)
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const homeTemplate = path.resolve(`./src/templates/homeTemplate.js`)
  const blogPostTemplate = path.resolve(`./src/templates/blogPostTemplate.js`)
  const blogListingTemplate = path.resolve(
    `./src/templates/blogListingTemplate.js`
  )
  const listingTemplate = path.resolve(`./src/templates/listingTemplate.js`)
  const aboutTemplate = path.resolve(`./src/templates/aboutTemplate.js`)
  const contactTemplate = path.resolve(`./src/templates/contactTemplate.js`)
  const termTemplate = path.resolve(`./src/templates/termTemplate.js`)

  const result = await graphql(
    `
      {
        allContentfulPost(filter: { node_locale: { eq: "en-US" } }) {
          edges {
            node {
              id
              slug
              category
              path
              title
              hasLink
            }
          }
        }
        allContentfulWidget(filter: { node_locale: { eq: "en-US" } }) {
          edges {
            node {
              name
              childWidgets {
                ... on ContentfulBadge {
                  name
                  image {
                    fixed {
                      width
                      height
                      src
                    }
                  }
                }
              }
              text {
                raw
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    console.log("createPages->errors", result.errors)
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const widgets = result.data.allContentfulWidget.edges

  const headerLinks = result.data.allContentfulPost.edges
    .filter(edge => edge.node.hasLink)
    .map(edge => {
      let path = edge.node.path ? edge.node.path : `/${edge.node.slug}`
      return {
        key: edge.node.slug,
        label: upperCaseFirstLetter(edge.node.slug),
      }
    })

  console.log(`headerLinks`, headerLinks)
  const navmenus = [
    { key: "listing", label: "Locations" },
    ...headerLinks,
    { key: "blog", label: "Blog" },
    { key: "about", label: "About" },
    { key: "contact", label: "Contact" },
  ]

  console.log("gatsby-nodejs: createPages: navmenus", navmenus)
  result.data.allContentfulPost.edges.forEach(edge => {
    let path = edge.node.path
      ? edge.node.path.substring(1)
      : `${edge.node.slug}`

    console.log(`allContentfulPost`, path)

    if (path !== "blog") {
      createPage({
        path,
        component: blogPostTemplate,
        context: {
          slug: edge.node.slug,
          navmenus,
          widgets,
        },
      })
    }
  })

  createPage({
    path: `/`,
    component: homeTemplate,
    context: {
      navmenus,
      widgets,
    },
  })
  createPage({
    path: `/blog`,
    component: blogListingTemplate,
    context: {
      navmenus,
      widgets,
    },
  })
  createPage({
    path: `/about`,
    component: aboutTemplate,
    context: {
      navmenus,
      widgets,
    },
  })
  createPage({
    path: `/contact`,
    component: contactTemplate,
    context: {
      navmenus,
      widgets,
    },
  })
  createPage({
    path: `/listing`,
    component: listingTemplate,
    context: {
      navmenus,
      widgets,
    },
  })
  createPage({
    path: `/terms-of-service`,
    component: termTemplate,
    context: {
      navmenus,
      widgets,
    },
  })
}

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   return new Promise(async (resolve, reject) => {
//     const { items: postsRaw } = await contentfulClient.getEntries({
//       content_type: "page",
//     })
//     const posts = postsRaw.map(x => x.fields)
//     posts.map((post, index) => {
//       createPage({
//         path: `/${post.slug}`,
//         component: path.resolve("./src/templates/blogPostTemplate.js"),
//         context: { postData: post },
//       })
//     })
//     resolve()
//   })
// }

// exports.onCreatePage = ({ page, actions }) => {
//   const { createPage, deletePage } = actions
//   deletePage(page)
//   createPage({
//     ...page,
//     context: {
//       ...page.context,
//       house: `Gryffindor`,
//     },
//   })
// }
