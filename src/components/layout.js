import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "../styles/style.scss"
import Footer from "./layouts/Footer"
import TopNavbar from "./layouts/TopNavbar"
import Notification from "./common/Notification"
import ScrollToTop from "./common/ScrollToTop"
import useIsScrolled from "../lib/useIsScrolled"

export default function Layout(props) {
  const [footerWidget, setFooterWidget] = useState(null)
  const [headerWidget, setHeaderWidget] = useState(null)

  let isScrolled = useIsScrolled()
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
  console.log("Layout->props.pageContext", props.pageContext)
  console.log("Layout->data", data)

  useEffect(() => {
    if (props.pageContext.widgets) {
      let widgets = props.pageContext.widgets
      setHeaderWidget(widgets.find(obj => obj.node.name === "Header"))
      setFooterWidget(widgets.find(obj => obj.node.name === "Footer"))
    }
  }, [props.pageContext])

  return (
    <div className="min-h-screen">
      <Notification />
      <TopNavbar navmenus={navmenus} widget={headerWidget} />
      <div className="main">{children}</div>
      <Footer widget={footerWidget} />
      {isScrolled && <ScrollToTop />}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
