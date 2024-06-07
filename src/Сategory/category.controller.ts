import { CategoryService } from './category.service';
import { CategoryRepository } from './category.repository';
import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './category.model';
import { GetProductByCategory } from './dto/getProduct-category.dto';
import { Product } from 'src/Products/products.model';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';


@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService,
  ) {

  }
  @ApiOperation({ summary: 'Добавление в категорию' })
  @ApiResponse({ status: 200, type: Category })
  @Post('createCategory')
  async createCategory(@Body() CreateCategoryDto: CreateCategoryDto): Promise<Category> {
    console.log(CreateCategoryDto)
    return this.categoryService.createCategory(CreateCategoryDto);
  }
  @ApiOperation({ summary: 'Получение по категории' })
  @ApiResponse({ status: 200, type: [Category] })
  @Get(':categoryId')
  async test(@Param('categoryId') categoryId: number): Promise<Product[]> {
    console.log(categoryId)
    return this.categoryService.getProductByCategory(categoryId);
  }
  @ApiOperation({ summary: 'Получение категорий' })
  @ApiResponse({ status: 200, type: [Category] })
  @Get()
  getAll(): Promise<Category[]> {
    let data = this.categoryService.getAllCategory()

    return data

  }
}
