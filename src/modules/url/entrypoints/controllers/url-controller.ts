import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AddURLUseCase } from '../../use-cases/add-url/add-url-usecase';
import { Auth } from '@/modules/@shared/decorator/auth/auth-decorator';
import { AuthGuard } from '@/modules/@shared/helpers/auth/auth-guard';
import { SaveResponse } from '../responses/save-response';
import { MapResponseHelper } from '../../helpers/map-response/map-response-helper';

@Controller('/url')
export class URLController {
  constructor(
    private readonly addURLUseCase: AddURLUseCase,
    private readonly mapResponseRule: MapResponseHelper,
  ) { }

  @Post('/')
  @Auth(false)
  async save(
    @Body('urlOrigin')
    urlOrigin: string,
    @Request()
    request: any
  ): Promise<SaveResponse> {
    const userId = request.userId
    const urlData = await this.addURLUseCase.execute({
      urlOrigin,
      userId,
    });
    return await this.mapResponseRule.execute(urlData, request)
  }
}
