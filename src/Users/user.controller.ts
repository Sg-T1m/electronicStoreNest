import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-User.dto';
import { Body, Controller, Get, HttpException, HttpStatus, Post, Req, Res, UseGuards } from "@nestjs/common";
import { User } from "./user.model";
import { InjectModel } from "@nestjs/sequelize";
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/Auth/jwt-auth.guard';
import { JwtService } from '@nestjs/jwt';
import { iUserData } from 'src/interface/IUserData';
@Controller('user')
export class UserController {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {

    }
    @ApiOperation({ summary: 'Создания пользователя' })
    @ApiResponse({ status: 200, type: User })
    @Post()
    @UseGuards(JwtAuthGuard)
    async createUser(@Body() createUserDto: CreateUserDto): Promise<{ statusCode: number; data: User; }> {
        console.log(createUserDto)
        if (createUserDto[0].password.length < 6) {
            throw new HttpException('слишком короткий пароль', HttpStatus.BAD_REQUEST)
        } else {
            let user = await this.userService.createUser(createUserDto[0])
            return { statusCode: HttpStatus.CREATED, data: user };
        }

    }
    @Get()
    @UseGuards(JwtAuthGuard)
    async getUserData(@Req() request): Promise<iUserData> {
        const authHeader = request.headers.authorization;
        const token = authHeader.split(' ')[1]
        const user = this.jwtService.verify(token)
        let userData: iUserData = await this.userService.getUserByLogin(user.login)
        return userData
    }

    @Get('/checkAuth')
    @UseGuards(JwtAuthGuard)
    async checkAuth(): Promise<boolean> {

        return true
    }
}
