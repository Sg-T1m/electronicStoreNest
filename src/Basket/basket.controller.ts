import { BasketService } from './basket.service';
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, UseGuards } from '@nestjs/common';
import { Basket } from './basket.model';
import { AdditionFavoritesDto } from 'src/Favorite/dto/addition-favorites.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/Auth/jwt-auth.guard';
@Controller('Basket')
export class BasketController {
    constructor(
        private readonly basketService: BasketService
    ) {
    }
    @ApiOperation({ summary: 'Добавление в корзину' })
    @ApiResponse({ status: 200, type: Basket })
    @Post()
    @UseGuards(JwtAuthGuard)
    async additionBasket(@Body() additionFavoritesDto: AdditionFavoritesDto): Promise<{ statusCode: number; data: Basket, message: string; }> {
        const data = await this.basketService.additionProductByBasket(additionFavoritesDto)
        return { statusCode: HttpStatus.CREATED, data: data, message: "товар успешно добавлен в корзину" };

    }
    @Get(':userId')
    async getBasketByUserId(@Param('userId') userId: number) {
        return this.basketService.getBasketProductByUserId(userId)
    }
    @UseGuards(JwtAuthGuard)
    @Delete(':idUser/:idProduct')
    async deleteProductBasket(@Param('idUser') idUser: number, @Param('idProduct') idProduct: number) {
        return this.basketService.deleteProductBasket(idUser, idProduct)
    }
}
