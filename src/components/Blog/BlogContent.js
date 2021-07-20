import React, { Fragment } from "react"

export default function BlogContent({ content }) {
  return (
    <Fragment>
      <div
        className="blog__content"
        dangerouslySetInnerHTML={{
          __html: content.childContentfulRichText.html,
        }}
      />
    </Fragment>
  )
}
