import React from "react"
import PhoneIcon from "../../assets/Icons/phone.svg"
import RequestCallForm from "../common/RequestCallForm"

export default function ListingFooterBanner() {
  return (
    <section className="footer-banner footer-banner--listing">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-12">
            <h2>
              You’re only a call away from
              <br /> changing your life!
            </h2>
            <RequestCallForm className="call-form--listing-footer" />
          </div>
          <div className="col-lg-7 col-sm-12"></div>
        </div>
      </div>
    </section>
  )
}
