import React from "react"
import Button from "react-bootstrap/Button"
import PhoneIcon from "../../assets/Icons/phone.svg"
import UserIcon from "../../assets/Icons/user.svg"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"

export default function RequestCallForm({ className, text }) {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
  })
  const formOptions = { resolver: yupResolver(validationSchema) }
  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    control,
    formState,
  } = useForm(formOptions)
  const { errors, isValid } = formState

  function onSubmit(formData) {
    console.log("RequestCallForm->onSubmit", formData)
    alert(JSON.stringify(formData))
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
          <span className="span-error">{errors.firstName?.message}</span>
        </div>
        <div className="call-form__input-wrapper">
          <PhoneIcon />
          <input
            {...register("phoneNumber")}
            className="input-outlined"
            name="phoneNumber"
            type="text"
            placeholder="Phone Number"
          />
          <span className="span-error">{errors.phoneNumber?.message}</span>
        </div>
      </div>
      <div className="call-form__action">
        <Button variant="warning" type="submit">
          <PhoneIcon />
          Request a call
        </Button>
      </div>
    </form>
  )
}
