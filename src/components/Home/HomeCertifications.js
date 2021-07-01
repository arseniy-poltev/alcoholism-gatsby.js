import React from "react"
import LogoSamsha from "../../assets/Logos/Logo_SAMSHA.png"
import LogoJointCommission from "../../assets/Logos/Logo_Joint_Commission.png"
import LogoNaadac from "../../assets/Logos/Logo-Naadac.png"
import LogoYpr from "../../assets/Logos/Logo-Ypr.png"

export default function HomeCertifications() {
  return (
    <section className="home-certifications">
      <div className="container">
        <h5>Our Accreditations & Certifications:</h5>
        <div>
          <div className="home-certifications__logo">
            <img src={LogoSamsha} alt="Logo Samsha" />
          </div>
          <div className="home-certifications__logo">
            <img src={LogoJointCommission} alt="Logo JointCommission" />
          </div>
          <div className="home-certifications__logo">
            <img src={LogoNaadac} alt="Logo Naadac" />
          </div>
          <div className="home-certifications__logo">
            <img src={LogoYpr} alt="Logo Ypr" />
          </div>
        </div>
      </div>
    </section>
  )
}
