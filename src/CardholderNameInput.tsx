import { ChangeEvent, useState } from "react"
import ErrorMessage from "./ErrorMessage"
import { checkIsNameValid } from './card-validator'
import debounce from "./debounce"
import Field from "./Field"

const CardholderNameInput = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const [isNameValid, setIsNameValid] = useState<boolean>(false)
  const [validationMessage, setValidationMessage] = useState<string>("")

  const handleValidation = (inputValue: string): void => {
    const [valid, message] = checkIsNameValid(inputValue)
    setIsNameValid(valid)
    setValidationMessage(message)
  }
  
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const handleDebouncedValidation = debounce(handleValidation)
    
    setInputValue(event.target.value) 
    handleDebouncedValidation(event.target.value)
  }

  return (
    <Field
      id="cardholder_name"
      aria-label='cardholder name'
      placeholder="John Smith"
      inputValue={inputValue}
      handleInputChange={handleInputChange}
      labelText="Cardholder Name"
    >
      <ErrorMessage
        isValid={isNameValid}
        validationMessage={validationMessage}
      />
    </Field>
  )

}

export default CardholderNameInput
