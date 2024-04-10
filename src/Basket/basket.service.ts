import { Basket } from './basket.model';
import { BasketRepositor } from './basket.repository';
/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { AdditionBasket } from './dto/additionBasket.dto';

@Injectable()
export class BasketService {

    constructor(
        private readonly basketRepositor: BasketRepositor
    ) { }
    async additionProductByBasket(additionBasket: AdditionBasket): Promise<Basket> {
        return this.basketRepositor.additionProductByBasket(additionBasket)
    }
}
