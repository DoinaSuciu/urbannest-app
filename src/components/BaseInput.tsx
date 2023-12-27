import { ChangeEvent, FocusEvent, FC } from 'react'
import inputClasses from './BaseInput.module.scss'

interface InputProps {
  type: 'text' | 'number' | 'email' | 'password'
  label: string
  value: string | number
  name: string
  placeholder: string
  error: boolean
  disabled?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onBlur: (e: FocusEvent<HTMLInputElement>) => void
}

const BaseInput: FC<InputProps> = ({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  onChange,
  onBlur
}) => {
  return (
    <div className={inputClasses['input-wrapper']}>
      <label className={inputClasses.label} htmlFor={label}>
        {label}
      </label>
      <input
        className={`${inputClasses.input} ${error ? inputClasses.inputError : ''}`}
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
      />
      {error && <p className={inputClasses.error}>Input filed can't be empty!</p>}
    </div>
  )
}

export default BaseInput
