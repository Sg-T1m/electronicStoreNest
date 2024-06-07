import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import e from 'express';
import { Observable } from 'rxjs';
@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {
  }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const req = context.switchToHttp().getRequest();

    try {
      const authHeader = req.headers.authorization;
      const bearer = 'Bearer'
      const token = authHeader.split(' ')[1]
      console.log(bearer)
      if (bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException({ message: 'Пользователь не авторизован' })
      } else {
        const user = this.jwtService.verify(token)
        console.log(user)
        req.user = user;
        return true;
      }

    } catch (e) {

      throw new UnauthorizedException({ message: 'Пользователь не авторизован' })
    }

  }
}
