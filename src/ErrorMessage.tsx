const ErrorMessage = ({
  isValid,
  validationMessage,
}:{
  isValid: boolean,
  validationMessage: string,
}) => {
  return (
      <p className={isValid ? "Input__message" : "Input__message Input__message--invalid"}>
        {validationMessage}
      </p>
  )
}

export default ErrorMessage
