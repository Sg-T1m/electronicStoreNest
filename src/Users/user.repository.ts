import { CreateUserDto } from './dto/create-User.dto';
import { Injectable } from "@nestjs/common";
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
}