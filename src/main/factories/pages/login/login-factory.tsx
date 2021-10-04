import React from 'react'
import { Login } from '@/presentation/pages'
import { RemoteAuthentication } from '@/data/usecases/authentication/remote-authentication'
import { ValidationComposite } from '@/validation/validators/validation-composite/validation-composite'
import { RequiredFieldValidation } from '@/validation/validators/required-field/required-field-validation'
import { EmailValidation } from '@/validation/validators/email/email-validation'
import { MinLengthValidation } from '@/validation/validators/min-length/min-length-validation'
import { makeAxiosHttpClient } from '../../http/axios-http-client-factory'

export const makeLogin: React.FC = () => {
  const url = 'https://fordevs.herokuapp.com/api/login'
  const remoteAuthentication = new RemoteAuthentication(
    url,
    makeAxiosHttpClient()
  )
  const validationComposite = new ValidationComposite([
    new RequiredFieldValidation('email'),
    new EmailValidation('email'),
    new MinLengthValidation('password', 5),
    new RequiredFieldValidation('password')
  ])
  return (
    <Login
      authentication={remoteAuthentication}
      validation={validationComposite}
    />
  )
}
