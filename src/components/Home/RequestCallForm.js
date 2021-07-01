import React from "react"

export default function RequestCallForm({ text }) {
  return (
    <div className="request-call-form">
      <h3>{text}</h3>
      <div className="d-flex justify-content-between">
        <input
          className="input-outlined"
          name="firstname"
          type="text"
          placeholder="First Name"
        />
        <input
          className="input-outlined"
          name="phonenumber"
          type="text"
          placeholder="Phone Number"
        />
      </div>
      <button className="btn btn-primary">Request a call</button>
    </div>
  )
}
