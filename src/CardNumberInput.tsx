import { useState, ChangeEvent } from 'react';
import checkIsCartNumberValid from './card-validator'
import debounce from './debounce'
import ErrorMessage from './ErrorMessage';
import Field from './Field';

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
    <Field
      id="card_number"
      pattern="[0-9\s]{13,19}"
      aria-label='card number'
      placeholder="0000 0000 0000 0000"
      inputValue={inputValue}
      handleInputChange={handleInputChange}
      labelText="Card number"
      inputMode="numeric"
    >
      <ErrorMessage
        isValid={isCardNumValid}
        validationMessage={validationMessage}
      />
    </Field>
  )
 
}

export default CardNumberInput
