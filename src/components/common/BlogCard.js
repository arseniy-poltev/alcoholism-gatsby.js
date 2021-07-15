import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import moment from "moment"
import React from "react"
import { FaArrowRight } from "react-icons/fa"

export default function BlogCard(props) {
  const { blog } = props

  return (
    <div className="blog-card">
      <div className="blog-card__cover">
        <img src={blog.image} alt="blog cover" />
        {/* <StaticImage
          src={blog.image}
          width={'300'}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem` }}
        /> */}
      </div>
      <div className="blog-card__summary">
        <h6>
          <span>{blog.tag}</span>•
          {moment(blog.publishedAt).format("MMM DD, YYYY")}
        </h6>
        <h4>{blog.title}</h4>
        <p>{blog.content}</p>
        <Link to="">
          Read article
          <FaArrowRight />
        </Link>
      </div>
    </div>
  )
}
