import { AdditionFavoritesDto } from './dto/addition-favorites.dto';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Favorite } from "./favorite.model";
import { Product } from 'src/Products/products.model';
@Injectable()
export class FavoriteRepository {
    constructor(
        @InjectModel(Favorite)
        private readonly favoriteModel: typeof Favorite,
    ) { }
    async additionFavoriteProduct(additionFavoritesDto: AdditionFavoritesDto): Promise<Favorite> {
        return this.favoriteModel.create(additionFavoritesDto[0])
    }
    async getFavoritesProductBuUser(userId: number): Promise<Favorite[]> {
        return this.favoriteModel.findAll({
            where: {
                userId: userId
            },
            include: [Product],
            attributes: ['productId', 'product.id'], 
            group: ['productId', 'product.id'], 
        })
    }
}