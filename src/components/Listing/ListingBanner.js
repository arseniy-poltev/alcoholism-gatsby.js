import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import RequestCallForm from "../common/RequestCallForm"
import BadgeIcon from "../../assets/Icons/badge.svg"
import PencilIcon from "../../assets/Icons/pencil.svg"
import PlayIcon from "../../assets/Icons/play.svg"
import YelpIcon from "../../assets/Icons/yelp-black.svg"
import GoogleIcon from "../../assets/Icons/google.svg"

import Rating from "../common/Rating"

const gallery = {
  main: "/Images/gallery3.png",
  items: [
    "/Images/gallery1.png",
    "/Images/gallery2.png",
    "/Images/gallery3.png",
  ],
}
export default function ListingBanner() {
  return (
    <section className="listing-banner">
      <Container>
        <Row>
          <Col lg={6} sm={12} className="d-flex">
            <div className="gallery-wrapper">
              <div className="gallery">
                <div className="gallery-main">
                  <img src={gallery.main} alt="gallery main" />
                  <span className="gallery-main__badge">verified</span>
                  <div className="gallery-main__actions">
                    <div>
                      <YelpIcon />
                    </div>
                    <div>
                      <GoogleIcon />
                    </div>
                  </div>
                </div>
                <div className="gallery-strip">
                  <div className="gallery-strip__item">
                    <img src={gallery.items[0]} alt="gallery" />
                  </div>
                  <div className="gallery-strip__item">
                    <PlayIcon />
                    <img src={gallery.items[1]} alt="gallery" />
                  </div>
                  <div className="gallery-strip__item">
                    <img src={gallery.items[2]} alt="gallery" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={12}>
            <div className="location-summary">
              <div className="d-flex flex-column">
                <h2 className="location-summary__name">
                  The Owl's Nest
                  <BadgeIcon />
                </h2>
                <div className="location-summary__rating">
                  <Rating rating={5} />
                  <p>
                    5.0 <span>(50 Reviews)</span>
                  </p>
                  <div className="location-summary__review-btn">
                    <PencilIcon />
                    Add your review
                  </div>
                </div>
              </div>
              <h3 className="location-summary__address">
                2528 W. Palmetto St., Florence, SC 29501
              </h3>
            </div>
            <h3 className="location-summary__phone">
              Call our Hotline Number <span>888-767-3708</span>
            </h3>
            <RequestCallForm
              className="call-form--listing"
              text={"Enter your phone number"}
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
