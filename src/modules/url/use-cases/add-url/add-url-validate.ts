import {
  FieldTypeValidator,
  RequiredFieldValidator
} from "@/modules/@shared/validators";
import { Injectable } from "@nestjs/common";
import { AddURLInput } from "./add-url-input";

@Injectable()
export class AddURLValidate {
  constructor(
    private readonly fieldTypeValidator: FieldTypeValidator,
    private readonly requiredFieldValidator: RequiredFieldValidator,
  ) { }

  validate(input: AddURLInput) {
    this.requiredFieldValidator.validator<AddURLInput>(input, ['urlOrigin'])
    this.fieldTypeValidator.validator(input, [['urlOrigin', 'string'], ['userId', 'number']])
  }
}
