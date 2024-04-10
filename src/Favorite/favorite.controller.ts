import { FavoriteService } from './favorite.service';
import { InjectModel } from '@nestjs/sequelize';
import { Favorite } from './favorite.model';
/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { Product } from 'src/Products/products.model';
import { AdditionFavoritesDto } from './dto/addition-favorites.dto';

@Controller('favorites')
export class FavoriteController {
    constructor(
        private readonly favoriteService: FavoriteService
    ) { }
    @Post()
    createFavorites(@Body() additionFavoritesDto: AdditionFavoritesDto): Promise<Favorite> {
        return this.favoriteService.additionFavoritesProduct(additionFavoritesDto)
    }

    @Get(':userId')
    async getFavoriteByUserId(@Param('userId') userId: number){
        return this.favoriteService.getFavoritesProductBuUser(userId)
    }
}