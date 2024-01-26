import CVVCode from "./CVVCodeInput"
import CardNumberInput from "./CardNumberInput"
import CardholderNameInput from "./CardholderNameInput"
import ExpirationDate from "./ExpirationDate"

const CreditCardForm = () => {

  return (
    <form className="Form">
      <CardholderNameInput />
      <CardNumberInput />
      <ExpirationDate />
      <CVVCode />
    </form>
  )
}

export default CreditCardForm
