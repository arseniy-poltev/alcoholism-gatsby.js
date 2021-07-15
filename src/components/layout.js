import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./layouts/Header"
import "../styles/style.scss"
import Footer from "./layouts/Footer"
// import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
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

export default Layout
