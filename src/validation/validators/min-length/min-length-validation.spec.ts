// import faker from 'faker'
import { InvalidLengthError } from '@/validation/errors/min-length-validation-error'
import { MinLengthValidation } from './min-length-validation'

const makeSut = (field = 'password', minLength = 0): MinLengthValidation =>
  new MinLengthValidation(field, minLength)

describe('MinLengthValidation', () => {
  test('should return error if value invalid', () => {
    const sut = makeSut('passowrd', 5)
    const error = sut.validate('')
    const errorMessage = new InvalidLengthError('passowrd', 5)
    expect(error).toEqual(errorMessage)
  })
})
