import { InvalidLengthError } from '@/validation/errors/min-length-validation-error'
import { FieldValidation } from '@/validation/protocols/field-validation'

export class MinLengthValidation implements FieldValidation {
  constructor(readonly field: string, private readonly minLenght: number) {}
  validate(value: string): Error {
    return value.length >= this.minLenght
      ? null
      : new InvalidLengthError(this.field, this.minLenght)
  }
}
