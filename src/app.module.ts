import { Module } from '@nestjs/common';
import { UserPrismaRepository } from './modules/user/services/repositories/prisma/user-prisma-repository';
import { PrismaConfig } from './config/prisma.config';
import { UserController } from './modules/user/entrypoints/controllers/user-controller';
import { SignUpUseCase } from './modules/user/use-cases/signUp/signup-usecase';
import { SignUpValidate } from './modules/user/use-cases/signUp/signup-validate';
import { HashGeneratorAdapter } from './modules/@shared/adapters/criptography/hash-generator-adapter';
import { EmailValidatorAdapter } from './modules/@shared/adapters/email/validator/email-validator-adapter';
import { ComprarFieldsValidator, EmailValidator, FieldTypeValidator, RequiredFieldValidator } from './modules/@shared/validators';
import { EnvironmentUtils } from './modules/@shared/utils/environment/environment-utils';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    PrismaConfig,
    SignUpUseCase,
    UserPrismaRepository,
    SignUpValidate,
    EmailValidatorAdapter,
    HashGeneratorAdapter,
    RequiredFieldValidator,
    EmailValidator,
    FieldTypeValidator,
    ComprarFieldsValidator,
    EnvironmentUtils,
  ],
})
export class AppModule {}
