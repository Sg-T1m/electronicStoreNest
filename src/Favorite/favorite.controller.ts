import { FavoriteService } from './favorite.service';
import { InjectModel } from '@nestjs/sequelize';
import { Favorite } from './favorite.model';
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { Product } from 'src/Products/products.model';
import { AdditionFavoritesDto } from './dto/addition-favorites.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('favorites')
export class FavoriteController {
    constructor(
        private readonly favoriteService: FavoriteService
    ) { }
    @ApiOperation({ summary: 'Добавление в избранное' })
    @ApiResponse({ status: 200, type: Favorite })
    @Post()
    additionFavorites(@Body() additionFavoritesDto: AdditionFavoritesDto): Promise<Favorite> {
        console.log(additionFavoritesDto)
        return this.favoriteService.additionFavoritesProduct(additionFavoritesDto)
    }
    @ApiOperation({ summary: 'Получения избранных товаров пользователя' })
    @ApiResponse({ status: 200, type: Favorite })
    @Get(':userId')
    async getFavoriteByUserId(@Param('userId') userId: number) {

        return this.favoriteService.getFavoritesProductBuUser(userId)
    }
}                               