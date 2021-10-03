import faker from 'faker'
import { InvalideFieldError } from '@/validation/errors/email-validation-error'
import { EmailVadation } from './email-validation'

const makeSut = (field: string): EmailVadation => new EmailVadation(field)

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
})
