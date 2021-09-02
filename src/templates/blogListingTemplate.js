import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Seo from "../components/seo"
import BlogListingCard from "../components/Blog/BlogListingCard"

export default function blogListingTemplate(props) {
  const {
    data: { allContentfulPost },
    context,
  } = props

  console.log(`blogListingTemplate`, props)

  return (
    <Fragment>
      <Seo title="Blog Listing" />
      {/* <section className="blog-listing__banner">
        <div className="container">
          <h2>Banner title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>
      </section> */}
      <section>
        <Container className="blog-listing">
          <Row>
            <Col lg={{ offset: 2, span: 8 }} sm={12}>
              {allContentfulPost.edges.map((edge, index) => (
                <BlogListingCard blog={edge.node} key={edge.node.slug} />
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  )
}

export const pageQuery = graphql`
  {
    allContentfulPost(
      filter: {
        node_locale: { eq: "en-US" }
        parentPost: { slug: { eq: "blog" } }
      }
    ) {
      edges {
        node {
          id
          slug
          title
          author {
            name
            avatar {
              fixed {
                src
                width
                height
                srcSet
              }
            }
          }
          updatedAt
        }
      }
    }
  }
`
