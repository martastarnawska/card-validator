export const MESSAGES = {
  OK: "valid card number",
  NOT_NUMBER: "please enter only digits",
  INVALID: "invalid card number",
  EMPTY: "this field is required"
}

const isNumber = (inputString: string): boolean => /^\d+$/.test(inputString)

type Validation = [boolean, string]

const checkIsValid = (cardNumber: string): Validation => {
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

export default checkIsValid