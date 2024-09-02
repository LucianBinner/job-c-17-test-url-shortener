import { Injectable } from "@nestjs/common";
import { UpdateURLInput } from "./update-url-input";
import { UpdateURLValidate as UpdateURLValidate } from "./update-url-validate";
import { URLRepository } from "../../services/repositories/url/url-repository";
import { UnauthorizedError } from "@/modules/@shared/errors/unauthorized-error";
import { TypeParamError } from "@/modules/@shared/errors";

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
