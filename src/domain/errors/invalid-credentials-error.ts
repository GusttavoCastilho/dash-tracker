export class InvalidCredentialsError extends Error {
  constructor() {
    super("Invalids Credentials");
    this.name = "InvalidCredentialsError";
  }
}
