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
            <BlogEditor editor={editor} role="Editor" />
            <BlogEditor editor={editor} role="Medical Reviewer" />
            {/* <BlogEditor
              editor={editor}
              role="Editor"
              name="Kim Borwick"
              position="Editor, Alchoholism.org"
              avatar="/Images/editor.png"
            />
            <BlogEditor
              editor={editor}
              role="Medical Reviewer"
              name="Kevin Wandler"
              position="Editor, Alchoholism.org"
              avatar="/Images/reviewer.png"
            /> */}
          </div>
        </div>
      </div>
    </section>
  )
}
