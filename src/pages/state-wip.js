import React from "react"
import Layout from "../components/layout"
import CenterDetail from "../components/Listing/ListingDetail.js/CenterDetail"
import CenterInfo from "../components/Listing/ListingDetail.js/CenterInfo"
import ListingFooterBanner from "../components/Listing/ListingFooterBanner"
import FindLocalCenters from "../components/Listing/FindLocalCenters"
import ListingCard from "../components/Listing/ListingCard"

export default function StateWip() {
  return (
    <Layout>
      <section className="state-wip__banner">
        <div className="container">
          <h2>New Hampshire</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>
      </section>
      <section className="state-wip__detail">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-12">
              <div className="state-wip__card-wrapper">
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <CenterDetail />
              <CenterInfo />
            </div>
          </div>
        </div>
      </section>
      <ListingFooterBanner />
      <FindLocalCenters />
    </Layout>
  )
}
