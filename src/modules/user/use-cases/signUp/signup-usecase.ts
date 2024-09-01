import { EmailInUserError } from "@/modules/@shared/errors";
import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { UserPrismaRepository } from "../../services/repositories/prisma/user-prisma-repository";
import { SignUpInput } from "./signup-input";
import { SignUpValidate } from "./signup-validate";
import { SignUpOutput } from "./signup-outpu";
import { HashGeneratorAdapter } from "@/modules/@shared/adapters/criptography/hash-generator-adapter";
import { EnvironmentUtils } from "@/modules/@shared/utils/environment/environment-utils";

@Injectable()
export class SignUpUseCase {
  constructor(
    private readonly userPrismaRepository: UserPrismaRepository,
    private readonly validation: SignUpValidate,
    private readonly hasher: HashGeneratorAdapter,
    private readonly environmentUtils: EnvironmentUtils,
  ) { }

  async execute(user: SignUpInput): Promise<SignUpOutput> {
    this.validation.validate(user)
    const {email, name, password} = user
    const account = await this.userPrismaRepository.getByEmail(email)
    if (account) {
      throw new EmailInUserError()
    }
    const salt = this.environmentUtils.get('HASH_SALT')
    const hashedPassword = await this.hasher.execute(password, Number(salt))
    const userResponse =  await this.userPrismaRepository.createUser({
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
