import { Link } from "gatsby"
import React from "react"
import HyperlinkIcon from ".././../../assets/Icons/hyperlink.svg"

export default function CenterMoreResource() {
  return (
    <div className="center-card center-card--more">
      <div className="center-card__header">
        <h5>More Resource</h5>
      </div>
      <div className="center-card__body">
        <Link to="/">
          <HyperlinkIcon />
          <span>Visit Website</span>
        </Link>
      </div>
    </div>
  )
}
