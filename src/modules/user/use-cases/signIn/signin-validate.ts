import {
  EmailValidator,
  FieldTypeValidator,
  RequiredFieldValidator
} from "@/modules/@shared/validators";
import { Injectable } from "@nestjs/common";
import { SignInInput } from "./signin-input";

@Injectable()
export class SignInValidate {
  constructor(
    private readonly emailValidator: EmailValidator,
    private readonly fieldTypeValidator: FieldTypeValidator,
    private readonly requiredFieldValidator: RequiredFieldValidator,
  ) {}
  validate(input: SignInInput) {
    this.requiredFieldValidator.validator<SignInInput>(input, ['email', 'password'])
    this.fieldTypeValidator.validator(input, [['email', 'string'], ['password', 'string']])
    this.emailValidator.validator(input.email)
  }
}
