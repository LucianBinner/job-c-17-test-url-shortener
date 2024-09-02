import {
  FieldTypeValidator,
  RequiredFieldValidator
} from "@/modules/@shared/validators";
import { Injectable } from "@nestjs/common";
import { CountClicksInput } from "./count-clicks-input";

@Injectable()
export class CountClicksValidate {
  constructor(
    private readonly fieldTypeValidator: FieldTypeValidator,
    private readonly requiredFieldValidator: RequiredFieldValidator,
  ) { }

  validate(input: CountClicksInput) {
    this.requiredFieldValidator.validator<CountClicksInput>(input, ['urlToken'])
    this.fieldTypeValidator.validator(input, [
      ['urlToken', 'string'],
    ])
  }
}
