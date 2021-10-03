import faker from 'faker'
import { InvalidLengthError } from '@/validation/errors/min-length-validation-error'
import { MinLengthValidation } from './min-length-validation'

interface SutTypes {
  sut: MinLengthValidation
  errorMessage: InvalidLengthError
}

const makeSut = (minLength: number): SutTypes => {
  const field = faker.database.column()
  const sut = new MinLengthValidation(field, minLength)
  const errorMessage = new InvalidLengthError(field, minLength)
  return {
    sut,
    errorMessage
  }
}

describe('MinLengthValidation', () => {
  test('should return error if value invalid', () => {
    const { sut, errorMessage } = makeSut(5)
    const error = sut.validate('')
    expect(error).toEqual(errorMessage)
  })
  test('should return error if value length is less than 5', () => {
    const { sut, errorMessage } = makeSut(4)
    const error = sut.validate('123')
    expect(error).toEqual(errorMessage)
  })
})
