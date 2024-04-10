/*
https://docs.nestjs.com/modules
*/

import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./user.model";
import { UserRepository } from "./user.repository";

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository],
  imports: [SequelizeModule.forFeature([User])],
})
export class UserModule {}
