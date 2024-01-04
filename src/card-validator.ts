export const MESSAGES = {
  OK: "valid card number",
  NOT_NUMBER: "please enter only digits",
  INVALID: "invalid card number"
}

const isNumber = (inputString: string): boolean => /^\d+$/.test(inputString)

type Validation = [boolean, string]

const checkIsValid = (cardNumber: string): Validation => {
  const chekIfItsNumber = isNumber(cardNumber)

  if (!chekIfItsNumber) {
    return  [false, MESSAGES.NOT_NUMBER]
  }

  // TODO: drop number type, beacuse cardNumber is a string
  const cardNumArray: string[] = Array.from(cardNumber)
  const digitsArray: number[] = cardNumArray.map(digit => Number(digit))

  // TODO: can drop `as number` now
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