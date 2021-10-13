import React from "react"
import Badge1 from "../../assets/Badges/1.png"
import Badge2 from "../../assets/Badges/2.png"
import Badge3 from "../../assets/Badges/3.png"

export default function Badges({ nodes }) {
  console.log(`Badges:widget`, nodes)
  return (
    <div className="footer-badges">
      {nodes.map((node, index) => (
        <div key={index} className="footer-badges__item">
          <img src={node.image ? node.image.fixed.src : ""} alt={node.name} />
        </div>
      ))}
    </div>
  )
}
