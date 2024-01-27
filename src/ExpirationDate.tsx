import { useState, ChangeEvent } from "react";
import ErrorMessage from "./ErrorMessage";
import { months } from "./card-validator"
import { handleDateValidation } from "./card-validator";
import Select from "./Select";

const createArrayOfYears = () => {
  const min = new Date().getFullYear()
  const max = min + 15
  const years = []

  for (let i = min; i <= max; i++) {
    years.push(i)
  }

  return years
}

const years = createArrayOfYears()

const ExpirationDate = () => {
  const [selectedMonth, setSelectedMonth] = useState<string>(months[0])
  const [selectedYear, setSelectedYear] = useState<number>(years[0])
  const [isValid, setIsValid] = useState<boolean>(true)
  const [validationMessage, setValidationMessage] = useState<string>("")

  const handleValidation = (month: string, year: number) => {
    const [isDateValid, dateValidationMessage] = handleDateValidation(month, year)

    setIsValid(isDateValid)
    setValidationMessage(dateValidationMessage)
  }

  const handleMonthChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(e.target.value)
    handleValidation( e.target.value, selectedYear)
  }
  
  const handleYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(Number(e.target.value))
    handleValidation(selectedMonth, Number(e.target.value))
  }

  return (
    <div>
      <fieldset className="Select__wrapper">
        <legend className="Select__legend">Expire Date</legend>
        <Select
          selectedValue={selectedMonth}
          handleChange={handleMonthChange}
          itemsArray={months}
        />
        <Select
          selectedValue={selectedYear}
          handleChange={handleYearChange}
          itemsArray={years}        
        />
      </fieldset>
      <ErrorMessage
        isValid={isValid}
        validationMessage={validationMessage}
      />
    </div>
  )
}

export default ExpirationDate
