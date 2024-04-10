import { FavoriteService } from './favorite.service';
import { FavoriteController } from './favorite.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { Favorite } from './favorite.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { FavoriteRepository } from './favorite.repository';

@Module({
    imports: [SequelizeModule.forFeature([Favorite])],
    controllers: [
        FavoriteController,],
    providers: [
        FavoriteService, FavoriteRepository],
})
export class FavoriteModule { }
