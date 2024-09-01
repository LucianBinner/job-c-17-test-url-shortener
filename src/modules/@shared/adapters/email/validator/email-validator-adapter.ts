import { Injectable } from '@nestjs/common'
import validator from 'validator'

@Injectable()
export class EmailValidatorAdapter {
  isValid(email: string): boolean {
    return validator.isEmail(email)
  }
}
