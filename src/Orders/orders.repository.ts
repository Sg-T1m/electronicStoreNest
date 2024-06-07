import { Basket } from './../Basket/basket.model';
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Orders } from "./orders.model";
import { AdditionOrders } from "./dto/additionOrders.Dto";
import { iOrders } from 'src/interface/iOrders';
import { Product } from 'src/Products/products.model';



@Injectable()
export class OrdersRepository {
    constructor(@InjectModel(Orders)
    private readonly OrdersModel: typeof Orders) {
    }
    async additionByBasket(additionOrders: AdditionOrders) {
        try {
            console.log('testr')
            // const created = await this.OrdersModel.create()
            let dataOrders: iOrders = {
                userId: 0,
                productId: 0
            }
            if (additionOrders.productId.length > 1) {
                additionOrders.productId.forEach(async Element => {
                    console.log('цикл 1')
                    dataOrders = {
                        userId: additionOrders.userId,
                        productId: Element
                    }
                    const created = await this.OrdersModel.create(dataOrders)
                })
                return { statusCode: HttpStatus.CREATED, massange: 'Заказ успешно сделан' }
            } else {
                console.log('цикл 2')
                dataOrders = {
                    userId: additionOrders.userId,
                    productId: additionOrders.productId[0]
                }
                const created = await this.OrdersModel.create(dataOrders)
                return { statusCode: HttpStatus.CREATED, massange: 'Заказ успешно сделан' }
            }
        } catch {
            throw new HttpException('Заказ уже сделан', HttpStatus.BAD_REQUEST);
        }
    }
    async getOrdersProductByUser(userId: number): Promise<Basket[]> {
        try {
            const data = await this.OrdersModel.findAll({
                where: {
                    userId: userId
                },
                include: [Product],
                attributes: ['productId', 'product.id'],
                group: ['productId', 'product.id'],
            })
            return data
        } catch (e) {
            return e
        }

    }
    async deleteOrders(idUser: number, idProduct: number) {
        try {
            return await this.OrdersModel.destroy({
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