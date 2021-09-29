import { Link } from "gatsby"
import React from "react"
import LogoImage from "../../assets/Logos/logo.jpg"

export default function Logo() {
  return (
    <div className="logo">
      <img src={LogoImage} alt="Logo" />
    </div>
  )
}
