import React from "react"
import DetoxIcon from "../../../assets/Icons/detox.svg"
import BehaviorIcon from "../../../assets/Icons/behavior.svg"
import DualIcon from "../../../assets/Icons/dual.svg"
import OutpatientIcon from "../../../assets/Icons/outpatient.svg"
import SoberIcon from "../../../assets/Icons/sober.svg"
import SchoolIcon from "../../../assets/Icons/school.svg"

export default function CenterDetail() {
  return (
    <div className="center-card center-card--detail">
      <div className="center-card__header">
        <h5>This Center is Known For...</h5>
      </div>
      <div className="center-card__body">
        <p>
          <DetoxIcon />
          Detox Services
        </p>
        <p>
          <BehaviorIcon />
          Behavioral Disorder Treatment
        </p>
        <p>
          <DualIcon />
          Dual-Diagnosis Treatment
        </p>
        <p>
          <OutpatientIcon /> Services
        </p>
        <p>
          <SoberIcon />
          Sober Living Home
        </p>
        <p>
          <SchoolIcon />
          Day School
        </p>
      </div>
    </div>
  )
}
