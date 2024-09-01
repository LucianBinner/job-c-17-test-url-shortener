import { Injectable } from "@nestjs/common";
import { GetURLInput } from "./get-url-input";
import { GetURLValidate } from "./get-url-validate";
import { URLRepository } from "../../services/repositories/url/url-repository";

@Injectable()
export class GetURLUseCase {
  constructor(
    private readonly getURLValidate: GetURLValidate,
    private readonly urlRepository: URLRepository,
  ) { }

  async execute(input: GetURLInput) {
    this.getURLValidate.validate(input)
    const userData = await this.urlRepository.getByUserId(input.userId)
    return userData
  }
}
