import { BadRequestException } from "@nestjs/common";

export class InvalidParamError extends BadRequestException {
  constructor(paramName: String) {
    super(`Invalid param: ${paramName}`)
    this.name = 'InvalidParamError'
  }
}
