import React from "react"
import PhoneIcon from "../../assets/Icons/phone.svg"
import UserIcon from "../../assets/Icons/user.svg"

export default function RequestCallForm({ text }) {
  return (
    <div className="call-form">
      <h3>{text}</h3>
      <div>
        <div className="call-form__input-wrapper">
          <UserIcon />
          <input
            className="input-outlined"
            name="firstname"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div className="call-form__input-wrapper">
          <PhoneIcon />
          <input
            className="input-outlined"
            name="phonenumber"
            type="text"
            placeholder="Phone Number"
          />
        </div>
      </div>
      <button className="btn btn-primary">
        <PhoneIcon />
        Request a call
      </button>
    </div>
  )
}
