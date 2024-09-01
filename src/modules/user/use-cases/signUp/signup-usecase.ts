import { EmailInUserError } from "@/modules/@shared/errors";
import { Injectable } from "@nestjs/common";
import { UserRepository } from "../../services/repositories/user/user-repository";
import { SignUpInput } from "./signup-input";
import { SignUpValidate } from "./signup-validate";
import { SignUpOutput } from "./signup-output";
import { HashGeneratorAdapter } from "@/modules/@shared/adapters/criptography/hash-generator-adapter";
import { EnvironmentUtils } from "@/modules/@shared/utils/environment/environment-utils";

@Injectable()
export class SignUpUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly validation: SignUpValidate,
    private readonly hasher: HashGeneratorAdapter,
    private readonly environmentUtils: EnvironmentUtils,
  ) { }

  async execute(input: SignUpInput): Promise<SignUpOutput> {
    this.validation.validate(input)
    const {email, name, password} = input
    const account = await this.userRepository.getByEmail(email)
    if (account) {
      throw new EmailInUserError()
    }
    const salt = this.environmentUtils.get('HASH_SALT')
    const hashedPassword = await this.hasher.execute(password, Number(salt))
    const userResponse =  await this.userRepository.createUser({
      email,
      name,
      password: hashedPassword
    })
    return {
      id: userResponse.id,
      email,
      name
    }
  }
}
