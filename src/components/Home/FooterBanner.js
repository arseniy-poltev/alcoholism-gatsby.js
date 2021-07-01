import React from "react"
import PhoneIcon from "../../assets/Icons/phone.svg"

export default function FooterBanner() {
  return (
    <section className="home-footer-banner">
      <div className="container">
        <h2>You’re only a call away from changing your life!</h2>
        <button className="btn btn-primary-outlined">
          <PhoneIcon />
          GIVE US A CALL TODAY
        </button>
      </div>
    </section>
  )
}
