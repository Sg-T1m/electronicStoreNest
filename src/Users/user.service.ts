import { CreateUserDto } from './dto/create-User.dto';
import { UserRepository } from './user.repository';
/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from "@nestjs/common";
import { User } from "./user.model";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository
) {}
  async createUser(createUserDto: CreateUserDto):Promise<User>{
    return this.userRepository.createUser(createUserDto)
  }
}
