import React, { useState, ChangeEvent } from 'react';
import checkIsValid from './card-validator'
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("")
  const [isCardNumValid, setIsCardNumValid] = useState(false)

  const handleValidation = (inputValue: string) => {
    const valid = checkIsValid(inputValue)
    setIsCardNumValid(valid)
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>)  => {
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
          aria-label=''
          placeholder="xxxx xxxx xxxx xxxx"
          value={inputValue}
          onChange={handleInputChange}
        >
        </input>
        <p>{isCardNumValid ? "valid" : "invalid"}</p>
      </header>
    </div>
  );
}

export default App;
