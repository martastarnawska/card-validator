import { useState, ChangeEvent } from "react";
import ErrorMessage from "./ErrorMessage";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

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

  const currentDate = new Date() 
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  const handleValidation = ({ month = selectedMonth, year = selectedYear}) => {
    if (currentYear === year && currentMonth > months.indexOf(month)) {
      setIsValid(false)
      setValidationMessage("please select date in the future")
    } else {
      setIsValid(true)
      setValidationMessage("")
    }
  }

  const handleMonthChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(e.target.value)
    handleValidation({ month: e.target.value})
  }
  
  const handleYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(Number(e.target.value))
    handleValidation({ year: Number(e.target.value)})
  }

  return (
    <div>
      <fieldset className="Select__wrapper">
        <legend className="Select__legend">Expire Date</legend>
        <select
          className="Select"
          value={selectedMonth}
          onChange={handleMonthChange}
        >
          {months.map(month => 
            <option
              key={month}
              value={month}
            >
              {month}
            </option>
          )}
        </select>
        <select
          className="Select"
          onChange={handleYearChange}
          value={selectedYear}
        >
          {years.map(year => (
            <option
              key={year}
              value={year}
          >
            {year}
          </option>
          ))}
        </select>     
      </fieldset>
      <ErrorMessage
        isValid={isValid}
        validationMessage={validationMessage}
      />
    </div>
  )
}

export default ExpirationDate
