import { Injectable } from "@nestjs/common";
import { InvalidParamError } from "../errors/invalid-param-error";

@Injectable()
export class ComprarFieldsValidator {
  validator<P>(object: P, field: string, fieldCompare: string) {
    if (object[field] !== object[fieldCompare]) {
      throw new InvalidParamError(fieldCompare)
    }
  }
}
