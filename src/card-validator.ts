export const MESSAGES = {
  OK: "",
  NOT_NUMBER: "please enter only digits",
  ONLY_LETTERS: "this field can contain only letters",
  INVALID: "invalid card number",
  CVV_INVALID: "please provide 3 or 4 digits",
  PAST_EXPIRE_DATE: "please select date in the future",
  EMPTY: "this field is required",
}

const isNumber = (inputString: string): boolean => /^\d+$/.test(inputString)
const containsOnlyLettersAndSpaces = (inputString: string): boolean => /^[a-zA-Z\s]*$/g.test(inputString)
const containsThreeOrFourDigits = (insputString: string): boolean =>  /\b\d{3,4}\b/.test(insputString)

type Validation = [boolean, string]

const checkIsCartNumberValid = (cardNumber: string): Validation => {
  const chekIfItsNumber = isNumber(cardNumber)

  // eslint-disable-next-line eqeqeq
  if (cardNumber == '') {
    return [false, MESSAGES.EMPTY]
  }

  if (!chekIfItsNumber) {
    return  [false, MESSAGES.NOT_NUMBER]
  }

  const cardNumArray: string[] = Array.from(cardNumber)
  const digitsArray: number[] = cardNumArray.map(digit => Number(digit))

  const digitsSum: number = digitsArray.reduce(
    (acc:number, curr:number, index: number) => {
      let value = curr
      if (index % 2 === 0) {
        value = curr * 2
        if (value > 9) {
          value = value - 9
        }
      }

      return acc + value
    }, 0)

  if (digitsSum % 10 === 0) {
    return  [true, MESSAGES.OK]
  }
  
  return [false, MESSAGES.INVALID]
}

export const checkIsNameValid = (name: string): Validation => {
  const checkIfHasOnlyLetters = containsOnlyLettersAndSpaces(name)
  
  // eslint-disable-next-line eqeqeq
  if (name == '') {
    return [false, MESSAGES.EMPTY]
  }
  if (checkIfHasOnlyLetters) {
    return [true, MESSAGES.OK]
  }

  return [false, MESSAGES.ONLY_LETTERS]
}

export const isCVVCodeValid = (code: string): Validation => {
  // eslint-disable-next-line eqeqeq
  if (code == '') {
    return [false, MESSAGES.EMPTY]
  }
  
  console.log(code)
  console.log(containsThreeOrFourDigits(code))
  if (containsThreeOrFourDigits(code)) {
    return [true, MESSAGES.OK]
  }

  return [false, MESSAGES.CVV_INVALID]
}

export const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

export const handleDateValidation = (month: string, year: number): Validation => {
  const currentDate = new Date() 
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  if (currentYear === year && currentMonth > months.indexOf(month)) {
    return [false, MESSAGES.PAST_EXPIRE_DATE]
  } 

  return [false, MESSAGES.OK]
}

export default checkIsCartNumberValid