import { Injectable } from "@nestjs/common";
import { GetURLInput } from "./get-url-input";
import { GetURLValidate } from "./get-url-validate";
import { URLRepository } from "@/modules/@shared/services/repositories/url/url-repository";

@Injectable()
export class GetURLUseCase {
  constructor(
    private readonly getURLValidate: GetURLValidate,
    private readonly urlRepository: URLRepository,
  ) { }

  async execute(input: GetURLInput) {
    this.getURLValidate.validate(input)
    const urlData = await this.urlRepository.getByUserId(input.userId)
    return urlData
  }
}
