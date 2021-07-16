import React from "react"

export default function BlogContent({ html }) {
  return (
    <div
      className="blog blog__content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
