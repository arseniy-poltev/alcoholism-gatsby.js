import React from "react"
import moduleName from "react-icons/fa"

export default function BlogEditor(props) {
  const { role, avatar, name, position } = props
  return (
    <div className="blog-profile blog-profile--editor">
      <h5>{role}</h5>
      <div>
        <div className="blog-profile__avatar">
          <img src={avatar} alt="editor" />
        </div>
        <div className="blog-profile__description">
          <h5>{name}</h5>
          <h6>{position}</h6>
        </div>
      </div>
    </div>
  )
}
