import { SetMetadata, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../helpers/auth/auth-guard';

export function Auth(routeIsAuth: boolean) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    SetMetadata('routeIsAuth', routeIsAuth)(target, key, descriptor);
    UseGuards(AuthGuard)(target, key, descriptor);
  };
}
