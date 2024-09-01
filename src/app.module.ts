import { Module } from '@nestjs/common';
import { UserRepository } from './modules/user/services/repositories/user/user-repository';
import { PrismaConfig } from './config/prisma.config';
import { UserController } from './modules/user/entrypoints/controllers/user-controller';
import { SignUpUseCase } from './modules/user/use-cases/signUp/signup-usecase';
import { SignUpValidate } from './modules/user/use-cases/signUp/signup-validate';
import { EmailValidatorAdapter } from './modules/@shared/adapters/email/validator/email-validator-adapter';
import { ComprarFieldsValidator, EmailValidator, FieldTypeValidator, RequiredFieldValidator } from './modules/@shared/validators';
import { EnvironmentUtils } from './modules/@shared/utils/environment/environment-utils';
import { SignInUseCase } from './modules/user/use-cases/signIn/signin-usecase';
import { SignInValidate } from './modules/user/use-cases/signIn/signin-validate';
import { HashComparerAdapter, HashGeneratorAdapter, TokenGeneratorAdapter } from './modules/@shared/adapters/criptography';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    PrismaConfig,
    SignUpUseCase,
    SignUpValidate,
    SignInUseCase,
    SignInValidate,
    UserRepository,
    EmailValidatorAdapter,
    HashGeneratorAdapter,
    HashComparerAdapter,
    TokenGeneratorAdapter,
    RequiredFieldValidator,
    EmailValidator,
    FieldTypeValidator,
    ComprarFieldsValidator,
    EnvironmentUtils,
  ],
})
export class AppModule {}
