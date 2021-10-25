import React from "react"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import { Link } from "gatsby"

export default function BlogFooterBanner() {
  return (
    <section className="footer-banner footer-banner--blog">
      <Container>
        <div>
          <div>
            <h2>Ready to make a change?</h2>
            <p>Get cost-effective, quality addiction care that truly works.</p>
          </div>
          <div className="footer-banner__button-wrapper">
            <Link to="/start" className="btn-transform btn btn-outline-warning">
              start your recovery
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
