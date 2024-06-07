import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Product } from "./products.model";
import { createProductDto } from "./dto/create-product.dto";
import { iProduct } from "src/interface/IProduct";

@Injectable()
export class ProductRepository {
    constructor(
        @InjectModel(Product)
        private readonly productModel: typeof Product) { }

    async create(createProductDto: createProductDto): Promise<Product> {
        return this.productModel.create(createProductDto);

    }

    async getAll(): Promise<Product[]> {

        console.log('Отработал')
        return await this.productModel.findAll(
            {
                attributes: { exclude: ['createdAt', 'updatedAt', 'IdCategory'] }
            }
        )
    }

    
    async getOneProduct(id: number): Promise<Product> {
        console.log(id)
        const oneProduct = await this.productModel.findByPk(id)
        return oneProduct
    }
}




