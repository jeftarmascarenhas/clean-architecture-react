export class InvalideFieldError extends Error {
  constructor(readonly fieldLabel: string) {
    super(`O campo ${fieldLabel} inválido`)
  }
}
