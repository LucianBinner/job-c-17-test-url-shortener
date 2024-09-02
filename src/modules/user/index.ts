import { UserController } from './entrypoints/controllers/user-controller';
import { SignInUseCase } from './use-cases/signIn/signin-usecase';
import { SignInValidate } from './use-cases/signIn/signin-validate';
import { SignUpUseCase } from './use-cases/signUp/signup-usecase';
import { SignUpValidate } from './use-cases/signUp/signup-validate';

export const controllersUser = [
  UserController,
]

export const providersUser = [
  SignUpUseCase,
  SignUpValidate,
  SignInUseCase,
  SignInValidate,
]

