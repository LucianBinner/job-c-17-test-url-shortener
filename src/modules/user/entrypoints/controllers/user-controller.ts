import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { SignInUseCase } from '../../use-cases/signIn/signin-usecase';
import { SignUpUseCase } from '../../use-cases/signUp/signup-usecase';
import { SignInRequest } from '../request/signin-request';
import { SignUpRequest } from '../request/signup-request';
import { SignUpResponse } from '../response/signup-response';
import { SignInResponse } from '../response/signin-response';

@Controller('/user')
export class UserController {
  constructor(
    private readonly signUpUseCase: SignUpUseCase,
    private readonly signInUseCase: SignInUseCase
  ) { }

  @Post('/signup')
  @ApiOkResponse({ type: SignUpResponse, description: 'Register User!' })
  async signUp(
    @Body()
    body: SignUpRequest
  ): Promise<SignUpResponse> {
    const { email, name, password, passwordConfirmation} = body
    return await this.signUpUseCase.execute({
      name,
      email,
      password,
      passwordConfirmation
    });
  }

  @Post('/signin')
  @ApiOkResponse({ type: SignInResponse, description: 'Logged user' })
  async signIn(
    @Body()
    body: SignInRequest
  ): Promise<SignInResponse> {
    const { email, password} = body
    return await this.signInUseCase.execute({email, password});
  }
}
