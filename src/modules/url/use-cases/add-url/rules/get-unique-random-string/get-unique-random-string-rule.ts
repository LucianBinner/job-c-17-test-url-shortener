import { RandomStringGeneratorAdapter } from "@/modules/@shared/adapters/criptography/random-string-generator-adapter";
import { URLRepository } from "@/modules/url/services/repositories/url/url-repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class GetUniqueRandomStringRule {
  constructor(
    private readonly randomStringGeneratorAdapter: RandomStringGeneratorAdapter,
    private readonly urlRepository: URLRepository,
  ) { }

  async execute(): Promise<string> {
    let randomStringInvalid = true;
    let randomString = null;
    do {
      randomString = this.randomStringGeneratorAdapter.generator(6)
      const urlData = await this.urlRepository.getByURLToken(randomString)
      if (!urlData) randomStringInvalid = false
    } while (randomStringInvalid);
    return randomString
  }
}
