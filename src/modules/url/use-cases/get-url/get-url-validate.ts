import {
  FieldTypeValidator,
  RequiredFieldValidator
} from "@/modules/@shared/validators";
import { Injectable } from "@nestjs/common";
import { GetURLInput } from "./get-url-input";

@Injectable()
export class GetURLValidate {
  constructor(
    private readonly fieldTypeValidator: FieldTypeValidator,
    private readonly requiredFieldValidator: RequiredFieldValidator,
  ) { }

  validate(input: GetURLInput) {
    this.requiredFieldValidator.validator<GetURLInput>(input, ['userId'])
    this.fieldTypeValidator.validator(input, [['userId', 'number']])
  }
}
