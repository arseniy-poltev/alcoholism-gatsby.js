import React from "react"

export default function BlogSummary() {
  return (
    <div className="blog blog__summary">
      <div>
        <img src="/Images/author.png" alt="author" />
        <p>
          Author: <span>Lucas Dunn</span>
        </p>
      </div>
      <div>
        <p>
          Last Updated: <span>2/27/20</span>
        </p>
      </div>
      <div>
        <p>
          Sources: <span>9</span>
        </p>
      </div>
    </div>
  )
}
