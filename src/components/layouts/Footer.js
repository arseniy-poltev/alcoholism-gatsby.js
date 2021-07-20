import { Link } from "gatsby"
import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Badges from "../common/Badges"
import SocialLinks from "../common/SocialLinks"

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col lg={4} sm={12}>
            <SocialLinks />
            <h5 className="copyright">
              © Copyright 2020 Bright Stance® <br />
              All Rights Reserved
            </h5>
            <Badges />
          </Col>
          <Col lg={2} sm={6}>
            <h5>About us</h5>
            <Link to="/staff">Staff</Link>
            <Link to="/philosphy">Philosphy</Link>
            <Link to="/testimonials">Testimonials</Link>
          </Col>
          <Col lg={2} sm={6}>
            <h5>Services</h5>
            <Link to="/">Alumni</Link>
            <Link to="/">Addiction Problems</Link>
            <Link to="/">
              You People and <br />
              Experimentation
            </Link>
          </Col>
          <Col lg={2} sm={6}>
            <h5>Resources</h5>
            <Link to="/">Resources</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Privacy Policy</Link>
          </Col>
          <Col lg={2} sm={6}>
            <h5>Quick Links</h5>
            <Link to="/">Insurance</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Drugs & Your Body</Link>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
