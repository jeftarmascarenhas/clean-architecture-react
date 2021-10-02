import { InvalideFieldError } from '@/validation/errors/email-validation-error'
import { EmailVadation } from './email-validation'

describe('EmailValidation', () => {
  test('should return error if email is invalid', () => {
    const sut = new EmailVadation('email')
    const error = sut.validate('')
    expect(error).toEqual(new InvalideFieldError('email'))
  })
})
