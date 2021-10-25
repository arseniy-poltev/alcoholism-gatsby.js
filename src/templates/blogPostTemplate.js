import React, { Fragment, useEffect, useState } from "react"
import { graphql } from "gatsby"
import Container from "react-bootstrap/Container"
import BlogBanner from "../components/Blog/BlogBanner"
import BlogContent from "../components/Blog/BlogContent"
import BlogSummary from "../components/Blog/BlogSummary"
import BlogTopic from "../components/Blog/BlogTopic"
import BlogWriters from "../components/Blog/BlogWriters"
import BlogFooterBanner from "../components/Blog/BlogFooterBanner"
import Seo from "../components/seo"
import ContentfulRichText from "../components/common/ContentfulRichText"
import { BLOCKS } from "@contentful/rich-text-types"

export default function BlogPostTemplate(props) {
  const {
    data: { contentfulPost: data },
    context,
  } = props
  console.log("BlogPostTemplate:props", props)
  const [topics, setTopics] = useState(null)

  useEffect(() => {
    generateContentTable(data)
  }, [data])

  function generateContentTable(data) {
    if (!data.content) return
    const nodesArr = JSON.parse(data.content.raw)
    const arr = nodesArr.content
      .filter(
        obj =>
          obj.nodeType === BLOCKS.HEADING_2 || obj.nodeType === BLOCKS.HEADING_3
      )
      .map(obj => ({
        type: obj.nodeType,
        value: obj.content[0].value,
      }))

    console.log(`BlogPostTemplate->useEffect->topics`, arr)
    setTopics(arr)
  }

  function generateSeoData() {
    console.log(`BlogPostTemplate:generateSeoData`, data)
    let meta = []
    if (data.banner) {
      meta = [
        ...meta,
        {
          property: `og:image`,
          content: `https:${data.thumbnail.fixed.src}`,
        },
        {
          property: `og:image:alt`,
          content: data.title,
        },
        {
          property: `og:image:width`,
          content: data.thumbnail.fixed.width,
        },
        {
          property: `og:image:height`,
          content: data.thumbnail.fixed.height,
        },
      ]
    }

    return {
      title: data.title,
      description: data.shortDescription,
      meta,
    }
  }

  return (
    <Fragment>
      <Seo {...generateSeoData()} />
      {data.banner && (
        <BlogBanner
          title={data?.title}
          bannerSrc={data?.banner?.fixed.src}
          shortDescription={data?.shortDescription?.shortDescription}
        />
      )}

      <Container>
        <div className="blog-container">
          {data.author && (
            <BlogSummary author={data?.author} updatedAt={data?.updatedAt} />
          )}
          {data.slug !== "what-is-alcoholism" && <BlogTopic topics={topics} />}
          <ContentfulRichText content={data.content} />
          {/* <BlogContent content={data?.content} /> */}
          {(data.author || data.editor || data.reviewer) && (
            <BlogWriters
              author={data?.author}
              editor={data?.editor}
              reviewer={data?.reviewer}
            />
          )}
        </div>
      </Container>
      <BlogFooterBanner />
    </Fragment>
  )
}

export const pageQuery = graphql`
  query PostDetailsBySlug($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      shortDescription {
        shortDescription
      }
      banner {
        fixed(width: 2000, quality: 100) {
          src
          width
          height
        }
      }
      thumbnail: banner {
        fixed(width: 1200, quality: 100) {
          src
          width
          height
        }
      }
      content {
        raw
        references {
          __typename
          contentful_id
          title
          description
          file {
            contentType
            url
          }
          fixed(width: 2000) {
            width
            height
            src
            srcSet
          }
        }
      }
      createdAt
      updatedAt
      author {
        name
        position
        bio {
          bio
        }
        email
        twitterUsername
        avatar {
          fixed {
            src
            width
            height
            srcSet
          }
        }
      }
      reviewer {
        name
        position
        avatar {
          fixed {
            src
            width
            height
            srcSet
          }
        }
      }
      editor {
        name
        position
        avatar {
          fixed {
            src
            width
            height
            srcSet
          }
        }
      }
    }
  }
`
