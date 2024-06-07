import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Roles } from './roles.model';
import { RolseRepository } from './roles.repository';

@Module({
    imports: [SequelizeModule.forFeature([Roles])],
    controllers: [
        RolesController,],
    providers: [
        RolesService, RolseRepository],
})
export class RolesModule { }
