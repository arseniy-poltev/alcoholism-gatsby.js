import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const navmenus = [
  { to: "Treatment", label: "Treatment" },
  { to: "Locations", label: "Locations" },
  { to: "Admissions", label: "Admissions" },
  { to: "About", label: "About" },
  { to: "Blog", label: "Blog" },
  { to: "Contact", label: "Contact" },
]

function Header(props) {
  return (
    <>
      <div className="container">
        <div className="navbar d-flex justify-content-between">
          <div className="logo">Alcoholism.org</div>
          <div className="navbar-nav d-flex justify-content-around">
            {navmenus.map((menu, index) => (
              <div key={index} className="nav-item">
                <Link to={menu.to}>{menu.label}</Link>
              </div>
            ))}
          </div>
          <div>
            <button className="btn btn-primary">CALL US NOW</button>
          </div>
        </div>
      </div>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
