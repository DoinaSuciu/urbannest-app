import BaseInput from '../BaseInput'
import classes from './LoginForm.module.scss'
import { useInput } from '../../hooks/useInput'
import { isEmail, isNotEmpty, hasMinLength } from '../../util/validation.js'

export default function Login() {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (emailHasError || passwordHasError) {
      return
    }
    console.log('Login form submitted')
    console.log('login', enteredEmail, enteredPassword)
    //important to validate here as well
    resetEmail()
    resetPassword()
  }
  return (
    <form className={classes.login} onSubmit={handleSubmit}>
      <BaseInput
        type="email"
        label="Email address"
        placeholder="abc@gmail.com"
        name="email"
        error={emailHasError}
        value={enteredEmail}
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
      />

      <BaseInput
        type="password"
        label="Password"
        placeholder="Enter your password"
        name="password"
        error={passwordHasError}
        value={enteredPassword}
        onChange={handlePasswordChange}
        onBlur={handlePasswordBlur}
      />

      <button>Login</button>
    </form>
  )
}
