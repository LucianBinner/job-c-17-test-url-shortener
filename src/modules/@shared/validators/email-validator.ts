import { Injectable } from "@nestjs/common";
import { MissingParamError } from "../errors/missing-param-error";
import { EmailValidatorAdapter } from "../adapters/email/validator/email-validator-adapter";

@Injectable()
export class EmailValidator {
  constructor(
    private readonly emailValidatorAdapter: EmailValidatorAdapter,
  ) {}
  validator(email: string) {
    const emailIsValid = this.emailValidatorAdapter.isValid(email)
    if (!emailIsValid) {
      throw new MissingParamError('email')
    }
  }
}
