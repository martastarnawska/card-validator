import React, { useState, ChangeEvent } from 'react';
import checkIsValid from './card-validator'
import './App.scss';

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
    setInputValue(event.target.value)
    handleValidation(event.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
        <h2>Enter Card Number</h2>
        <input
          type="text"
          pattern="[0-9\s]{13,19}"
          inputMode='numeric'
          aria-label='card number'
          placeholder="xxxx xxxx xxxx xxxx"
          value={inputValue}
          onChange={handleInputChange}
        >
      </input>
        <p className={isCardNumValid ? "App__message" : "App__message App__message--invalid"}>
          {validationMessage}
        </p>
      </header>
    </div>
  );
}

export default App;
