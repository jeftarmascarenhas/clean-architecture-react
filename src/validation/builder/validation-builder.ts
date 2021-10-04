import { FieldValidation } from '../protocols/field-validation'
import { RequiredFieldValidation } from '../validators/required-field/required-field-validation'

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

  build(): FieldValidation[] {
    return this.validation
  }
}
