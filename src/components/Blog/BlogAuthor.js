import React from "react"
import { FaEnvelope, FaTwitter } from "react-icons/fa"

export default function BlogAuthor({ author }) {
  console.log(`BlogAuthor`, author)
  const { avatar, name, position, bio, email, twitterUsername } = author

  return (
    <div id="author" className="blog-profile blog-profile--author">
      <h5>Author</h5>
      <div>
        <div className="blog-profile__avatar">
          <div>
            <img src={avatar?.fixed.src} alt="author" />
          </div>
        </div>
        <div className="blog-profile__description">
          <h5>{name}</h5>
          <h6>{position}</h6>
          <p>{bio?.bio || ""}</p>
          <div className="blog-profile__contact">
            {email && (
              <a
                href={`mailto:${email}?subject=To Author`}
                target="_blank"
                rel="nofollow"
              >
                <FaEnvelope />
                {email}
              </a>
            )}
            {/* {twitterUsername && (
              <a href="#">
                <FaTwitter />
                {twitterUsername}
              </a>
            )} */}
          </div>
        </div>
      </div>
    </div>
  )
}
