import React from "react"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import PhoneIcon from "../../assets/Icons/phone.svg"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

export default function HomeFooterBanner() {
  function handleClick() {
    // 1-888-767-3708
    console.log(`CALL US NOW`)
    e.preventDefault()
    trackCustomEvent({
      category: "CTA buttons",
      action: "Click",
      label: "Footer banner CTA",
    })
    window.open("tel:+18887673708")
  }

  return (
    <section className="footer-banner footer-banner--home">
      <Container>
        <div>
          <h2>You’re only a call away from changing your life!</h2>
          <div className="footer-banner__button-wrapper">
            <Button
              variant="outline-warning"
              className="btn-transform"
              onClick={handleClick}
            >
              <PhoneIcon />
              GIVE US A CALL TODAY
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
