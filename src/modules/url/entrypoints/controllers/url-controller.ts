import { Auth } from '@/modules/@shared/decorator/auth/auth-decorator';
import { Body, Controller, Delete, Get, Post, Request, Param, Put } from '@nestjs/common';
import { MapResponseHelper } from '../../helpers/map-response/map-response-helper';
import { AddURLUseCase } from '../../use-cases/add-url/add-url-usecase';
import { GetURLUseCase } from '../../use-cases/get-url/get-url-usecase';
import { URLResponse } from '../responses/url-response';
import { MapListResponseHelper } from '../../helpers/map-response/map-list-response-helper';
import { DeleteURLUseCase } from '../../use-cases/delete-url/delete-url-usecase';
import { UpdateURLUseCase } from '../../use-cases/update-url/update-url-usecase';

@Controller('/url')
export class URLController {
  constructor(
    private readonly addURLUseCase: AddURLUseCase,
    private readonly getURLUseCase: GetURLUseCase,
    private readonly deleteURLUseCase: DeleteURLUseCase,
    private readonly updateURLUseCase: UpdateURLUseCase,
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

  @Delete('/:id')
  @Auth(true)
  async delete(
    @Param('id')
    id: string,
    @Request()
    request: any
  ): Promise<void> {
    const userId = request.userId
    await this.deleteURLUseCase.execute({
      userId,
      urlId: Number(id),
    });
  }

  @Put('/:id')
  @Auth(true)
  async update(
    @Param('id')
    id: string,
    @Body('urlOrigin')
    urlOrigin: string,
    @Request()
    request: any
  ): Promise<URLResponse> {
    const userId = request.userId
    const urlData = await this.updateURLUseCase.execute({
      userId,
      urlId: Number(id),
      urlOrigin
    });
    return this.mapResponseRule.execute(urlData, request)
  }
}
