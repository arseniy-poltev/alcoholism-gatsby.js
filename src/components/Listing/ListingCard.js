import { Link } from "gatsby"
import React from "react"
import Button from "react-bootstrap/Button"

export default function ListingCard() {
  return (
    <div className="listing-card">
      <div>
        <h5>Birmingham, West Midlands, B29</h5>
        <h3>Lorem ipsum dolor sit amet</h3>
        <div className="listing-card__summary">
          <div>
            Test Adress:
            <span>123 123</span>
          </div>
          <div>
            Duration:
            <span>28 Days</span>
          </div>
          <div>
            Est. Cost:
            <span> $28,000</span>
          </div>
        </div>
      </div>
      <div>
        <Link to="/start" variant="warning">
          VIEW
        </Link>
      </div>
    </div>
  )
}
