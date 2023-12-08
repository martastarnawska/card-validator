import checkIsValid from './card-validator';

test('validates card number correctly', () => {
  const isCardNumberValid = checkIsValid("5555555555554444")

  expect(isCardNumberValid).toBeTruthy()
})

test('validates proper card number correctly', () => {
  const isCardNumberValid = checkIsValid("5555555555554447")

  expect(isCardNumberValid).toBeFalsy()
})
