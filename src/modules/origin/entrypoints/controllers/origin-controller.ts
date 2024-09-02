import { Controller, Get, Param, Res } from '@nestjs/common';
import { CountClicksUseCase } from '../../usecase/count-clicks/count-clicks-usecase';
import { Response } from 'express';

@Controller('')
export class OriginController {
  constructor(
    private readonly countClicksUseCase: CountClicksUseCase,
  ) { }


  @Get('/:urlToken')
  async redirectOrigin(
    @Param('urlToken')
    urlToken: string,
    @Res()
    response: Response
  ): Promise<void> {
    const urlDataList = await this.countClicksUseCase.execute({
      urlToken
    });
    response.redirect(urlDataList.origin);
  }
}
