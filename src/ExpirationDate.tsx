import { useState, ChangeEvent } from "react";

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
  const [selectedMonth, setSelectedMonth] = useState(months[0])
  const [selectedYear, setSelectedYear] = useState(years[0].toString())

  const handleMonthChange = (e: ChangeEvent<HTMLSelectElement>) => setSelectedMonth(e.target.value)
  const handleYearChange = (e: ChangeEvent<HTMLSelectElement>) => setSelectedYear(e.target.value)

  return (
    <div >
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
              value={year.toString()}
          >
            {year}
          </option>
          ))}
        </select>     
      </fieldset>
    </div>
  )
}

export default ExpirationDate
