import { iUserData } from './../interface/IUserData';
import { UserService } from './../Users/user.service';
import * as bcrypt from 'bcryptjs'
/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { RegistationUserDto } from './dto/registration-User.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/Users/user.model';
import { LoginUserDto } from './dto/login-User.dto';
import { UserRepository } from 'src/Users/user.repository';
import { iUserDataLogin } from 'src/interface/IUserDataToken';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
        private userRepository: UserRepository

    ) {

    }
    async registrationUser(registationUserDto: RegistationUserDto) {
        const hashPassword = await bcrypt.hash(registationUserDto.password, 5)
        console.log(hashPassword)
        registationUserDto.password = hashPassword
        const user = await this.userService.createUser(registationUserDto)
        return this.generateToken(user)
    }

    async login(userDto: LoginUserDto): Promise<iUserDataLogin> {
        const user = await this.validateUser(userDto)
        let userTryAuth: iUserDataLogin = {
            token: (await this.generateToken(user)).token,
            userData: {
                Name: user.Name,
                SName: user.SName,
                Patronymic: user.Patronymic,
                img: user.img,
                login: user.login,
                id: user.id
            }
        }
        return userTryAuth
    }

    private async generateToken(user: User): Promise<{ token: string }> {
        const payload = { login: user.login, id: user.id }
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(registationUserDto: LoginUserDto): Promise<User> {
        const user = await this.userRepository.getUserBylogin(registationUserDto.login)
        if (user != null) {
            const passwordEquals = await bcrypt.compare(registationUserDto.password, user.password);
            if (user && passwordEquals) {
                return user;
            }
            throw new UnauthorizedException({ message: 'Некорректный емайл или пароль' })
        } else {
            throw new UnauthorizedException({ message: 'Некорректный емайл или пароль' })
        }

    }
}
