import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

export default function BlogBanner(props) {
  const { title, shortDescription, bannerSrc } = props

  console.log("BlogBanner->bannerSrc", bannerSrc)

  return (
    <section
      className="top-banner top-banner--blog"
      style={{
        backgroundImage: `url(${bannerSrc})`,
      }}
    >
      <Container>
        <Row>
          <Col lg={6} sm={12} className="d-flex flex-column">
            <div className="text-block">
              <h1>{title}</h1>
              <p>{shortDescription}</p>
              <Button variant="warning" className="btn-transform">
                GET HELP WITH YOUR ADDICTION
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
