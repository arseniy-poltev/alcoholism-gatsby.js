import React from "react"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

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
            <Button variant="outline-warning" className="btn-transform">
              start your recovery
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
