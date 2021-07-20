import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import VerifiedIcon from "../../../assets/Icons/verified-badge.svg"

export default function PayTreatment() {
  return (
    <div className="pay-treatment">
      <VerifiedIcon />
      <h3>Paying for Treatment</h3>
      <div className="pay-treatment__info">
        <div>
          Duration: <span>28 Days</span>
        </div>
        <div>
          Est. Cost: <span> $28,000</span>
        </div>
      </div>
      <Row className="pay-treatment__features">
        <Col lg={6} sm={12}>
          <p className="off">Insurance is not Accepted</p>
        </Col>
        <Col lg={6} sm={12}>
          <p className="on">Financing is Available</p>
        </Col>
        <Col lg={6} sm={12}>
          <p className="off">Medicare is not Accepted</p>
        </Col>
        <Col lg={6} sm={12}>
          <p className="on">Medicald is not Accepted</p>
        </Col>
      </Row>
    </div>
  )
}
