import { ChangeEvent, FocusEvent, FC, useState } from 'react'
import BaseInput from './BaseInput'
import Button from './Button'

const BaseForm: FC = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isTouched, setIsTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  })

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    console.log(event.target.name)
    setInput((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
    setIsTouched((prevState) => ({
      ...prevState,
      [event.target.name]: false
    }))
  }

  const handleInputBlur = (event: FocusEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    console.log(event.target.name)
    setIsTouched((prevState) => ({
      ...prevState,
      [event.target.name]: true
    }))
  }

  return (
    <form>
      <BaseInput
        type="text"
        label="Your name"
        placeholder="John"
        name="name"
        error={isTouched.name && input.name === ''}
        value={input.name}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />

      <BaseInput
        type="text"
        label="Email address"
        placeholder="abc@gmail.com"
        name="email"
        error={isTouched.email && input.email === ''}
        value={input.email}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />

      <BaseInput
        type="text"
        label="Subject"
        placeholder="Furniture"
        name="subject"
        error={isTouched.subject && input.subject === ''}
        value={input.subject}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />

      <BaseInput
        type="text"
        label="Message"
        placeholder="Hi! I'd like to ask about..."
        name="message"
        error={isTouched.message && input.message === ''}
        value={input.message}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      <Button
        type="submit"
        onClick={(event) => {
          event.preventDefault()
        }}
        style={{ weight: 237, height: 55, fontSize: 16 }}
        primarColorButton
      >
        Submit
      </Button>
    </form>
  )
}

export default BaseForm
