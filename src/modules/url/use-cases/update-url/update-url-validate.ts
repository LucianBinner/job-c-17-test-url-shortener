import {
  FieldTypeValidator,
  RequiredFieldValidator
} from "@/modules/@shared/validators";
import { Injectable } from "@nestjs/common";
import { UpdateURLInput } from "./update-url-input";

@Injectable()
export class UpdateURLValidate {
  constructor(
    private readonly fieldTypeValidator: FieldTypeValidator,
    private readonly requiredFieldValidator: RequiredFieldValidator,
  ) { }

  validate(input: UpdateURLInput) {
    this.requiredFieldValidator.validator<UpdateURLInput>(input, ['userId', 'urlOrigin', 'urlId'])
    this.fieldTypeValidator.validator(input, [
      ['userId', 'number'],
      ['urlOrigin', 'string'],
      ['urlId', 'number'],
    ])
  }
}
