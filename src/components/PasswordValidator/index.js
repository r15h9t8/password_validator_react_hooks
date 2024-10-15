// Write your code here
import {useState} from 'react'

import {
  CompleteValidatorContainer,
  InsideValidateContainer,
  ValidateHeading,
  ValidateParagraph,
  InputContainer,
  PasswordErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [userInput, newInput] = useState('')
  const isError = userInput.length < 8

  const passwordInputChanged = event => {
    newInput(event.target.value)
  }

  return (
    <CompleteValidatorContainer>
      <InsideValidateContainer>
        <ValidateHeading>Password Validator</ValidateHeading>
        <ValidateParagraph>
          Check how strong and secure is your password
        </ValidateParagraph>
        <InputContainer
          onChange={passwordInputChanged}
          type="password"
          value={userInput}
        />
        {isError && (
          <PasswordErrorMsg>
            Your password must be at least 8 characters
          </PasswordErrorMsg>
        )}
      </InsideValidateContainer>
    </CompleteValidatorContainer>
  )
}

export default PasswordValidator
