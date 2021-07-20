import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Logo from "../common/Logo"
import PhoneIcon from "../../assets/Icons/phone.svg"
import { FaBars } from "react-icons/fa"
import classNames from "classnames"

// const navmenus = [
//   { to: "/treatment", label: "Treatment" },
//   { to: "/listing", label: "Locations" },
//   { to: "/admissions", label: "Admissions" },
//   { to: "/about", label: "About" },
//   { to: "/contact", label: "Contact" },
// ]

function Header({ navmenus }) {
  const [dropdownOpened, setDropdownOpened] = useState(false)
  return (
    <section>
      <div className="container">
        <div className="navbar">
          <Logo />
          <div
            className={classNames("navbar-nav", {
              show: dropdownOpened,
              hidden: !dropdownOpened,
            })}
          >
            {navmenus.map((menu, index) => (
              <div key={index} className="nav-item">
                <Link to={menu.to}>{menu.label}</Link>
              </div>
            ))}
          </div>
          <Button variant="warning">
            <PhoneIcon />
            <span>CALL US NOW</span>
          </Button>
          <div
            className="toggler"
            onClick={() => setDropdownOpened(!dropdownOpened)}
          >
            <FaBars />
          </div>
        </div>
      </div>
    </section>
  )
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
