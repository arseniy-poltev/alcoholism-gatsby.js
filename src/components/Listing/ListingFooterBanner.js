import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import PhoneIcon from "../../assets/Icons/phone.svg"
import RequestCallForm from "../common/RequestCallForm"

export default function ListingFooterBanner() {
  return (
    <section className="footer-banner footer-banner--listing">
      <Container>
        <Row>
          <Col lg={5} sm={12}>
            <h2>
              You’re only a call away from
              <br /> changing your life!
            </h2>
            <RequestCallForm className="call-form--listing-footer" />
          </Col>
          <Col lg={7} sm={12} />
        </Row>
      </Container>
    </section>
  )
}
