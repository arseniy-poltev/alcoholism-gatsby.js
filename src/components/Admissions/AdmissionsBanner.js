import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import RequestCallForm from "../common/RequestCallForm"

export default function AdmissionsBanner() {
  return (
    <section className="top-banner top-banner--admissions">
      <Container>
        <Row>
          <Col lg={6} sm={12} className="d-flex flex-column">
            <div className="text-block">
              <h1>
                Recovery Starts with
                <br /> one Phone Call
              </h1>
              <h4>
                Call our Hotline Number <span>888-767-3708</span>
              </h4>
            </div>
            <RequestCallForm
              className="call-form--admissions"
              text="or we can reach out to you"
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
