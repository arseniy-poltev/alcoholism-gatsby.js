import React from "react"
import Container from "react-bootstrap/Container"
import BlogAuthor from "./BlogAuthor"
import BlogEditor from "./BlogEditor"

export default function BlogWriters(props) {
  const { author, editor, reviewer } = props
  return (
    <section>
      <Container>
        <div className="blog__writter">
          {author && <BlogAuthor author={author} />}
          <div className="blog__editors">
            {editor && <BlogEditor editor={editor} role="Editor" />}
            {reviewer && (
              <BlogEditor editor={reviewer} role="Medical Reviewer" />
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
