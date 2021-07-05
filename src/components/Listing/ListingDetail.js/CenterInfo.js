import React from "react"
import CenterMap from "../../common/CenterMap"
import PhoneIcon from ".././../../assets/Icons/phone.svg"

export default function CenterInfo() {
  return (
    <div className="center-card center-card--info">
      <div className="center-card__header">
        <h5>Contact Information</h5>
      </div>
      <div className="center-card__body">
        <p>2528 W. Palmetto St. Florence, SC 29501</p>
        <div className="center-card__map">
          <CenterMap />
        </div>
        <button className="btn btn-primary">
          <PhoneIcon />
          888-999-0000
        </button>
      </div>
    </div>
  )
}
