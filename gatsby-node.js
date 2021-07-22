const path = require("path")
const contentful = require("contentful")

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

const upperCaseFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
const formatText = string => {
  return string.split("-").join(" ")
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const homeTemplate = path.resolve(`./src/templates/homeTemplate.js`)
  const blogPostTemplate = path.resolve(`./src/templates/blogPostTemplate.js`)
  const listingTemplate = path.resolve(`./src/templates/listingTemplate.js`)
  const aboutTemplate = path.resolve(`./src/templates/aboutTemplate.js`)
  const contactTemplate = path.resolve(`./src/templates/contactTemplate.js`)

  const result = await graphql(
    `
      {
        allContentfulPost(filter: { node_locale: { eq: "en-US" } }) {
          edges {
            node {
              id
              slug
              title
              parentPost {
                slug
              }
              hasLink
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

  const blogPostLinks = result.data.allContentfulPost.edges
    .filter(edge => edge.node.hasLink === true)
    .map(edge => {
      let to = "/"
      let label = upperCaseFirstLetter(formatText(edge.node.slug))

      if (edge.node.parentPost) {
        to = `/${edge.node.parentPost.slug}/${edge.node.slug}`
      } else {
        to = `/${edge.node.slug}`
      }
      return {
        to,
        label,
      }
    })

  const navmenus = [
    { to: "/listing", label: "Locations" },
    ...blogPostLinks,
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ]

  console.log("createPages->navmenus", navmenus)
  result.data.allContentfulPost.edges.forEach(edge => {
    let path = "/"
    if (edge.node.parentPost) {
      path = `/${edge.node.parentPost.slug}/${edge.node.slug}`
    } else {
      path = `/${edge.node.slug}`
    }
    createPage({
      path,
      component: blogPostTemplate,
      context: {
        slug: edge.node.slug,
        navmenus,
      },
    })
  })

  createPage({
    path: `/`,
    component: homeTemplate,
    context: {
      navmenus,
    },
  })
  createPage({
    path: `/about`,
    component: aboutTemplate,
    context: {
      navmenus,
    },
  })
  createPage({
    path: `/contact`,
    component: contactTemplate,
    context: {
      navmenus,
    },
  })
  createPage({
    path: `/listing`,
    component: listingTemplate,
    context: {
      navmenus,
    },
  })

  // return new Promise(async (resolve, reject) => {
  //   /**
  //    * await
  //    */
  //   const result = await graphql(
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

// exports.onCreatePage = ({ page, actions }) => {
//   const { createPage, deletePage } = actions
//   deletePage(page)
//   // You can access the variable "house" in your page queries now
//   createPage({
//     ...page,
//     context: {
//       ...page.context,
//       house: `Gryffindor`,
//     },
//   })
// }
