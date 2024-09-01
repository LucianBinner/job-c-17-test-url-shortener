import { Injectable } from '@nestjs/common';
import { PrismaConfig } from '@/config/prisma.config';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UserPrismaRepository {
  constructor(private prisma: PrismaConfig) { }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return await this.prisma.user.create({
      data
    });
  }

  async getByEmail(email: string): Promise<User> {
    return await this.prisma.user.findFirst({
      where: {
        email
      }
    });
  }
}
