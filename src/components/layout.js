import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "../styles/style.scss"
import Footer from "./layouts/Footer"
import TopNavbar from "./layouts/TopNavbar"
import Notification from "./common/Notification"

export default function Layout(props) {
  const { children } = props
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const navmenus = children?.props.pageContext?.navmenus || []
  console.log("Layout->data", props, data)

  return (
    <>
      <Notification />
      <TopNavbar navmenus={navmenus} />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
