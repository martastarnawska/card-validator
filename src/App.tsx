import React, { useState, ChangeEvent } from 'react';
import checkIsValid from './card-validator'
import debounce from './debounce'
import './App.scss';
import './reset.scss'

function App() {
  const [inputValue, setInputValue] = useState<string>("")
  const [isCardNumValid, setIsCardNumValid] = useState<boolean>(false)
  const [validationMessage, setValidationMessage] = useState<string>("")

  const handleValidation = (inputValue: string): void => {
    const [valid, message] = checkIsValid(inputValue)
    setIsCardNumValid(valid)
    setValidationMessage(message)
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void  => {
    const handleDebouncedValidation = debounce(handleValidation)

    setInputValue(event.target.value)
    handleDebouncedValidation(event.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <form className="App__form">
          <label htmlFor="card_number">Card number</label>
          <input
            type="text"
            pattern="[0-9\s]{13,19}"
            inputMode='numeric'
            aria-label='card number'
            placeholder="0000 0000 0000 0000"
            value={inputValue}
            onChange={handleInputChange}
            className='App__input'
            id="card_number"
          >
          </input>
          <p className={isCardNumValid ? "App__message" : "App__message App__message--invalid"}>
            {validationMessage}
          </p>
        </form>
      </header>
    </div>
  );
}

export default App;
