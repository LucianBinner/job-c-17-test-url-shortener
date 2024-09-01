import { Body, Controller, Post } from '@nestjs/common';
import { SignUpOutput } from '../../use-cases/signUp/signup-outpu';
import { SignUpUseCase } from '../../use-cases/signUp/signup-usecase';

@Controller('/user')
export class UserController {
  constructor(
    private readonly signUpUseCase: SignUpUseCase
  ) { }

  @Post('/')
  async signup(
    @Body('name')
    name: string,
    @Body('email')
    email: string,
    @Body('password')
    password: string,
    @Body('passwordConfirmation')
    passwordConfirmation: string,
  ): Promise<SignUpOutput> {
    const user = {
      name,
      email,
      password,
      passwordConfirmation
    }
    return await this.signUpUseCase.execute(user);
  }
}
