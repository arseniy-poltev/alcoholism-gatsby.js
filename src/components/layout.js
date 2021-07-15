import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./layouts/Header"
import "../styles/style.scss"
import Footer from "./layouts/Footer"
// import { Helmet } from "react-helmet"

export default function Layout(props) {
  const { data, children } = props
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  console.log("Layout->data", props)

  return (
    <>
      <Header navmenus={children.props.pageContext.navmenus || []} />
      {/* <Helmet>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk" />
      </Helmet> */}
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export const pageQuery = graphql`
  query AllContentfulPostQuery {
    allContentfulPost(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          id
          slug
        }
      }
    }
  }
`
