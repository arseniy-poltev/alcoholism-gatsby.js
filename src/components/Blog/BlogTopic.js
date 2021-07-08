import { Link } from "gatsby"
import React from "react"

const topics = [
  "Types of Addiction Treatment",
  "Therapeutic Approaches",
  "Where to find Treatment",
  "Treatment Process",
  "How Much Treatment Costs",
]
export default function BlogTopic() {
  return (
    <div className="blog blog__topic">
      <h5>Topics On This Page</h5>
      <div>
        {topics.map((topic, index) => (
          <Link key={index} to="/">
            {topic}
          </Link>
        ))}
      </div>
    </div>
  )
}
