import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Product } from "./products.model";
import { createProductDto } from "./dto/create-product.dto";

@Injectable()
export class ProductRepository {
    constructor(
        @InjectModel(Product)
        private readonly productModel: typeof Product) { }

    async create(createProductDto: createProductDto): Promise<Product> {
        return this.productModel.create(createProductDto);
    }

     async getAll(): Promise<Product[]>{
      
   
        return await this.productModel.findAll()
    }
}




