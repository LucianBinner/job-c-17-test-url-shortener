import { Injectable } from "@nestjs/common";
import { CountClicksInput } from "./count-clicks-input";
import { CountClicksValidate } from "./count-clicks-validate";
import { TypeParamError } from "@/modules/@shared/errors";
import { URLRepository } from "@/modules/@shared/services/repositories/url/url-repository";

@Injectable()
export class CountClicksUseCase {
  constructor(
    private readonly countClicksValidate: CountClicksValidate,
    private readonly urlRepository: URLRepository,
  ) { }

  async execute(input: CountClicksInput) {
    this.countClicksValidate.validate(input)
    const urlData = await this.urlRepository.getByURLToken(input.urlToken)
    if (!urlData) throw new TypeParamError('Incorrect URL Shortener!')
    await this.urlRepository.updateByURLId(urlData.id, { clicks: urlData.clicks + 1 })
    return urlData
  }
}
