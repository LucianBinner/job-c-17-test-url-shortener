import { Injectable } from "@nestjs/common";
import { AddURLInput } from "./add-url-input";
import { URLRepository } from "../../services/repositories/url/url-repository";
import { AddURLValidate } from "./add-url-validate";
import { UserRepository } from "@/modules/@shared/services/repositories/user/user-repository";
import { ConflictDataError } from "@/modules/@shared/errors/conflict-data-error";
import { GetUniqueRandomStringRule } from "./rules/get-unique-random-string/get-unique-random-string-rule";

@Injectable()
export class AddURLUseCase {
  constructor(
    private readonly urlRepository: URLRepository,
    private readonly addURLValidate: AddURLValidate,
    private readonly userRepository: UserRepository,
    private readonly getUniqueRandomStringRule: GetUniqueRandomStringRule,
  ) { }

  async execute(input: AddURLInput) {
    this.addURLValidate.validate(input)
    const { urlOrigin, userId } = input
    let userData = null
    let urlData = null
    if (userId) {
      userData = await this.userRepository.getById(userId)
      if (userData) {
        urlData = await this.urlRepository.getByOriginAndUserId(urlOrigin, userId)
      }
    } else {
      urlData = await this.urlRepository.getByOrigin(urlOrigin)
    }
    if (urlData) throw new ConflictDataError('URL Origin.')
    const urlToken = await this.getUniqueRandomStringRule.execute()
    return await this.urlRepository.addUrl({
      origin: urlOrigin,
      urlToken,
      user: userData
    })
  }
}
