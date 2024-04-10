import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-User.dto';
import { Body, Controller, Post } from "@nestjs/common";
import { User } from "./user.model";
import { InjectModel } from "@nestjs/sequelize";
@Controller('user')
export class UserController {
 constructor(
    private userService: UserService
 ){

 }
    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto[0]);
    }
}
