import React from "react"
import TwitterIcon from "../../assets/Icons/social/twitter.svg"
import InstagramIcon from "../../assets/Icons/social/instagram.svg"
import FacebookIcon from "../../assets/Icons/social/facebook.svg"

export default function SocialLinks() {
  return (
    <div className="social-links">
      <div className="social-links__item">
        <TwitterIcon />
      </div>
      <div className="social-links__item">
        <InstagramIcon />
      </div>
      <div className="social-links__item">
        <FacebookIcon />
      </div>
    </div>
  )
}
