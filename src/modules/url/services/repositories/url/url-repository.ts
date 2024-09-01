import { Injectable } from '@nestjs/common';
import { PrismaConfig } from '@/config/prisma.config';
import { AddURL } from './ctos/add-url';
import { Prisma, Url } from '@prisma/client';

@Injectable()
export class URLRepository {
  constructor(private prisma: PrismaConfig) { }

  async addUrl(addUrlParams: AddURL): Promise<Url> {
    let urlData: Prisma.UrlCreateInput = {
      origin: addUrlParams.origin,
      urlToken: addUrlParams.urlToken
    }
    if (addUrlParams?.user) {
      urlData = {
        ...urlData,
        user: {
          connect: addUrlParams.user
        }
      }
    }
    return await this.prisma.url.create({ data: urlData });
  }

  async getByURLToken(urlToken: string) {
    return await this.prisma.url.findFirst({
      where: {
        urlToken
      }
    });
  }

  async getByOrigin(origin: string) {
    return await this.prisma.url.findFirst({
      where: {
        origin,
      }
    });
  }

  async getByOriginAndUserId(origin: string, userId: number) {
    return await this.prisma.url.findFirst({
      where: {
        origin,
        userId
      }
    });
  }

  async getByUserId(userId: number) {
    return await this.prisma.url.findMany({
      where: {
        userId,
        deletedAt: null
      }
    });
  }
}
