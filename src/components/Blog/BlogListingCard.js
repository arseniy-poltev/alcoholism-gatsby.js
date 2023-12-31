import React from "react"
import moment from "moment"
import { Link } from "gatsby"

export default function BlogListingCard({ blog }) {
  const { slug, path, title, author, updatedAt } = blog
  return (
    <div className="blog-listing--item">
      <div>
        <h3>{title}</h3>
        <div className="blog-listing--item__summary">
          {author && (
            <div className="blog-listing--item__profile">
              <img src={author.avatar.fixed.src} alt="author" />
              <p>
                Author: <span>{author.name}</span>
              </p>
            </div>
          )}
          <div>
            <p>
              Last Updated: <span>{moment(updatedAt).format("M/DD/YYYY")}</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <Link to={path} className="btn btn-warning">
          VIEW
        </Link>
      </div>
    </div>
  )
}
