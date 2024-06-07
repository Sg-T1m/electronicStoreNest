import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { OrdersService } from './orders.service';
import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { Orders } from './orders.model';
import { JwtAuthGuard } from 'src/Auth/jwt-auth.guard';
import { AdditionOrders } from './dto/additionOrders.Dto';

@Controller('orders')
export class OrdersController {

    constructor(
        private readonly ordersService: OrdersService
    ) {

    }
    @ApiOperation({ summary: 'Добавление в заказы' })
    @ApiResponse({ status: 200, type: Orders })
    @Post()
    @UseGuards(JwtAuthGuard)
    async additionOrders(@Body() additionOrders: AdditionOrders) {
        console.log(additionOrders, 'pivo')
        const data = await this.ordersService.additionProductByOrders(additionOrders)
        return data

    }
    @Get(':userId')
    async getOrdersByUserId1(@Param('userId') userId: number) {
        return this.ordersService.getOrdersProductByUserId(userId)
    }
    @UseGuards(JwtAuthGuard)
    @Delete(':idUser/:idProduct')
    async deleteProductBasket(@Param('idUser') idUser: number, @Param('idProduct') idProduct: number) {
        return this.ordersService.deleteProductOrders(idUser, idProduct)
    }
}
