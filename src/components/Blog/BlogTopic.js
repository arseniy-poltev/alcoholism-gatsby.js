import React from "react"
import { BLOCKS } from "@contentful/rich-text-types"

export default function BlogTopic({ topics }) {
  if (!topics || topics.length === 0) return null

  function generateSlug(text) {
    return text.split(" ").join("-").toLowerCase()
  }

  return (
    <div className="blog__topic">
      <h5>Topics On This Page</h5>
      <div>
        {topics.map((topic, index) => {
          if (topic.type === BLOCKS.HEADING_2) {
            return (
              <a
                key={index}
                href={`#${generateSlug(topic.value)}`}
                className="topic-list"
              >
                {topic.value}
              </a>
            )
          }
          if (topic.type === BLOCKS.HEADING_3) {
            return (
              <a
                key={index}
                href={`#${generateSlug(topic.value)}`}
                className="topic-item"
              >
                {topic.value}
              </a>
            )
          }
        })}
      </div>
    </div>
  )
}
