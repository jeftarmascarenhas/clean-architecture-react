import { ValidationSpy } from '@/validation/test/mock-field-validation'
import { ValidationComposite } from './validation-composite'

describe('ValidationComposite', () => {
  test('should return error if any validation fails', () => {
    const fieldValidationSpy = new ValidationSpy('any_field')
    fieldValidationSpy.error = new Error('first_erro_message')
    const fieldValidationSpy2 = new ValidationSpy('any_field')
    fieldValidationSpy2.error = new Error('second_erro_message')
    const sut = new ValidationComposite([
      fieldValidationSpy,
      fieldValidationSpy2
    ])
    const error = sut.validate('any_field', 'any_value')
    expect(error).toBe('first_erro_message')
  })
})
