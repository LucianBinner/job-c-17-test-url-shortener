import { HashComparerAdapter, HashGeneratorAdapter, JWTGeneratorAdapter } from './adapters/criptography';
import { JWTDecryptAdapter } from './adapters/criptography/jwt-decrypt-adapter';
import { RandomStringGeneratorAdapter } from './adapters/criptography/random-string-generator-adapter';
import { EmailValidatorAdapter } from './adapters/email/validator/email-validator-adapter';
import { UserRepository } from './services/repositories/user/user-repository';
import { EnvironmentUtils } from './utils/environment/environment-utils';
import { BearerTokenUtils } from './utils/http/request-utils';
import { ComprarFieldsValidator, EmailValidator, FieldTypeValidator, RequiredFieldValidator } from './validators';
import { URLRepository } from './services/repositories/url/url-repository';

export const providersShared = [
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
]
