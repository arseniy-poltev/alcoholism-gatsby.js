import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Logo from "../common/Logo"
import PhoneIcon from "../../assets/Icons/phone.svg"

const navmenus = [
  { to: "/treatment", label: "Treatment" },
  { to: "/listing", label: "Locations" },
  { to: "/admissions", label: "Admissions" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
]

function Header(props) {
  return (
    <>
      <div className="container">
        <div className="navbar d-flex justify-content-between">
          <Logo />
          <div className="navbar-nav d-flex justify-content-around">
            {navmenus.map((menu, index) => (
              <div key={index} className="nav-item">
                <Link to={menu.to}>{menu.label}</Link>
              </div>
            ))}
          </div>
          <div>
            <button className="btn btn-primary">
              <PhoneIcon />
              CALL US NOW
            </button>
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
