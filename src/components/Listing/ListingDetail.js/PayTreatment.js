import React from "react"
import VerifiedIcon from "../../../assets/Icons/verified-badge.svg"

export default function PayTreatment() {
  return (
    <div className="pay-treatment">
      <VerifiedIcon />
      <h3>Paying for Treatment</h3>
      <div className="pay-treatment__info">
        <p>
          Duration: <span>28 Days</span>
        </p>
        <p>
          Est. Cost: <span> $28,000</span>
        </p>
      </div>
      <div className="row pay-treatment__features">
        <div className="col-lg-6 col-sm-12">
          <p className="off">Insurance is not Accepted</p>
        </div>
        <div className="col-lg-6 col-sm-12">
          <p className="on">Financing is Available</p>
        </div>
        <div className="col-lg-6 col-sm-12">
          <p className="off">Medicare is not Accepted</p>
        </div>
        <div className="col-lg-6 col-sm-12">
          <p className="on">Medicald is not Accepted</p>
        </div>
      </div>
    </div>
  )
}
