import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { RegistationUserDto } from './dto/registration-User.dto';
import { LoginUserDto } from './dto/login-User.dto';
import { iUserDataLogin } from 'src/interface/IUserDataToken';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) {
    }
    @Post('/registration')
    async registration(@Body() registationUserDto: RegistationUserDto) {
        console.log(registationUserDto)
        return await this.authService.registrationUser(registationUserDto)
    }
    @Post('/login')
    login(@Body() userDto: LoginUserDto): Promise<iUserDataLogin> {
        return this.authService.login(userDto)
    }
}
