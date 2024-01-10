import CardNumberInput from "./CardNumberInput"
import CardholderNameInput from "./CardholderNameInput"

const CreditCardForm = () => {

  return (
    <form className="Form">
      <CardholderNameInput />
      <CardNumberInput />
    </form>
  )
}

export default CreditCardForm
