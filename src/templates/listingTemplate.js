import React, { Fragment } from "react"
// import Layout from "../components/layout"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ListingBanner from "../components/Listing/ListingBanner"
import PayTreatment from "../components/Listing/ListingDetail.js/PayTreatment"
import TreatmentDetail from "../components/Listing/ListingDetail.js/TreatmentDetail"
import CenterDetail from "../components/Listing/ListingDetail.js/CenterDetail"
import CenterFeature from "../components/Listing/ListingDetail.js/CenterFeature"
import CenterInfo from "../components/Listing/ListingDetail.js/CenterInfo"
import CenterMoreResource from "../components/Listing/ListingDetail.js/CenterMoreResource"
import CenterSetting from "../components/Listing/ListingDetail.js/CenterSetting"
import ListingFooterBanner from "../components/Listing/ListingFooterBanner"
import FindLocalCenters from "../components/Listing/FindLocalCenters"
import Seo from "../components/seo"

export default function ListingTemplate() {
  return (
    <Fragment>
      <Seo
        title="listing"
        meta={[
          {
            property: `google-site-verification`,
            content: process.env.GATSBY_GATSBY_GOOGLE_SITE_VERIFICATION,
          },
        ]}
      />
      <ListingBanner />
      <section className="listing-detail">
        <Container>
          <Row>
            <Col lg={8} sm={12}>
              <PayTreatment />
              <TreatmentDetail />
            </Col>
            <Col lg={4} sm={12}>
              <CenterFeature />
              <CenterDetail />
              <CenterInfo />
              <CenterSetting />
              <CenterMoreResource />
            </Col>
          </Row>
        </Container>
      </section>
      <ListingFooterBanner />
      <FindLocalCenters />
    </Fragment>
  )
}
