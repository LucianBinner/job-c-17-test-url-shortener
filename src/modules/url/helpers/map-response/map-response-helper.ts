import { Injectable } from "@nestjs/common";
import { HttpAdapterHost } from '@nestjs/core';
import { Url } from "@prisma/client";
import { Request } from "express";
import { SaveResponse } from "../../entrypoints/responses/save-response";

@Injectable()
export class MapResponseHelper {
  constructor(
    private readonly httpAdapterHost: HttpAdapterHost
  ) { }
  async execute(urlData: Url, request: Request): Promise<SaveResponse> {
    const protocol = request.protocol;
    const httpAdapter = this.httpAdapterHost.httpAdapter;
    const host = httpAdapter.getRequestHostname(request);
    const port = this.getPort();
    const urlShortener = `${protocol}://${host}${port ? ':' + port : ''}/${urlData.urlToken}`;
    const urlMap: SaveResponse = {
      urlId: urlData.id,
      urlOrigin: urlData.origin,
      urlShortener,

    }
    return urlMap
  }

  private getPort(): string {
    const address = this.httpAdapterHost.httpAdapter.getHttpServer().address();
    return typeof address === 'string' ? '' : address.port.toString();
  }
}
