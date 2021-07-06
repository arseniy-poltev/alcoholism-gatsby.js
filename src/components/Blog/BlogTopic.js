import { Link } from "gatsby"
import React from "react"

const topics = [
  "Types of Addiction Treatment",
  "Treatment Process",
  "Therapeutic Approaches",
  "How Much Treatment Costs",
  "Where to find Treatment",
]
export default function BlogTopic() {
  return (
    <div className="blog__topic">
      <h5>Topics On This Page</h5>
      <ul>
        {topics.map(topic => (
          <li>
            <Link to="/">{topic}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
