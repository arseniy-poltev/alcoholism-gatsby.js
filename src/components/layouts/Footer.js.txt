import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Badges from "../common/Badges"
import SocialLinks from "../common/SocialLinks"
import { BLOCKS } from "@contentful/rich-text-types"

export default function Footer(props) {
  const [linkColumns, setLinkColumns] = useState(null)
  const { widget } = props

  useEffect(() => {
    if (widget) {
      console.log(`Footer:widget`, widget)
      let linksJson = JSON.parse(widget.node.text.raw)
      console.log(`Footer:text`, linksJson)
      let headings = linksJson.content
        .filter(obj => obj.nodeType === BLOCKS.HEADING_5)
        .map(obj => obj.content[0].value)

      let array = [],
        columnIndex = -1
      for (let i = 0; i < linksJson.content.length; i++) {
        let node = linksJson.content[i]
        if (node.nodeType === BLOCKS.HEADING_5) {
          columnIndex++
          array[columnIndex] = { name: node.content[0].value, items: [] }
        }
        if (node.nodeType === BLOCKS.PARAGRAPH) {
          array[columnIndex].items.push(node)
        }
      }
      console.log(`array`, array)
    }
  }, [widget])

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
            <Link to="/terms-of-service">Disclaimers</Link>
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
