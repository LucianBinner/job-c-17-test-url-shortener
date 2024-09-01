import { Injectable } from '@nestjs/common'
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashGeneratorAdapter {
  async execute(value: string, salt: number): Promise<string> {
    const hash = await bcrypt.hash(value, salt)
    return hash
  }
}
