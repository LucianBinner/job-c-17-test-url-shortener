import { Module } from '@nestjs/common';
import { PrismaConfig } from './config/prisma.config';
import { providersShared } from './modules/@shared'
import { controllersOrigin, providersOrigin } from './modules/origin'
import { controllersURL, providersURL } from './modules/url'
import { controllersUser, providersUser } from './modules/user'

@Module({
  imports: [],
  controllers: [
    ...controllersOrigin,
    ...controllersURL,
    ...controllersUser
  ],
  providers: [
    PrismaConfig,
    ...providersShared,
    ...providersOrigin,
    ...providersURL,
    ...providersUser,
  ],
})
export class AppModule { }
