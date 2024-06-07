import { CreateUserDto } from './dto/create-User.dto';
import { UserRepository } from './user.repository';
/*
https://docs.nestjs.com/providers#services
*/

import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { User } from "./user.model";
import { InjectModel } from "@nestjs/sequelize";
import { iUserData } from 'src/interface/IUserData';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository
  ) { }
  async createUser(createUserDto: CreateUserDto) {
    const candidate = await this.userRepository.getUserBylogin(createUserDto.login)
    if (candidate) {
      throw new HttpException('Пользователь с таким логином уже  существует', HttpStatus.BAD_REQUEST);
    }
    return this.userRepository.createUser(createUserDto)

  }
  async getUserByLogin(login: string): Promise<iUserData> {
    let userDataByDb = await this.userRepository.getUserBylogin(login)
    let userData: iUserData = {
      Name: userDataByDb.Name,
      SName: userDataByDb.SName,
      Patronymic: userDataByDb.Patronymic,
      img: userDataByDb.img,
      login: userDataByDb.login,
      id: userDataByDb.id
    }
    return userData
  }
}
