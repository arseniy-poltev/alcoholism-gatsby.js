const path = require("path")
const contentful = require("contentful")
const { createFilePath } = require("gatsby-source-filesystem")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

let contentfulClientConfig = {
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}

if (process.env.HTTPS_PROXY) {
  const host = process.env.HTTPS_PROXY.split(":")[0]
  const port = process.env.HTTPS_PROXY.split(":")[1]
  contentfulClientConfig.proxy = {
    host,
    port,
  }
}

if (process.env.CONTENTFUL_HOST) {
  contentfulClientConfig.host = process.env.CONTENTFUL_HOST
}

const { space, accessToken } = contentfulClientConfig

if (!space || !accessToken) {
  throw new Error("Contentful space and the access token need to be provided.")
}

const contentfulClient = contentful.createClient(contentfulClientConfig)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`./src/templates/blogPostTemplate.js`)
    resolve(
      graphql(`
        {
          allContentfulPost {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulPost.edges.forEach(edge => {
          createPage({
            path: edge.node.slug,
            component: blogPostTemplate,
            context: {
              slug: edge.node.slug,
            },
          })
        })
        return
      })
    )
  })

  // return new Promise(async (resolve, reject) => {
  //   /**
  //    * await
  //    */
  //   const result = await graphql(
  //     `
  //       {

  //       }
  //     `
  //   )
  //   const posts = result.data.allContentfulPost.edges
  //   posts.map((post, index) => {
  //     createPage({
  //       path: `/${post.node.slug}`,
  //       component: path.resolve("./src/templates/blogPost.js"),
  //       context: { postData: post.node },
  //     })
  //   })
  //   /**
  //    * contentfulClient
  //    */
  //   const { items: postsRaw } = await contentfulClient.getEntries({
  //     content_type: "page",
  //   })
  //   const posts = postsRaw.map(x => x.fields)
  //   posts.map((post, index) => {
  //     console.log("gatsby-node-->post", post)
  //     createPage({
  //       path: `/${post.slug}`,
  //       component: path.resolve("./src/templates/blogPost.js"),
  //       context: { postData: post },
  //     })
  //   })

  //   resolve()
  // })
}
