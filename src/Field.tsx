import { ChangeEvent, ReactNode } from "react"

const Field = ({
  id,
  labelText,
  placeholder,
  inputValue,
  pattern,
  inputMode,
  handleInputChange,
  children,
}: {
  id: string,
  labelText: string,
  placeholder: string,
  inputValue: string,
  inputMode?: "search" | "text" | "email" | "tel" | "url" | "none" | "numeric" | "decimal" | undefined,
  pattern?: string,
  handleInputChange:(event: ChangeEvent<HTMLInputElement>) => void,
  children: ReactNode
}) => {
  return (
    <div className="Field">
      <label htmlFor={id}>
        {labelText}
      </label>
      <input
        type="text"
        id={id}
        aria-label={labelText}
        placeholder={placeholder}
        pattern={pattern}
        inputMode={inputMode}
        value={inputValue}
        onChange={handleInputChange}
        className='Input'
      >
      </input>
      {children}
    </div>
  )
}

export default Field