import React from "react"
import CheckIcon from "../../../assets/Icons/check-circle.svg"

export default function CenterFeature() {
  return (
    <div className="center-card center-card--feature">
      <div className="center-card__header">
        <h5>Center Details</h5>
      </div>
      <div className="center-card__body">
        <p>
          <CheckIcon />
          Vocational Rehabilitation
        </p>
        <p>
          <CheckIcon />
          One-on-One Time With Staff
        </p>
        <p>
          <CheckIcon />
          Small Group Settings
        </p>
      </div>
    </div>
  )
}
