import { useState, ChangeEvent } from 'react'
import ErrorMessage from './ErrorMessage';
import Field from './Field';
import { isCVVCodeValid } from './card-validator'
import debounce from './debounce'

const CVVCode = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const [isValid, setIsValid] = useState<boolean>(false)
  const [validationMessage, setValidationMessage] = useState<string>("")

  const handleValidation = (inputValue: string): void => {
    const [valid, message] = isCVVCodeValid(inputValue)
    setIsValid(valid)
    setValidationMessage(message)
  }

  const handleInputChange = (e:  ChangeEvent<HTMLInputElement>) => {
    const handleDebouncedValidation = debounce(handleValidation)

    setInputValue(e.target.value)
    handleDebouncedValidation(e.target.value)
  }
  
  return (
    <Field
      id="CVV_number"
      pattern=""
      aria-label='CVV code'
      placeholder="000"
      inputValue={inputValue}
      handleInputChange={handleInputChange}
      labelText="CVV Code"
      inputMode="numeric"
  >
    <ErrorMessage
      isValid={isValid}
      validationMessage={validationMessage}
    />
  </Field>
  )
}

export default CVVCode
