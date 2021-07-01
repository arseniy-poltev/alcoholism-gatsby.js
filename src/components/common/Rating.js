import React from "react"
import StarIcon from "../../assets/Icons/star.svg"

export default function Rating({ rating }) {
  return (
    <div className="star-rating">
      {Array(rating)
        .fill(null)
        .map((v, i) => (
          <StarIcon key={i} />
        ))}
    </div>
  )
}
