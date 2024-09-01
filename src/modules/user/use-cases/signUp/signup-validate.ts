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
  validate(user: SignUpInput) {
    this.requiredFieldValidator.validator<SignUpInput>(user, ['name', 'email', 'password', 'passwordConfirmation'])
    this.fieldTypeValidator.validator(user, [['name', 'string'], ['email', 'string'], ['password', 'string'], ['passwordConfirmation', 'string']])
    this.comprarFieldsValidator.validator(user, 'password', 'passwordConfirmation')
    this.emailValidator.validator(user.email)
  }
}
