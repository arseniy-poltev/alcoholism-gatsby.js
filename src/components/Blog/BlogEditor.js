import React from "react"

export default function BlogEditor({ editor, role }) {
  const { avatar, name, position } = editor
  return (
    <div className="blog-profile blog-profile--editor">
      <h5>{role}</h5>
      <div>
        <div className="blog-profile__avatar">
          <div>
            <img src={avatar?.fixed.src} alt="editor" />
          </div>
        </div>
        <div className="blog-profile__description">
          <h5>{name}</h5>
          <h6>{position}</h6>
        </div>
      </div>
    </div>
  )
}
