import { BasketService } from './basket.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Basket } from './basket.model';
import { AdditionFavoritesDto } from 'src/Favorite/dto/addition-favorites.dto';

@Controller()
export class BasketController {
    constructor(
        private readonly basketService: BasketService
    ) {

    }
    @Post()
    async additionBasket(@Body() additionFavoritesDto: AdditionFavoritesDto): Promise<Basket> {
        return this.basketService.additionProductByBasket(additionFavoritesDto)
    }
}
