import React from "react"
import styles from './ContactForm.module.css'
import { useForm, SubmitHandler } from "react-hook-form"

type FormFields = {
  name: string
  email: string
  message: string
}

const ContactForm = () => {
  const {
    register,
    trigger,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFields>({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const isValid = await trigger();
    
    if (isValid) {
      console.log(data)
      reset()
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.contact_form}>
      <div>
        <input type="text" placeholder="Name" 
          {...register("name", {
            required: true,
            maxLength: 100,
          })}
        />
        {errors.name && (
          <span className={styles.error}>
            {errors.name.type === "required" && "This field is required."}
            {errors.name.type === "maxLength" &&
              "Max length is 100 char."}
          </span>
        )}
      </div>
      <div>
        <input type="email" placeholder="Email" 
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        {errors.email && (
          <span className={styles.error}>
            {errors.email.type === "required" &&
              "This field is required."}
            {errors.email.type === "pattern" && "Invalid email address."}
          </span>
        )}
      </div>
      <div>
        <textarea cols={50} rows={4} placeholder="Message" 
          {...register("message", {
            required: true,
            maxLength: 2000,
          })}
        />
        {errors.message && (
          <span className={styles.error}>
            {errors.message.type === "required" &&
              "This field is required."}
            {errors.message.type === "maxLength" &&
              "Max length is 2000 char."}
          </span>
        )}
      </div>
      <div>
        <button type="submit" className={styles.submit_btn}>Submit</button>
      </div>
    </form>
  )
}

export default ContactForm