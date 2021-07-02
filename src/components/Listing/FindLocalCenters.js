import React from "react"

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "lowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
]

export default function FindLocalCenters() {
  return (
    <section className="local-centers">
      <div className="container">
        <span className="badge">Our features</span>
        <h2>Find Local Addiction Recovery Centers</h2>
        <p>
          When you opt for the increased success rates common to some of the top
          <br />
          residential recovery centers, you give yourself or your loved one the
          best chance of <br />
          achieving and maintaining sobriety.
        </p>
        <div className="states">
          {states.map((state, index) => (
            <div key={index}>{state}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
