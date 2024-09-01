import { Injectable } from '@nestjs/common'
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashComparerAdapter {
  async execute(value: string, hash: string): Promise<boolean> {
    const isValid = await bcrypt.compare(value, hash)
    return isValid
  }
}
