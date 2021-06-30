import { Link } from "gatsby"
import React from "react"
import { FaArrowRight } from "react-icons/fa"
import CenterMap from "../Home/CenterMap"

export default function CenterCard(props) {
  const { center } = props
  return (
    <div className="center-card">
      {/* <CenterMap className="center-map" /> */}
      <div className="center-map" />
      <div className="center-summary">
        <h4>{center.name}</h4>
        <p>{center.description}</p>
        <Link to="/">
          Learn more
          <FaArrowRight />
        </Link>
      </div>
    </div>
  )
}
