import { Injectable } from "@nestjs/common";
import { HttpAdapterHost } from '@nestjs/core';
import { Url } from "@prisma/client";
import { Request } from "express";
import { URLResponse } from "../../entrypoints/responses/url-response";
import { MapResponseHelper } from "./map-response-helper";

@Injectable()
export class MapListResponseHelper {
  constructor(
    private readonly mapResponseHelper: MapResponseHelper
  ) { }
  execute(urlDataList: Url[], request: Request): URLResponse[] {
    const urlResponseList: URLResponse[] = []
    for (const urlData of urlDataList) {
      urlResponseList.push(this.mapResponseHelper.execute(urlData, request))
    }
    return urlResponseList
  }

}
