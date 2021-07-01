import { Link } from "gatsby"
import React from "react"
import { FaArrowRight } from "react-icons/fa"
import CenterMap from "../Home/CenterMap"

export default function CenterCard(props) {
  const { center } = props
  return (
    <div className="center-card">
      <div className="center-card__map">
        <img src={center.image} alt="center" />
      </div>
      <div className="center-card__summary">
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
