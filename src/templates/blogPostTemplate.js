import React from "react"
import BlogBanner from "../components/Blog/BlogBanner"
import BlogContent from "../components/Blog/BlogContent"
import BlogSummary from "../components/Blog/BlogSummary"
import BlogTopic from "../components/Blog/BlogTopic"
import BlogWriters from "../components/Blog/BlogWriters"
import Layout from "../components/layout"
import CloseIcon from "../assets/Icons/close-circle.svg"
import BlogFooterBanner from "../components/Blog/BlogFooterBanner"
import Seo from "../components/seo"
import { graphql } from "gatsby"

export default function BlogPostTemplate(props) {
  console.log("BlogPostTemplate->props.data", props.data)
  const {
    data: { contentfulPost: data },
    context,
  } = props
  return (
    <Layout>
      <Seo title="blog" />
      <BlogBanner
        title={data.title}
        shortDescription={data.shortDescription.shortDescription}
      />
      <div className="container">
        <BlogSummary author={data.author} updatedAt={data.updatedAt} />
        <BlogTopic topics={data.topics} />
        <BlogContent html={data.content.childContentfulRichText.html} />
        <BlogWriters
          author={data.author}
          editor={data.editor}
          reviewer={data.reviewer}
        />
        <div className="blog">
          <button className="btn">
            View more
            <CloseIcon />
          </button>
        </div>
      </div>
      <BlogFooterBanner />
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostDetailsBySlug($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      shortDescription {
        shortDescription
      }
      content {
        childContentfulRichText {
          html
        }
      }
      topics {
        title
        slug
      }
      createdAt
      updatedAt
      author {
        name
        position
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
      }
      editor {
        name
        position
      }
    }
  }
`
