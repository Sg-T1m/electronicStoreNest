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
    // Вызываем метод create() репозитория, передавая DTO с данными для создания категории
    const newCategory = await this.categoryRepository.create(createCategoryDto);
    // Возвращаем созданный объект категории
    return newCategory;
  }

  async getAllCategory(): Promise<Category[]> {
    const allCategory = await this.categoryRepository.getCategory()
    return allCategory
  }

  async getProductByCategory(getProductByCategory: GetProductByCategory):Promise<Product[]> {
    const testtt = await this.categoryRepository.getProductByCategory(getProductByCategory)
    return testtt
  }
}
