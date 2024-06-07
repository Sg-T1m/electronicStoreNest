import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './category.repository';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './category.model';
import { GetProductByCategory } from './dto/getProduct-category.dto';
import { Product } from 'src/Products/products.model';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) { }
  async createCategory(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const newCategory = await this.categoryRepository.create(createCategoryDto);
    return newCategory;
  }
  async getAllCategory(): Promise<Category[]> {
    const allCategory = await this.categoryRepository.getAllCategory()
    return allCategory
  }
  async getProductByCategory(categoryId: number):Promise<Product[]> {
    const Products = await this.categoryRepository.getProductByCategory(categoryId)
    return Products
  }
}
