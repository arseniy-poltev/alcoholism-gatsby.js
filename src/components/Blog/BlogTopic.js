import { Link } from "gatsby"
import React from "react"

export default function BlogTopic({ topics }) {
  return (
    <div className="blog blog__topic">
      <h5>Topics On This Page</h5>
      <div>
        {topics.map((topic, index) => (
          <Link key={index} to={`/${topic.slug}`}>
            {topic.title}
          </Link>
        ))}
      </div>
    </div>
  )
}
