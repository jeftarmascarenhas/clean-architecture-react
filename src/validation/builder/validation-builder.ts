import { FieldValidation } from '../protocols/field-validation'
import {
  RequiredFieldValidation,
  EmailValidation,
  MinLengthValidation
} from '@/validation/validators'

export class ValidationBuilder {
  private constructor(
    private readonly fieldName: string,
    private readonly validation: FieldValidation[]
  ) {}

  static field(fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, [])
  }

  required(): ValidationBuilder {
    this.validation.push(new RequiredFieldValidation(this.fieldName))
    return this
  }

  email(): ValidationBuilder {
    this.validation.push(new EmailValidation(this.fieldName))
    return this
  }

  min(minLength: number): ValidationBuilder {
    this.validation.push(new MinLengthValidation(this.fieldName, minLength))
    return this
  }

  build(): FieldValidation[] {
    return this.validation
  }
}
