import { AdditionBasket } from './dto/additionBasket.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Basket } from './basket.model';
export class BasketRepositor {
    constructor(@InjectModel(Basket)
    private readonly basketModel: typeof Basket
    ) { }
    async additionProductByBasket(additionBasket: AdditionBasket): Promise<Basket>{
        return this.basketModel.create(additionBasket[0])
    }

}