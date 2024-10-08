import { UnauthorizedException } from "@nestjs/common";

export class UnauthorizedError extends UnauthorizedException {
  constructor() {
    super(`Unauthorized`)
    this.name = 'UnauthorizedError'
  }
}
