import faker from 'faker'
import { InvalideFieldError } from '@/validation/errors/email-validation-error'
import { EmailValidation } from './email-validation'

const makeSut = (field: string): EmailValidation => new EmailValidation(field)

describe('EmailValidation', () => {
  test('should return error if email is invalid', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const error = sut.validate(faker.random.word())
    expect(error).toEqual(new InvalideFieldError(field))
  })
  test('should return falsy if email is invalid', () => {
    const sut = makeSut(faker.database.column())
    const error = sut.validate(faker.internet.email())
    expect(error).toBeFalsy()
  })
  test('should return falsy if email is empty', () => {
    const sut = makeSut(faker.database.column())
    const error = sut.validate('')
    expect(error).toBeFalsy()
  })
})
