import {
  ComprarFieldsValidator,
  EmailValidator,
  FieldTypeValidator,
  RequiredFieldValidator
} from "@/modules/@shared/validators";
import { Injectable } from "@nestjs/common";
import { SignUpInput } from "./signup-input";

@Injectable()
export class SignUpValidate {
  constructor(
    private readonly emailValidator: EmailValidator,
    private readonly fieldTypeValidator: FieldTypeValidator,
    private readonly requiredFieldValidator: RequiredFieldValidator,
    private readonly comprarFieldsValidator: ComprarFieldsValidator,
  ) {}
  validate(input: SignUpInput) {
    this.requiredFieldValidator.validator<SignUpInput>(input, ['name', 'email', 'password', 'passwordConfirmation'])
    this.fieldTypeValidator.validator(input, [['name', 'string'], ['email', 'string'], ['password', 'string'], ['passwordConfirmation', 'string']])
    this.comprarFieldsValidator.validator(input, 'password', 'passwordConfirmation')
    this.emailValidator.validator(input.email)
  }
}
