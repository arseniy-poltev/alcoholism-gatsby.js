import React from "react"

export default function BlogBanner(props) {
  const { title, shortDescription } = props

  return (
    <section className="top-banner top-banner--blog">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 d-flex flex-column">
            <div className="text-block">
              <h1>{title}</h1>
              <p>{shortDescription}</p>
              <button className="btn btn-primary">
                GET HELP WITH YOUR ADDICTION
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
