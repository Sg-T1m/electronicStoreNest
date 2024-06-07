import { AdditionBasket } from './dto/additionBasket.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Basket } from './basket.model';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Product } from 'src/Products/products.model';
import { deleteBasket } from './dto/deleteBasket.dto';
@Injectable()
export class BasketRepositor {
    constructor(@InjectModel(Basket)
    private readonly basketModel: typeof Basket
    ) { }
    async additionProductByBasket(additionBasket: AdditionBasket): Promise<Basket> {
        try {
            const created = await this.basketModel.create(additionBasket)
            if (created != null) {
                return created
            }

        } catch {
            throw new HttpException('Данный това уже добавлен', HttpStatus.BAD_REQUEST);
        }
    }

    async getBasketProductByUser(userId: number): Promise<Basket[]> {
        try {
            return this.basketModel.findAll({
                where: {
                    userId: userId
                },
                include: [Product],
                attributes: ['productId', 'product.id'],
                group: ['productId', 'product.id'],
            })

        } catch (e) {
            return e
        }
    }
    async deleteProductBasket(idUser: number, idProduct: number) {
        try {
            return await this.basketModel.destroy({
                where: {
                    userId: idUser,
                    productId: idProduct
                }
            })
        } catch (e) {
            throw new HttpException('Данный товар уже удалён', HttpStatus.BAD_REQUEST);
        }

    }
}