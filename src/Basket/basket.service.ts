import { Basket } from './basket.model';
import { BasketRepositor } from './basket.repository';
import { Injectable } from '@nestjs/common';
import { AdditionBasket } from './dto/additionBasket.dto';
import { Product } from 'src/Products/products.model';
import { deleteBasket } from './dto/deleteBasket.dto';
@Injectable()
export class BasketService {
    constructor(
        private readonly basketRepositor: BasketRepositor
    ) { }
    async additionProductByBasket(additionBasket: AdditionBasket): Promise<Basket> {
        return this.basketRepositor.additionProductByBasket(additionBasket)
    }
    async getBasketProductByUserId(userId: number): Promise<Product[]> {
        let basketUser: Basket[] = await this.basketRepositor.getBasketProductByUser(userId)
        let productInBasket: Product[] = []
        basketUser.forEach(Element => {
            productInBasket.push(Element.product)
        })
        return productInBasket
    }
    async deleteProductBasket(idUser: number, idProduct: number) {
        return this.basketRepositor.deleteProductBasket(idUser, idProduct)
    }
}
