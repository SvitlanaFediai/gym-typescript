import React, { ChangeEvent } from 'react'
import styles from './CustomInput.module.css'

type CustomInputProps = {
  value: number | ''
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  label: string
  type: string
  placeholder: string
}

const CustomInput = ({value, onChange, label, type, placeholder}: CustomInputProps) => {
  return (
    <div className={styles.form_input}>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
      <label htmlFor="">{label}</label>
    </div>
  )
}

export default CustomInput