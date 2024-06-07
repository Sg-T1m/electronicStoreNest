import { ProductService } from './product.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { createProductDto } from './dto/create-product.dto';
import { Product } from './products.model';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductService
    ) { }
    @ApiOperation({ summary: 'Создания Товара' })
    @ApiResponse({ status: 200, type: Product })
    @Post()
    async createProduct(@Body() createProductDto: createProductDto): Promise<Product> {
        return this.productService.createProduct(createProductDto)
    }
    @ApiOperation({ summary: 'Получение Товара' })
    @ApiResponse({ status: 200, type: Product })
    @Get()
    async getAllProduct(): Promise<Product[]> {
        console.log('Отработал')
        return this.productService.getAllProducts()

    }
    @Get(':productId')
    async getOneProduct(@Param('productId') productId: number): Promise<Product> {
        console.log(productId)
        const oneProduct: Product = await this.productService.getOneProduct(productId)
        console.log(oneProduct)
        return oneProduct

    }
}

