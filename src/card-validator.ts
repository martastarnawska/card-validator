export const MESSAGES = {
  OK: "",
  NOT_NUMBER: "please enter only digits",
  ONLY_LETTERS: "this field can contain only letters",
  INVALID: "invalid card number",
  EMPTY: "this field is required"
}

const isNumber = (inputString: string): boolean => /^\d+$/.test(inputString)
const containsOnlyLetters = (inputString: string): boolean => /^[a-zA-Z]*$/g.test(inputString)

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

  const checkIfHasOnlyLetters = containsOnlyLetters(name)

  if (checkIfHasOnlyLetters) {
    return [true, MESSAGES.OK]
  }

  return [false, MESSAGES.ONLY_LETTERS]
}

export default checkIsCartNumberValid