import { BasketController } from './basket.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { BasketRepositor } from './basket.repository';
import { BasketService } from './basket.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { Basket } from './basket.model';

@Module({
    imports: [SequelizeModule.forFeature([Basket])],
    controllers: [
        BasketController, ],
    providers: [
        BasketService, BasketRepositor],
})
export class BasketModule { }
