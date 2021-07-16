import React from "react"
import BlogAuthor from "./BlogAuthor"
import BlogEditor from "./BlogEditor"

export default function BlogWriters(props) {
  const { author, editor, reviewer } = props
  return (
    <section>
      <div className="container">
        <div className="blog blog__writter">
          <BlogAuthor author={author} />
          <div>
            {editor && <BlogEditor editor={editor} role="Editor" />}
            {reviewer && (
              <BlogEditor editor={reviewer} role="Medical Reviewer" />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
