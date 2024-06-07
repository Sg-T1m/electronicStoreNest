import { CreateUserDto } from './dto/create-User.dto';
import { Injectable, Res } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./user.model";

@Injectable()
export class UserRepository {
    constructor(@InjectModel(User)
    private readonly userModel: typeof User) {

    }
    async createUser(createUserDto: CreateUserDto): Promise<User> {

        return this.userModel.create(createUserDto)
    }
    async getUserBylogin(login: string): Promise<User> {

        const user = await this.userModel.findOne({ where: { login }, include: { all: true } })
        return user;
    }
}