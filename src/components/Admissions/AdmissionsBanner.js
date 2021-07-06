import React from "react"
import RequestCallForm from "../common/RequestCallForm"

export default function AdmissionsBanner() {
  return (
    <section className="top-banner top-banner--admissions">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 d-flex flex-column">
            <div className="text-block">
              <h1>
                Recovery Starts with
                <br /> one Phone Call
              </h1>
              <h4>
                Call our Hotline Number <span>888-777-6666</span>
              </h4>
            </div>
            <RequestCallForm
              className="call-form--admissions"
              text="or we can reach out to you"
            />
          </div>
        </div>
      </div>
    </section>
  )
}