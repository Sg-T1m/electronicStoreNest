import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './category.model';
import { CreateCategoryDto } from './dto/create-category.dto';
import { GetProductByCategory } from './dto/getProduct-category.dto';
import { Product } from 'src/Products/products.model';

@Injectable()
export class CategoryRepository {
  constructor(
    @InjectModel(Category)
    private readonly categoryModel: typeof Category,
  ) { }
  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const newCategory = await this.categoryModel.create(createCategoryDto[0])
    console.log(newCategory)
    return newCategory;
  }
  async getAllCategory(): Promise<Category[]> {
    const allCategory = await this.categoryModel.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    }
    )
    return allCategory
  }
  async getProductByCategory(categoryId: number): Promise<Product[]> {
    const category = await Category.findByPk(categoryId, {
      include: [
        {
          model: Product,
          attributes: { exclude: ['createdAt', 'updatedAt', 'IdCategory'] }
        }
      ],
    });
    if (category == null) {
      throw new HttpException("Данной категории нету", HttpStatus.BAD_REQUEST)
    } else {
      return category.Products;
    }
  }
}
