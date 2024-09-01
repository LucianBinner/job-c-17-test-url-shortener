import { Injectable } from "@nestjs/common";
import { RequestInputUtils } from "./request-input-utils";

@Injectable()
export class BearerTokenUtils {
  getDataBearerToken(input: RequestInputUtils): string | null {
    const { authorization } = input.headers
    if (authorization) {
      const token = authorization.replace('Bearer ', '')
      return token
    }
  }
}
