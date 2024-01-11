import { ChangeEvent, useState } from "react"
import { checkIsNameValid } from './card-validator'
import debounce from "./debounce"

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
    <div className="Field">
      <label htmlFor="cardholder_name">
        Cardholder Name
      </label>
      <input
        type="text"
        id="cardholder_name"
        aria-label='cardholder name'
        placeholder="John Smith"
        value={inputValue}
        onChange={handleInputChange}
        className='Input'
      >
      </input>
      <p className={isNameValid ? "Input__message" : "Input__message Input__message--invalid"}>
        {validationMessage}
      </p>
    </div>
  )

}

export default CardholderNameInput
