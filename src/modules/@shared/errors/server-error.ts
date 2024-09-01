import { UnprocessableEntityException } from "@nestjs/common";

export class ServerError extends UnprocessableEntityException {
  constructor(message: string) {
    super(`Server error: ${message}`)
    this.name = 'ServerError'
  }
}
