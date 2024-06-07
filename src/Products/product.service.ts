import { Body, Get, HttpException, HttpStatus, Injectable, Param } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { createProductDto } from './dto/create-product.dto';
import { Product } from './products.model';

@Injectable()
export class ProductService {
    constructor(

        private readonly productRepository: ProductRepository
    ) { }

    async createProduct(@Body() createProductDto: createProductDto): Promise<Product> {
        try {
            return await this.productRepository.create(createProductDto[0]);
        } catch {
            throw new HttpException("Данной категории нету", HttpStatus.BAD_REQUEST)
        }


    }

    async getAllProducts(): Promise<Product[]> {
        console.log('ddd')
        return await this.productRepository.getAll()
    }


    async getOneProduct(id: number): Promise<Product> {
        const oneProduct = await this.productRepository.getOneProduct(id)
        if (oneProduct == null) {
            throw new HttpException("Данного товара нету", HttpStatus.BAD_REQUEST)
        }
        return oneProduct
    }
}





