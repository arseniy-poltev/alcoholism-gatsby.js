import React from "react"
import { FaArrowUp } from "react-icons/fa"

export default function ScrollToTop() {
  function handleClick(params) {
    window.scrollTo(0, 0)
  }

  return (
    <div className="scroll-top" onClick={handleClick}>
      <FaArrowUp />
    </div>
  )
}
