import React from "react"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
// import { FaBlenderPhone, FaPhone } from "react-icons/fa"
// import { IoIosCall, IoMdCall } from "react-icons/io"
// import { IoCall } from "react-icons/io5"
import PhoneIcon from "../../assets/Icons/phone.svg"

export default function HomeFooterBanner() {
  return (
    <section className="footer-banner footer-banner--home">
      <Container>
        <div>
          <h2>You’re only a call away from changing your life!</h2>
          <Button variant="outline-warning">
            <PhoneIcon />
            GIVE US A CALL TODAY
          </Button>
        </div>
      </Container>
    </section>
  )
}
