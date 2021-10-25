import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Badges from "../common/Badges"
import SocialLinks from "../common/SocialLinks"
import { BLOCKS } from "@contentful/rich-text-types"
import FooterLink from "./FooterLink"

export default function Footer(props) {
  const [countCols, setCountCols] = useState(null)
  const [linksArray, setlinksArray] = useState(null)
  const { widget } = props

  useEffect(() => {
    if (widget) {
      console.log(`Footer:widget`, widget)
      let linksJson = JSON.parse(widget.node.text.raw)
      console.log(`Footer:text`, linksJson)

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

      setlinksArray(array)
      setCountCols(array.length)
    }
  }, [widget])

  if (!linksArray || !countCols) return null

  return (
    <footer>
      <Container>
        <Row>
          <Col lg={4} sm={12}>
            {/* <SocialLinks /> */}
            <h5 className="copyright">
              Alcoholism.org. ©
              <br />
              1-888-767-3708
              <br />
              Copyright 2021 Addiction Solutions, LLC <br />
              All Rights Reserved
            </h5>
            {widget.node.childWidgets && (
              <Badges nodes={widget.node.childWidgets} />
            )}
          </Col>
          <Col lg={8} sm={12}>
            <Row>
              {linksArray.map(linkBlock => {
                return (
                  <Col key={linkBlock.name} lg={12 / countCols} sm={6}>
                    <h5>{linkBlock.name}</h5>
                    {linkBlock.items.map((obj, index) => (
                      <FooterLink key={index} node={obj} />
                    ))}
                  </Col>
                )
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
