import { Module } from '@nestjs/common';
import { PrismaConfig } from './config/prisma.config';
import { HashComparerAdapter, HashGeneratorAdapter, JWTGeneratorAdapter } from './modules/@shared/adapters/criptography';
import { JWTDecryptAdapter } from './modules/@shared/adapters/criptography/jwt-decrypt-adapter';
import { RandomStringGeneratorAdapter } from './modules/@shared/adapters/criptography/random-string-generator-adapter';
import { EmailValidatorAdapter } from './modules/@shared/adapters/email/validator/email-validator-adapter';
import { UserRepository } from './modules/@shared/services/repositories/user/user-repository';
import { EnvironmentUtils } from './modules/@shared/utils/environment/environment-utils';
import { BearerTokenUtils } from './modules/@shared/utils/http/request-utils';
import { ComprarFieldsValidator, EmailValidator, FieldTypeValidator, RequiredFieldValidator } from './modules/@shared/validators';
import { URLController } from './modules/url/entrypoints/controllers/url-controller';
import { MapListResponseHelper } from './modules/url/helpers/map-response/map-list-response-helper';
import { MapResponseHelper } from './modules/url/helpers/map-response/map-response-helper';
import { AddURLUseCase } from './modules/url/use-cases/add-url/add-url-usecase';
import { AddURLValidate } from './modules/url/use-cases/add-url/add-url-validate';
import { GetUniqueRandomStringRule } from './modules/url/use-cases/add-url/rules/get-unique-random-string/get-unique-random-string-rule';
import { GetURLUseCase } from './modules/url/use-cases/get-url/get-url-usecase';
import { GetURLValidate } from './modules/url/use-cases/get-url/get-url-validate';
import { UserController } from './modules/user/entrypoints/controllers/user-controller';
import { SignInUseCase } from './modules/user/use-cases/signIn/signin-usecase';
import { SignInValidate } from './modules/user/use-cases/signIn/signin-validate';
import { SignUpUseCase } from './modules/user/use-cases/signUp/signup-usecase';
import { SignUpValidate } from './modules/user/use-cases/signUp/signup-validate';
import { DeleteURLUseCase } from './modules/url/use-cases/delete-url/delete-url-usecase';
import { DeleteURLValidate } from './modules/url/use-cases/delete-url/delete-url-validate';
import { UpdateURLUseCase } from './modules/url/use-cases/update-url/update-url-usecase';
import { UpdateURLValidate } from './modules/url/use-cases/update-url/update-url-validate';
import { CountClicksUseCase } from './modules/origin/usecase/count-clicks/count-clicks-usecase';
import { CountClicksValidate } from './modules/origin/usecase/count-clicks/count-clicks-validate';
import { URLRepository } from './modules/@shared/services/repositories/url/url-repository';
import { OriginController } from './modules/origin/entrypoints/controllers/origin-controller';

@Module({
  imports: [],
  controllers: [
    UserController,
    URLController,
    OriginController
  ],
  providers: [
    PrismaConfig,
    SignUpUseCase,
    SignUpValidate,
    SignInUseCase,
    SignInValidate,
    AddURLUseCase,
    AddURLValidate,
    GetURLUseCase,
    GetURLValidate,
    DeleteURLUseCase,
    DeleteURLValidate,
    UpdateURLUseCase,
    UpdateURLValidate,
    CountClicksUseCase,
    CountClicksValidate,
    GetUniqueRandomStringRule,
    MapListResponseHelper,
    MapResponseHelper,
    UserRepository,
    URLRepository,
    EmailValidatorAdapter,
    HashGeneratorAdapter,
    HashComparerAdapter,
    JWTGeneratorAdapter,
    JWTDecryptAdapter,
    RandomStringGeneratorAdapter,
    RequiredFieldValidator,
    EmailValidator,
    FieldTypeValidator,
    ComprarFieldsValidator,
    EnvironmentUtils,
    BearerTokenUtils,
  ],
})
export class AppModule {}
