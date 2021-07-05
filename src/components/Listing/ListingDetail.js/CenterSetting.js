import React from "react"
import LockIcon from "../../../assets/Icons/lock.svg"

export default function CenterSetting() {
  return (
    <div className="center-card center-card--setting">
      <div className="center-card__header">
        <h5>Settings</h5>
      </div>
      <div className="center-card__body">
        <p>
          <LockIcon />
          Private/Secluded
        </p>
      </div>
    </div>
  )
}
