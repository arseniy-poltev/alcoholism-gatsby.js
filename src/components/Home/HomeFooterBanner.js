import React from "react"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import PhoneIcon from "../../assets/Icons/phone.svg"

export default function HomeFooterBanner() {
  return (
    <section className="footer-banner footer-banner--home">
      <Container>
        <div>
          <h2>You’re only a call away from changing your life!</h2>
          <div className="footer-banner__button-wrapper">
            <Button variant="outline-warning" className="btn-transform">
              <PhoneIcon />
              GIVE US A CALL TODAY
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
