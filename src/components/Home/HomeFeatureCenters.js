import React from "react"
import Slider from "react-slick"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import CenterCard from "../common/CenterCard"

const settings = {
  dots: false,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 1000
  responsive: [
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
}

function NextArrow(props) {
  const { className, onClick } = props
  return (
    <div onClick={onClick} className="slick-arrow next">
      <FaArrowRight />
    </div>
  )
}

function PrevArrow(props) {
  const { className, onClick } = props
  return (
    <div onClick={onClick} className="slick-arrow prev">
      <FaArrowLeft />
    </div>
  )
}

export default function HomeFeatureCenters(props) {
  const { centers } = props
  return (
    <section className="home-feature-centers">
      <div className="container">
        <span className="badge">OUR FEATURES</span>
        <h2>Quality Recovery Centers in 50 States</h2>
        <div className="carousel-container">
          {
            <Slider {...settings}>
              {centers.map((center, index) => (
                <CenterCard key={index} center={center} />
              ))}
            </Slider>
          }
        </div>
      </div>
    </section>
  )
}
