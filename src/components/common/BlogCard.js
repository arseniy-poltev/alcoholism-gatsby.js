import { Link } from "gatsby"
import moment from "moment"
import React from "react"
import { FaArrowRight } from "react-icons/fa"

export default function BlogCard(props) {
  const { blog } = props

  return (
    <div className="blog-card">
      <div className="blog-cover" />
      <div className="blog-summary">
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
