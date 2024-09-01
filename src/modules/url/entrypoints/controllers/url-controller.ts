import { Auth } from '@/modules/@shared/decorator/auth/auth-decorator';
import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { MapResponseHelper } from '../../helpers/map-response/map-response-helper';
import { AddURLUseCase } from '../../use-cases/add-url/add-url-usecase';
import { GetURLUseCase } from '../../use-cases/get-url/get-url-usecase';
import { URLResponse } from '../responses/url-response';
import { MapListResponseHelper } from '../../helpers/map-response/map-list-response-helper';

@Controller('/url')
export class URLController {
  constructor(
    private readonly addURLUseCase: AddURLUseCase,
    private readonly getURLUseCase: GetURLUseCase,
    private readonly mapResponseRule: MapResponseHelper,
    private readonly mapListResponseHelper: MapListResponseHelper,
  ) { }

  @Post('/')
  @Auth(false)
  async save(
    @Body('urlOrigin')
    urlOrigin: string,
    @Request()
    request: any
  ): Promise<URLResponse> {
    const userId = request.userId
    const urlData = await this.addURLUseCase.execute({
      urlOrigin,
      userId,
    });
    return this.mapResponseRule.execute(urlData, request)
  }

  @Get('/')
  @Auth(true)
  async get(
    @Request()
    request: any
  ): Promise<URLResponse[]> {
    const userId = request.userId
    const urlDataList = await this.getURLUseCase.execute({
      userId,
    });
    return this.mapListResponseHelper.execute(urlDataList, request)
  }
}
