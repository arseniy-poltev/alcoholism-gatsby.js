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
          <Button variant="outline-warning">START YOUR RECOVERY</Button>
        </div>
      </Container>
    </section>
  )
}
