import React, { Fragment } from "react"
import Seo from "../components/seo"

export default function ContactTemplate() {
  return (
    <Fragment>
      <Seo title="contact" />
      <div className="container">
        <div className="blog blog__content">
          <h3>Reach Out Today</h3>
          <p>
            If you or a loved one is suffering from the grip of alcoholism
            getting treatment sooner rather than later is important. The longer
            alcoholism is left untreated, the harder it is to treat.
            Furthermore, alcoholism comes with negative side effects that get
            worse as time goes on.
          </p>
        </div>
      </div>
    </Fragment>
  )
}
