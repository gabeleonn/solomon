export class MissingParamError extends Error {
  constructor(paramName: string) {
    super(`O parametro "${paramName}" é necessário.`);
    this.name = 'MissingParamError';
  }
}
