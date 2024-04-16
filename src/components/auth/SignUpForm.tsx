import BaseInput from '../BaseInput'
import classes from './SignUpForm.module.scss'
import { useInput } from '../../hooks/useInput'
import { isEmail, isNotEmpty, hasMinLength } from '../../util/validation.js'

export default function Register() {
  const {
    value: enteredName,
    handleInputChange: handleNameChange,
    handleInputBlur: handleNameBlur,
    hasError: nameHasError,
    reset: resetName
  } = useInput('', (value) => isNotEmpty(value))

  const {
    value: enteredSurname,
    handleInputChange: handleSurnameChange,
    handleInputBlur: handleSurnameBlur,
    hasError: surnameHasError,
    reset: resetSurname
  } = useInput('', (value) => isNotEmpty(value))

  const {
    value: enteredEmail,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
    reset: resetEmail
  } = useInput('', (value) => isEmail(value) && isNotEmpty(value))

  const {
    value: enteredPassword,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
    reset: resetPassword
  } = useInput('', (value) => hasMinLength(value, 6))

  const {
    value: enteredPhone,
    handleInputChange: handlePhoneChange,
    handleInputBlur: handlePhoneBlur,
    hasError: phoneHasError,
    reset: resetPhone
  } = useInput('', (value) => hasMinLength(value, 9))

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (emailHasError || passwordHasError) {
      return
    }
    console.log('Login form submitted')
    console.log('login', enteredEmail, enteredPassword)
    //important to validate here as well
    resetName()
    resetSurname()
    resetEmail()
    resetPassword()
    resetPhone()
  }

  return (
    <form className={classes.register} onSubmit={handleSubmit}>
      <BaseInput
        type="text"
        label="Prenumele"
        placeholder="Ion"
        name="name"
        error={nameHasError}
        value={enteredName}
        onChange={handleNameChange}
        onBlur={handleNameBlur}
      />

      <BaseInput
        type="text"
        label="Numele"
        placeholder="Travolta"
        name="surname"
        error={surnameHasError}
        value={enteredSurname}
        onChange={handleSurnameChange}
        onBlur={handleSurnameBlur}
      />

      <BaseInput
        type="text"
        label="Email"
        placeholder="abc@gmail.com"
        name="email"
        error={emailHasError}
        value={enteredEmail}
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
      />

      <BaseInput
        type="password"
        label="Parola"
        placeholder="Introdeceți parola"
        name="password"
        error={passwordHasError}
        value={enteredPassword}
        onChange={handlePasswordChange}
        onBlur={handlePasswordBlur}
      />

      <BaseInput
        type="number"
        label="Numărul de telefon"
        placeholder="0726564896"
        name="phone"
        error={phoneHasError}
        value={enteredPhone}
        onChange={handlePhoneChange}
        onBlur={handlePhoneBlur}
      />

      <button>Înregistrează-te</button>
    </form>
  )
}
