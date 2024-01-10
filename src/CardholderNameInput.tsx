import { ChangeEvent, useState } from "react"

const CardholderNameInput = () => {
  const [inputValue, setInputValue] = useState<string>("")

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value) 
  }

  return (
    <>
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
    </>
  )

}

export default CardholderNameInput
