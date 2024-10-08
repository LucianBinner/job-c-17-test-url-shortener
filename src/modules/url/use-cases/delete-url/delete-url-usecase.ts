import { Injectable } from "@nestjs/common";
import { DeleteURLValidate } from "./delete-url-validate";
import { DeleteURLInput } from "./delete-url-input";
import { TypeParamError } from "@/modules/@shared/errors";
import { URLRepository } from "@/modules/@shared/services/repositories/url/url-repository";

@Injectable()
export class DeleteURLUseCase {
  constructor(
    private readonly deleteURLValidate: DeleteURLValidate,
    private readonly urlRepository: URLRepository,
  ) { }

  async execute(input: DeleteURLInput) {
    this.deleteURLValidate.validate(input)
    const urlData = await this.urlRepository.getByUserIdAndURLId(input.userId, input.urlId)
    if (!urlData) throw new TypeParamError('URL Id')
    await this.urlRepository.updateByURLId(input.urlId, { deletedAt: new Date() })
  }
}
