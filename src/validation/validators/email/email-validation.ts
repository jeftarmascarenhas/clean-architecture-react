import { InvalideFieldError } from '@/validation/errors/email-validation-error'
import { FieldValidation } from '@/validation/protocols/field-validation'

export class EmailVadation implements FieldValidation {
  constructor(readonly field: string) {}
  validate(value: string): Error {
    return new InvalideFieldError(this.field)
  }
}
