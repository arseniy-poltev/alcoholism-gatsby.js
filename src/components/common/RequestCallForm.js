import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import PhoneIcon from "../../assets/Icons/phone.svg"
import UserIcon from "../../assets/Icons/user.svg"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import { createCustomerEntry } from "../../service/contentfulApi"
import { useDispatch } from "react-redux"
import alertActions from "../../redux/alert/alertActions"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

export default function RequestCallForm({ className, text }) {
  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch()
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Please enter your first name"),
    phoneNumber: Yup.string().required("Please enter a valid US phone number"),
  })
  const formOptions = { resolver: yupResolver(validationSchema) }
  const { register, handleSubmit, formState } = useForm(formOptions)
  const { errors, isValid } = formState

  async function onSubmit(formData) {
    setIsLoading(true)
    trackCustomEvent({
      category: "Request call button",
      action: "Click",
      label: "Call us campaign",
    })

    try {
      await createCustomerEntry(formData)
      dispatch(alertActions.alertSuccess("Accepted request successfully!"))
    } catch (error) {
      console.log("onSubmit->error", error)
      dispatch(alertActions.alertError(error.message))
    }
    setIsLoading(false)
  }

  function handleChange(e) {
    var x = e.target.value
      .replace(/\D/g, "")
      .match(/(\d{0,3})(\d{0,3})(\d{0,4})/)
    e.target.value = !x[2]
      ? x[1]
      : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "")
    console.log("x", x, e.target.value)
  }

  return (
    <form
      className={`call-form ${className}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3>{text}</h3>
      <div>
        <div className="call-form__input-wrapper">
          <UserIcon />
          <input
            {...register("firstName")}
            className="input-outlined"
            name="firstName"
            type="text"
            placeholder="First Name"
          />
          {/* <span className="error">{errors.firstName?.message}</span> */}
        </div>
        <div className="call-form__input-wrapper">
          <PhoneIcon />
          <input
            {...register("phoneNumber")}
            className="input-outlined"
            name="phoneNumber"
            type="text"
            placeholder="Phone Number"
            onChange={handleChange}
          />
          {/* <span className="error">{errors.phoneNumber?.message}</span> */}
        </div>
      </div>
      <div className="d-flex flex-column">
        {errors.firstName && (
          <span className="error">{errors.firstName?.message}</span>
        )}
        {errors.phoneNumber && (
          <span className="error">{errors.phoneNumber?.message}</span>
        )}
      </div>
      <div className="call-form__action">
        <Button
          disabled={isLoading}
          variant="warning"
          className="btn-transform"
          type="submit"
        >
          <PhoneIcon />
          Request a call
        </Button>
      </div>
    </form>
  )
}
