import { Injectable } from '@nestjs/common'
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JWTGeneratorAdapter {
  async execute(params: any, secret: string): Promise<string> {
    return await jwt.sign(params, secret, { expiresIn: '1d'})
  }
}
