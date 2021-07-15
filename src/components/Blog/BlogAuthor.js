import React from "react"
import { FaEnvelope, FaTwitter } from "react-icons/fa"

export default function BlogAuthor({ author }) {
  const { avatar, name, position, bio, email, twitterUsername } = author

  return (
    <div className="blog-profile blog-profile--author">
      <h5>Author</h5>
      <div>
        <div className="blog-profile__avatar">
          <img src={avatar?.fixed.src} alt="author" />
        </div>
        <div className="blog-profile__description">
          <h5>{name}</h5>
          <h6>{position}</h6>
          <p>{bio}</p>
          <div className="blog-profile__contact">
            <a>
              <FaEnvelope />
              {email}
            </a>
            <a>
              <FaTwitter />
              {twitterUsername || ""}
            </a>
          </div>
        </div>
      </div>
      {/* <div className="blog-profile__avatar">
        <img src="/Images/png" alt="author" />
      </div>
      <div className="blog-profile__description">
        <h5>Lucas Dunn</h5>
        <h6>Senior Content Writer, Alchoholism.org</h6>
        <p>
          Chris Elkins worked as a journalist for three years and was published
          by multiple newspapers and online publications. Since 2015, he's
          written about health-related topics, interviewed addiction experts and
          authored stories of recovery.
        </p>
        <div className="blog-profile__contact">
          <a>
            <FaEnvelope />
            celkins@drugrehab.com
          </a>
          <a>
            <FaTwitter />
            @ChrisTheCritic9
          </a>
        </div>
      </div> */}
    </div>
  )
}
