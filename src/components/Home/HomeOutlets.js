import React from "react"
import LogoCbs from "../../assets/Logos/logo-cbs.png"
import LogoYahoo from "../../assets/Logos/logo-yahoo.png"
import LogoNbc from "../../assets/Logos/logo-nbc.png"
import LogoFox from "../../assets/Logos/logo-fox.png"
import LogoAbc from "../../assets/Logos/logo-abc.png"
import LogoCw from "../../assets/Logos/logo-cw.png"

export default function HomeOutlets() {
  return (
    <section className="home-outlets">
      <div className="container">
        <h3>We have been featured on multiple outlets</h3>
        <div>
          <div className="home-outlets__logo">
            <img src={LogoCbs} alt="Logo Cbs" />
          </div>
          <div className="home-outlets__logo">
            <img src={LogoYahoo} alt="Logo Yahoo" />
          </div>
          <div className="home-outlets__logo">
            <img src={LogoNbc} alt="Logo Nbc" />
          </div>
          <div className="home-outlets__logo">
            <img src={LogoFox} alt="Logo Fox" />
          </div>
          <div className="home-outlets__logo">
            <img src={LogoAbc} alt="Logo Abc" />
          </div>
          <div className="home-outlets__logo">
            <img src={LogoCw} alt="Logo Cw" />
          </div>
        </div>
      </div>
    </section>
  )
}
