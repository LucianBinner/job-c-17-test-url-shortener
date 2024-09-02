import { Injectable } from "@nestjs/common";
import { UpdateURLInput } from "./update-url-input";
import { TypeParamError } from "@/modules/@shared/errors";
import { URLRepository } from "@/modules/@shared/services/repositories/url/url-repository";
import { UpdateURLValidate } from "./update-url-validate";

@Injectable()
export class UpdateURLUseCase {
  constructor(
    private readonly updateURLValidate: UpdateURLValidate,
    private readonly urlRepository: URLRepository,
  ) { }

  async execute(input: UpdateURLInput) {
    this.updateURLValidate.validate(input)
    const { urlId, urlOrigin, userId } = input
    const urlData = await this.urlRepository.getByUserIdAndURLId(userId, urlId)
    if (!urlData) throw new TypeParamError('URL Id')
    return await this.urlRepository.updateByURLId(urlId, {
      origin: urlOrigin
    })
  }
}
