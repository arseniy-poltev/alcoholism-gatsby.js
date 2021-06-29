import React from "react"
import RequestCallForm from "./RequestCallForm"

export default function HomeBanner() {
  return (
    <section className="home-banner">
      <div className="container my-auto">
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
            <RequestCallForm />
          </div>
        </div>
      </div>
    </section>
  )
}
