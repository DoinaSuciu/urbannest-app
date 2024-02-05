import { ChangeEvent, useState } from 'react'
export function useInput(defaultValue: string, validationFn: (value: string) => boolean) {
  const [enteredValue, setEnteredValue] = useState(defaultValue)
  const [touchedValue, setTouchedValue] = useState(false)

  const valueIsValid = validationFn(enteredValue)

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setEnteredValue(event.target.value)
    setTouchedValue(false)
  }

  function handleInputBlur() {
    setTouchedValue(true)
  }

  function reset() {
    setEnteredValue(defaultValue)
    setTouchedValue(false)
  }

  return {
    value: enteredValue,
    hasError: touchedValue && !valueIsValid,
    handleInputChange,
    handleInputBlur,
    reset
  }
}
