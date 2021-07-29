import React from "react"

export default function BlogTopic({ topics }) {
  if (!topics || topics.length === 0) return null
  return (
    <div className="blog__topic">
      <h5>Topics On This Page</h5>
      <div>
        {topics.map((topic, index) => (
          <a key={index} href={`#${topic.slug}`}>
            {topic.title}
          </a>
        ))}
      </div>
    </div>
  )
}
