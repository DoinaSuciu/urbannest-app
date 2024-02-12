import { useState } from 'react'
import classes from './AuthenticationPage.module.scss'
import LoginForm from '../components/auth/LoginForm'
import SignUpForm from '../components/auth/SignUpForm'
export default function MyAccountPage() {
  const [currentSelection, setCurrentSelection] = useState('login')

  return (
    <div className={classes['auth-page']}>
      <h1>My Account</h1>
      <div className={classes['auth-selection']}>
        <button
          className={currentSelection === 'login' ? classes.active : ''}
          onClick={() => setCurrentSelection('login')}
        >
          Login
        </button>
        <button
          className={currentSelection === 'register' ? classes.active : ''}
          onClick={() => setCurrentSelection('register')}
        >
          Register
        </button>
      </div>

      {currentSelection === 'login' && <LoginForm />}

      {currentSelection === 'register' && <SignUpForm />}
    </div>
  )
}
