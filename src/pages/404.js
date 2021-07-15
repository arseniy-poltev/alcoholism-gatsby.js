import * as React from "react"
import { Fragment } from "react"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Fragment>
    <Seo title="404: Not found" />
    <div className="container">
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Fragment>
)

export default NotFoundPage
