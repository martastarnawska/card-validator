import { useState, ChangeEvent } from 'react';
import checkIsCartNumberValid from './card-validator'
import debounce from './debounce'

const CardNumberInput = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const [isCardNumValid, setIsCardNumValid] = useState<boolean>(false)
  const [validationMessage, setValidationMessage] = useState<string>("")

  const handleValidation = (inputValue: string): void => {
    const [valid, message] = checkIsCartNumberValid(inputValue)
    setIsCardNumValid(valid)
    setValidationMessage(message)
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void  => {
    const handleDebouncedValidation = debounce(handleValidation)

    setInputValue(event.target.value)
    handleDebouncedValidation(event.target.value)
  }

  return (
    <div className="Field">
      <label htmlFor="card_number">Card number</label>
      <input
        type="text"
        pattern="[0-9\s]{13,19}"
        inputMode='numeric'
        aria-label='card number'
        placeholder="0000 0000 0000 0000"
        value={inputValue}
        onChange={handleInputChange}
        className='Input'
        id="card_number"
      >
      </input>
      <p className={isCardNumValid ? "Input__message" : "Input__message Input__message--invalid"}>
        {validationMessage}
      </p>
  </div>
  )
 
}

export default CardNumberInput
