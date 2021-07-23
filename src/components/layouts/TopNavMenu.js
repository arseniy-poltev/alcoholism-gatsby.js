import React from "react"
import { Link } from "gatsby"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"

export default function TopNavMenu(props) {
  const { item } = props
  const { key, label, children } = item
  if (children) {
    return (
      <NavDropdown title={label} id="top-nav-dropdown" onClick={(e)=>console.log('top-nav-dropdown-->click', e)}>
        {children.map(menu => (
          <Nav.Item key={menu.key}>
            <Link to={`/${key}/${menu.key}`} className="topnav-item">
              {menu.label}
            </Link>
          </Nav.Item>
        ))}
      </NavDropdown>
    )
  }
  return (
    <Nav.Item key={key}>
      <Link to={`/${key}`} className="topnav-item">
        {label}
      </Link>
    </Nav.Item>
  )
}
