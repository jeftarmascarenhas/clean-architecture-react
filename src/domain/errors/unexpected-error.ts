export class UnexpectedError extends Error {
  constructor () {
    super('Error inesperado, tente novamente mais tarde.')
    this.name = 'UnexpectedError'
  }
}
