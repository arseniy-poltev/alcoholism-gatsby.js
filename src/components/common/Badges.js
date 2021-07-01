import React from "react"
import Badge1 from "../../assets/Badges/1.png"
import Badge2 from "../../assets/Badges/2.png"
import Badge3 from "../../assets/Badges/3.png"

export default function Badges() {
  return (
    <div className="footer-badges">
      <div className="footer-badges__item">
        <img src={Badge1} alt="badge" />
      </div>
      <div className="footer-badges__item">
        <img src={Badge2} alt="badge" />
      </div>
      <div className="footer-badges__item">
        <img src={Badge3} alt="badge" />
      </div>
    </div>
  )
}
