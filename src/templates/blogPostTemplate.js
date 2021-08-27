import React, { Fragment, useEffect, useState } from "react"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import CloseIcon from "../assets/Icons/close-circle.svg"
import BlogBanner from "../components/Blog/BlogBanner"
import BlogContent from "../components/Blog/BlogContent"
import BlogSummary from "../components/Blog/BlogSummary"
import BlogTopic from "../components/Blog/BlogTopic"
import BlogWriters from "../components/Blog/BlogWriters"
import BlogFooterBanner from "../components/Blog/BlogFooterBanner"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import ContentfulRichText from "../components/common/ContentfulRichText"
import { BLOCKS } from "@contentful/rich-text-types"

export default function BlogPostTemplate(props) {
  const {
    data: { contentfulPost: data },
    context,
  } = props

  console.log("BlogPostTemplate->props", props)
  const [topics, setTopics] = useState(null)

  useEffect(() => {
    const arr = JSON.parse(data.content.raw)
      .content.filter(obj => obj.nodeType === BLOCKS.HEADING_3)
      .map(obj => obj.content[0].value)

    console.log(`BlogPostTemplate->useEffect->topics`, arr)
    setTopics(arr)
  }, [data])

  return (
    <Fragment>
      <Seo title="blog" />
      <BlogBanner
        title={data?.title || ""}
        bannerSrc={data?.banner.fixed.src || null}
        shortDescription={data?.shortDescription.shortDescription || ""}
      />
      <Container>
        <div className="blog-container">
          <BlogSummary author={data?.author} updatedAt={data?.updatedAt} />
          <BlogTopic topics={topics} />
          <ContentfulRichText content={data.content} />
          {/* <BlogContent content={data?.content} /> */}
          <BlogWriters
            author={data?.author}
            editor={data?.editor}
            reviewer={data?.reviewer}
          />
          <Button variant="warning" className="blog__more">
            View more
            <CloseIcon />
          </Button>
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
