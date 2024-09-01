import { Injectable } from "@nestjs/common"
import { ServerError } from "../../errors/server-error"

@Injectable()
export class EnvironmentUtils {
  get(fieldNameEnv: string) {
    const env = process.env[fieldNameEnv]
    if (env !== null && env !== undefined) {
      return env
    }
    throw new ServerError(`Uninstantiated variable environment "${fieldNameEnv}"`)
  }
}
