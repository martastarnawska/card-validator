import CardNumberInput from "./CardNumberInput"
import CardholderNameInput from "./CardholderNameInput"
import ExpirationDate from "./ExpirationDate"

const CreditCardForm = () => {

  return (
    <form className="Form">
      <CardholderNameInput />
      <CardNumberInput />
      <ExpirationDate />
    </form>
  )
}

export default CreditCardForm
