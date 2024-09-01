import { Body, Controller, Post } from '@nestjs/common';
import { SignUpOutput } from '../../use-cases/signUp/signup-output';
import { SignUpUseCase } from '../../use-cases/signUp/signup-usecase';
import { SignInUseCase } from '../../use-cases/signIn/signin-usecase';
import { SignInOutput } from '../../use-cases/signIn/signin-output';

@Controller('/user')
export class UserController {
  constructor(
    private readonly signUpUseCase: SignUpUseCase,
    private readonly signInUseCase: SignInUseCase
  ) { }

  @Post('/signup')
  async signUp(
    @Body('name')
    name: string,
    @Body('email')
    email: string,
    @Body('password')
    password: string,
    @Body('passwordConfirmation')
    passwordConfirmation: string,
  ): Promise<SignUpOutput> {
    return await this.signUpUseCase.execute({
      name,
      email,
      password,
      passwordConfirmation
    });
  }

  @Post('/signin')
  async signIn(
    @Body('email')
    email: string,
    @Body('password')
    password: string,
  ): Promise<SignInOutput> {
    return await this.signInUseCase.execute({email, password});
  }
}
