export class InvalidCredentialsError extends Error {
  constructor () {
    super('Crendencias inválidas')
    this.name = 'InvalidCredentialsError'
  }
}
