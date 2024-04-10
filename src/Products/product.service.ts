/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { createProductDto } from './dto/create-product.dto';
import { Product } from './products.model';

@Injectable()
export class ProductService {
    constructor(
 
        private readonly productRepository: ProductRepository
    ){}

    async createProduct(createProductDto: createProductDto): Promise<Product>{
        console.log(createProductDto[0], 'xyi')
        return await this.productRepository.create(createProductDto[0]);
    }

    async getAllProducts(): Promise<Product[]>{
        console.log('ddd')
        return await this.productRepository.getAll()
    }

 }





