import React from "react"
import RequestCallForm from "../Home/RequestCallForm"
import BadgeIcon from "../../assets/Icons/badge.svg"
import PencilIcon from "../../assets/Icons/pencil.svg"
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
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div className="gallery">
              <div className="gallery-main">
                <div>
                  <img src={gallery.main} alt="gallery main" />
                </div>
              </div>
              <div className="gallery-strip">
                <img src={gallery.items[0]} alt="gallery" />
                <img src={gallery.items[1]} alt="gallery" />
                <img src={gallery.items[2]} alt="gallery" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
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
              Call our Hotline Number <span>888-777-6666</span>
            </h3>
            <RequestCallForm text={"Enter your phone number"} />
          </div>
        </div>
      </div>
    </section>
  )
}
