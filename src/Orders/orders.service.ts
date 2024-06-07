import { Product } from 'src/Products/products.model';
import { AdditionOrders } from './dto/additionOrders.Dto';
import { Orders } from './orders.model';
import { OrdersRepository } from './orders.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {

    constructor(
        private readonly ordersRepository: OrdersRepository
    ) {

    }
    async additionProductByOrders(additionOrders: AdditionOrders) {
        return this.ordersRepository.additionByBasket(additionOrders)
    }

    async getOrdersProductByUserId(userId: number) {
        let ordersUser: Orders[] = await this.ordersRepository.getOrdersProductByUser(userId)
        let productInOrders: Product[] = []
        ordersUser.forEach(Element => {
            productInOrders.push(Element.product)
        })
        return productInOrders
    }
    async deleteProductOrders(idUser: number, idProduct: number) {
        return await this.ordersRepository.deleteOrders(idUser, idProduct)
    }
}
