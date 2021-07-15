import React, { Fragment } from "react"
import Layout from "../components/layout"
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
      <Seo title="listing" />
      <ListingBanner />
      <section className="listing-detail">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-12">
              <PayTreatment />
              <TreatmentDetail />
            </div>
            <div className="col-lg-4 col-sm-12">
              <CenterFeature />
              <CenterDetail />
              <CenterInfo />
              <CenterSetting />
              <CenterMoreResource />
            </div>
          </div>
        </div>
      </section>
      <ListingFooterBanner />
      <FindLocalCenters />
    </Fragment>
  )
}
