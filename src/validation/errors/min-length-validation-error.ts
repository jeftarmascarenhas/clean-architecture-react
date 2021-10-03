export class InvalidLengthError extends Error {
  constructor(readonly fieldLabel: string, readonly length: number) {
    super(`O campo ${fieldLabel} deve ter nó mínimo ${length}`)
  }
}
