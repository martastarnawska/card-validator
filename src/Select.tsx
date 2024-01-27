import { ChangeEvent } from "react"

const Select = ({
  selectedValue,
  handleChange,
  itemsArray,
} : {
  selectedValue: string | number, 
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void,
  itemsArray: Array<string | number>
}) => (
  <select
    className="Select"
    value={selectedValue}
    onChange={handleChange}
  >
    {itemsArray.map(item => 
      <option
        key={item}
        value={item}
      >
        {item}
      </option>
    )}
  </select>
)


export default Select