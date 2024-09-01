import { Injectable } from "@nestjs/common";
import { TypeParamError } from "../errors/type-param-error";

@Injectable()
export class FieldTypeValidator {

  validator<P>(object: P, fieldType: [field: string, type: string][]) {
    for (const fieldObject in object) {
      const currentFieldType = fieldType.find(field => field[0] === fieldObject)
      if (
        currentFieldType !== null &&
        currentFieldType !== undefined &&
        object[fieldObject] &&
        typeof object[fieldObject] !== currentFieldType[1]
      ) {
        throw new TypeParamError(fieldObject)
      }
    }
  }
}
