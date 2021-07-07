import React from "react"
import moduleName from "react-icons/fa"

export default function BlogAuthor() {
  return (
    <div className="blog-profile blog-profile--author">
      <h5>Author</h5>
      <div>
        <div className="blog-profile__avatar">
          <img src="/Images/author.png" alt="author" />
        </div>
        <div className="blog-profile__description">
          <h5>Lucas Dunn</h5>
          <h6>Senior Content Writer, Alchoholism.org</h6>
          <p>
            Chris Elkins worked as a journalist for three years and was
            published by multiple newspapers and online publications. Since
            2015, he's written about health-related topics, interviewed
            addiction experts and authored stories of recovery.
          </p>
        </div>
        <div className="blog-profile__social">
          <div></div>
        </div>
      </div>
    </div>
  )
}
