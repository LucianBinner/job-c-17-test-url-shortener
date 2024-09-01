import { Injectable } from '@nestjs/common';
import { PrismaConfig } from '@/config/prisma.config';
import { User, Prisma } from '@prisma/client';
import { createUserCto } from './ctos/create-user-cto';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaConfig) { }

  async createUser(user: createUserCto): Promise<User> {
    return await this.prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
        password: user.password,
      }
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
