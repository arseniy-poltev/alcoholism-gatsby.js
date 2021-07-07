import React from "react"
import BlogAuthor from "./BlogAuthor"
import BlogEditor from "./BlogEditor"

export default function BlogWriters() {
  return (
    <section>
      <div className="container">
        <div className="blog blog__writter">
          <BlogAuthor />
          <div className="d-flex">
            <BlogEditor
              role="Editor"
              name="Kim Borwick"
              position="Editor, Alchoholism.org"
              avatar="/Images/editor.png"
            />
            <BlogEditor
              role="Medical Reviewer"
              name="Kevin Wandler"
              position="Editor, Alchoholism.org"
              avatar="/Images/reviewer.png"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
