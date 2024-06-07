import { SequelizeModule } from '@nestjs/sequelize';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';


import { Module } from '@nestjs/common';
import { AuthModule } from 'src/Auth/auth.module';
import { OrdersRepository } from './orders.repository';
import { Orders } from './orders.model';

@Module({
    imports: [SequelizeModule.forFeature([Orders]), AuthModule],
    controllers: [
        OrdersController,],
    providers: [
        OrdersService, OrdersRepository],
})
export class OrdersModule { }
