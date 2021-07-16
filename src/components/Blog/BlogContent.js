import React from "react"

export default function BlogContent({ content }) {
  return (
    <div
      className="blog blog__content"
      dangerouslySetInnerHTML={{ __html: content.childContentfulRichText.html }}
    />
  )
}
