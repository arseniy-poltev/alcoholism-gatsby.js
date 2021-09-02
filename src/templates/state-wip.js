import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Layout from "../components/layout"
import CenterDetail from "../components/Listing/ListingDetail.js/CenterDetail"
import CenterInfo from "../components/Listing/ListingDetail.js/CenterInfo"
import ListingFooterBanner from "../components/Listing/ListingFooterBanner"
import FindLocalCenters from "../components/Listing/FindLocalCenters"
import ListingCard from "../components/Listing/ListingCard"
import Seo from "../components/seo"

export default function StateWip() {
  return (
    <Layout>
      <Seo title="State WIP" />
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
        <Container>
          <Row>
            <Col lg={8} sm={12}>
              <div className="state-wip__card-wrapper">
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
              </div>
            </Col>
            <Col lg={4} sm={12}>
              <CenterDetail />
              <CenterInfo />
            </Col>
          </Row>
        </Container>
      </section>
      <ListingFooterBanner />
      <FindLocalCenters />
    </Layout>
  )
}
