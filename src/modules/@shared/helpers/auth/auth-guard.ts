import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JWTDecryptAdapter } from '../../adapters/criptography/jwt-decrypt-adapter';
import { UnauthorizedError } from '../../errors/unauthorized-error';
import { EnvironmentUtils } from '../../utils/environment/environment-utils';
import { BearerTokenUtils } from '../../utils/http/request-utils';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly bearerTokenUtils: BearerTokenUtils,
    private readonly jwtDecryptAdapter: JWTDecryptAdapter,
    private readonly environmentUtils: EnvironmentUtils,
    private readonly reflector: Reflector
  ) { }
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const token = this.bearerTokenUtils.getDataBearerToken(request)
      const routeIsAuth = this.reflector.get<boolean>('routeIsAuth', context.getHandler());
      if (!token && !routeIsAuth) return true
      if (token) {
        const secret = this.environmentUtils.get('JWT_SECRET')
        const tokenInfo = await this.jwtDecryptAdapter.execute<{ id: number }>(token, secret)
        if (tokenInfo) {
          request.userId = tokenInfo.id
          return true
        }
      }
      throw new Error()
    } catch (error) {
      throw new UnauthorizedError();
    }
  }
}
