/*
https://docs.nestjs.com/modules
*/

import { Module, forwardRef } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./user.model";
import { UserRepository } from "./user.repository";
import { AuthModule } from "src/Auth/auth.module";

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository],
  imports: [SequelizeModule.forFeature([User]), forwardRef(() => AuthModule),],
  exports: [UserService, UserRepository]
})
export class UserModule { }
