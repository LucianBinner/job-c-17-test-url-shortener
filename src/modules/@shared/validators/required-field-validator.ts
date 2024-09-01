import { Injectable } from "@nestjs/common";
import { MissingParamError } from "../errors/missing-param-error";

@Injectable()
export class RequiredFieldValidator {
  validator<P>(object: P, requiredFields: string[]) {
    for (const field of requiredFields) {
      if (object[field] === null || object[field] === undefined) {
        throw new MissingParamError(field)
      }
    }
  }
}
