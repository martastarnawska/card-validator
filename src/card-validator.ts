const isNumber = (inputString: string): boolean => /^\d+$/.test(inputString)

const checkIsValid = (cardNumber: string) => {
  const chekIfItsNumber = isNumber(cardNumber)

  if (!chekIfItsNumber) {
    console.log("not a number!")
    return false
  }

  const cardNumArray: (string | number)[] = Array.from(cardNumber)
  const digitsArray = cardNumArray.map(digit => Number(digit))

  const digitsSum = (digitsArray as number[]).reduce(
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
    return true
  }

  return  false
}

export default checkIsValid
