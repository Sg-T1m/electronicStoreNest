import { CategoryService } from './category.service';
import { CategoryRepository } from './category.repository';
/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './category.model';
import { GetProductByCategory } from './dto/getProduct-category.dto';
import { Product } from 'src/Products/products.model';


@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService,
  ) {

  }
  @Post('createCategory')
  async createCategory(@Body() CreateCategoryDto: CreateCategoryDto): Promise<Category> {
    console.log(CreateCategoryDto)
    return this.categoryService.createCategory(CreateCategoryDto);
  }
  @Post('getProductByCategory')
  async test(@Body() getProductByCategory: GetProductByCategory): Promise<Product[]> {
    return this.categoryService.getProductByCategory(getProductByCategory);
  }


  @Get()
  getAll(): Promise<Category[]> {
    return this.categoryService.getAllCategory()
  }
}
