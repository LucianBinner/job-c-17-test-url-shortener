import { Injectable } from '@nestjs/common'
import * as jwt from 'jsonwebtoken';

@Injectable()
export class TokenGeneratorAdapter {
  async execute(params: any, secret: string): Promise<string> {
    const accessToken =  await jwt.sign(params, secret, { expiresIn: '1d'})
    return accessToken
  }
}
