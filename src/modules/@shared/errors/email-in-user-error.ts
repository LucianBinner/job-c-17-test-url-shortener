import { UnprocessableEntityException } from "@nestjs/common";

export class EmailInUserError extends UnprocessableEntityException {
  constructor() {
    super(`The received email is already in use`)
    this.name = 'EmailInUseError'
  }
}
