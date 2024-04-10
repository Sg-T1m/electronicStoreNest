import { ProductService } from './product.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { createProductDto } from './dto/create-product.dto';
import { Product } from './products.model';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductService
    ) { }
    @Post()
    async createProduct(@Body() createProductDto: createProductDto) : Promise<Product>{
        return this.productService.createProduct(createProductDto)
    }
    @Get()
    async getAllProduct(): Promise<Product[]> {
        return this.productService.getAllProducts()

    }
}

