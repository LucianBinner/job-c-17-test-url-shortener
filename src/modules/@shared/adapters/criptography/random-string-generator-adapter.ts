import { Injectable } from '@nestjs/common';
import * as random from 'randomatic';

@Injectable()
export class RandomStringGeneratorAdapter {
  generator(length: number): string {
    return random('Aa0', length)
  }
}
