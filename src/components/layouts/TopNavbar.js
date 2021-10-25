import React from "react"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Logo from "../common/Logo"
import PhoneIcon from "../../assets/Icons/phone.svg"
import { FaBars } from "react-icons/fa"
import TopNavMenu from "./TopNavMenu"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

export default function TopNavbar({ navmenus, widget }) {
  function handleClick(e) {
    console.log(`CALL US NOW`)
    e.preventDefault()
    trackCustomEvent({
      category: "CTA buttons",
      action: "Click",
      label: "Call us campaign",
    })
    window.open("tel:+18887673708")
  }

  return (
    <Navbar bg="transparent" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Logo />
        </Navbar.Brand>
        <Button
          variant="warning"
          className="order-lg-last"
          onClick={handleClick}
        >
          <PhoneIcon />
          <span>CALL US NOW</span>
        </Button>
        <Navbar.Toggle as="div" aria-controls="top-navbar-nav">
          <FaBars />
        </Navbar.Toggle>
        <Navbar.Collapse id="top-navbar-nav">
          <Nav className="me-auto">
            {navmenus.map(menu => (
              <TopNavMenu key={menu.key} item={menu} />
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
