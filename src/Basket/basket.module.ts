import { BasketController } from './basket.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { BasketRepositor } from './basket.repository';
import { BasketService } from './basket.service';
import { Module } from '@nestjs/common';
import { Basket } from './basket.model';
import { AuthModule } from 'src/Auth/auth.module';

@Module({
    imports: [SequelizeModule.forFeature([Basket]), AuthModule],
    controllers: [
        BasketController, ],
    providers: [
        BasketService, BasketRepositor],
})
export class BasketModule { }
