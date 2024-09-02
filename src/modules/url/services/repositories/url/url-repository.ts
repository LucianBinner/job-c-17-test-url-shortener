import { Injectable } from '@nestjs/common';
import { PrismaConfig } from '@/config/prisma.config';
import { AddURLCto } from './ctos/add-url-cto';
import { Prisma, Url } from '@prisma/client';

@Injectable()
export class URLRepository {
  constructor(private prisma: PrismaConfig) { }

  async addUrl(addUrlParams: AddURLCto): Promise<Url> {
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

  async getByUserIdAndURLId(userId: number, urlId: number) {
    return await this.prisma.url.findFirst({
      where: {
        id: urlId,
        userId,
        deletedAt: null
      }
    });
  }

  async updateByURLId<T>(urlId: number, urlUpdate: T) {
    return await this.prisma.url.update({
      where: {
        id: urlId,
        deletedAt: null
      },
      data: urlUpdate
    });
  }
}
