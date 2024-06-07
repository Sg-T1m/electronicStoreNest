import { Product } from 'src/Products/products.model';
import { AdditionFavoritesDto } from './dto/addition-favorites.dto';
import { Favorite } from './favorite.model';
import { FavoriteRepository } from './favorite.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FavoriteService {
    constructor(
        private readonly favoriteRepository: FavoriteRepository
    ) {

    }
    async additionFavoritesProduct(additionFavoritesDto: AdditionFavoritesDto):Promise<Favorite> {
      return  this.favoriteRepository.additionFavoriteProduct(additionFavoritesDto)
    }

    async getFavoritesProductBuUser(userId: number): Promise<Product[]>{
        let productFavoritesUser: Favorite[] = await this.favoriteRepository.getFavoritesProductBuUser(userId)
        let productFavorites:Product[] = []
        productFavoritesUser.forEach(Element=>{
            productFavorites.push(Element.product)
        })
        return productFavorites
    }
}
