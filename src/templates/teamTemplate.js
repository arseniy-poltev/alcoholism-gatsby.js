import React, { Fragment, useEffect, useState } from "react"
import { graphql } from "gatsby"
import Container from "react-bootstrap/Container"
import Seo from "../components/seo"
import BlogAuthor from "../components/Blog/BlogAuthor"

export default function teamTemplate(props) {
  const {
    data: {
      allContentfulProfile: { edges },
    },
    context,
  } = props
  console.log("teamTemplate:props", edges)

  return (
    <Fragment>
      <Seo title="team" />

      <Container>
        {edges.map((edge, index) => {
          return <BlogAuthor key={index} author={edge.node} />
        })}
      </Container>
    </Fragment>
  )
}

export const pageQuery = graphql`
  {
    allContentfulProfile(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
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
      }
    }
  }
`
