import checkIsCartNumberValid from './card-validator';
import { MESSAGES } from './card-validator'

test('validates card number correctly', () => {
  const [isCardNumberValid, validationMessage] = checkIsCartNumberValid("5555555555554444")

  expect(isCardNumberValid).toBeTruthy()
  expect(validationMessage).toEqual(MESSAGES.OK)
})

test('validates invalid card number correctly', () => {
  const [isCardNumberValid, validationMessage] = checkIsCartNumberValid("5555555555554447")

  expect(isCardNumberValid).toBeFalsy()
  expect(validationMessage).toEqual(MESSAGES.INVALID)
})

test('validates provided text correctly', () => {
  const [isCardNumberValid, validationMessage] = checkIsCartNumberValid("abc")

  expect(isCardNumberValid).toBeFalsy()
  expect(validationMessage).toEqual(MESSAGES.NOT_NUMBER)
})
