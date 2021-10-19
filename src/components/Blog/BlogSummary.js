import React from "react"
import moment from "moment"

export default function BlogSummary(props) {
  const { author, updatedAt } = props
  if (!author) return null

  return (
    <div className="blog__summary">
      <div className="blog__summary__profile">
        <img src={author.avatar.fixed.src} alt="author" />
        <p>
          Author: <a href="#author">{author.name}</a>
        </p>
      </div>
      <div>
        <p>
          Last Updated: <span>{moment(updatedAt).format("M/DD/YYYY")}</span>
        </p>
      </div>
      {/* <div>
        <p>
          Sources: <span>9</span>
        </p>
      </div> */}
    </div>
  )
}
