import {
  FieldTypeValidator,
  RequiredFieldValidator
} from "@/modules/@shared/validators";
import { Injectable } from "@nestjs/common";
import { DeleteURLInput } from "./delete-url-input";

@Injectable()
export class DeleteURLValidate {
  constructor(
    private readonly fieldTypeValidator: FieldTypeValidator,
    private readonly requiredFieldValidator: RequiredFieldValidator,
  ) { }

  validate(input: DeleteURLInput) {
    this.requiredFieldValidator.validator<DeleteURLInput>(input, ['userId', 'urlId'])
    this.fieldTypeValidator.validator(input, [['userId', 'number'], ['urlId', 'number']])
  }
}
