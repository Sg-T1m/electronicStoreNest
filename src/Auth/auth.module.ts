import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { Module, forwardRef } from '@nestjs/common';
import { UserModule } from 'src/Users/user.module';

@Module({
    imports: [
        forwardRef(() => UserModule),
        JwtModule.register(
            {
                secret: process.env.PRIVATE_KEY || 'SECRET',
                signOptions: {
                    expiresIn: '24m'
                }
            }
        )],
    controllers: [
        AuthController,],
    providers: [
        AuthService,],
    exports: [AuthService,
        JwtModule]
})
export class AuthModule { }
