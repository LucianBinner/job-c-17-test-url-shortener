import { InvalidParamError } from "@/modules/@shared/errors";
import { Injectable } from "@nestjs/common";
import { UserRepository } from "@/modules/@shared/services/repositories/user/user-repository";
import { SignInInput } from "./signin-input";
import { SignInOutput } from "./signin-output";
import { SignInValidate } from "./signin-validate";
import { HashComparerAdapter, JWTGeneratorAdapter } from "@/modules/@shared/adapters/criptography";
import { UnauthorizedError } from "@/modules/@shared/errors/unauthorized-error";
import { EnvironmentUtils } from "@/modules/@shared/utils/environment/environment-utils";

@Injectable()
export class SignInUseCase {
  constructor(
    private readonly validation: SignInValidate,
    private readonly userRepository: UserRepository,
    private readonly hashComparer: HashComparerAdapter,
    private readonly tokenGeneratorAdapter: JWTGeneratorAdapter,
    private readonly environmentUtils: EnvironmentUtils,
  ) { }

  async execute(input: SignInInput): Promise<SignInOutput> {
    this.validation.validate(input)
    const { email, password } = input
    const userResponse = await this.userRepository.getByEmail(email)
    if (!userResponse) throw new InvalidParamError('email')
    const { id } = userResponse
    const isValid = await this.hashComparer.execute(password, userResponse.password)
    if (!isValid) throw new UnauthorizedError()
    const secret = this.environmentUtils.get('JWT_SECRET')
    return {
      token: await this.tokenGeneratorAdapter.execute({ id }, secret)
    }
  }
}
