import { Injectable } from '@nestjs/common'
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JWTDecryptAdapter {
  async execute<P>(token: string, secret: string): Promise<P | null> {
    const value: any = await jwt.verify(token, secret)
    return value
  }
}
