import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './category.model';
import { CreateCategoryDto } from './dto/create-category.dto';
import { GetProductByCategory} from './dto/getProduct-category.dto';
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

  async getCategory():Promise<Category[]>{
    const allCategory = await this.categoryModel.findAll()
    return allCategory
  }
  async getProductByCategory(getProductByCategory: GetProductByCategory):Promise<Product[]>{
    const category = await Category.findByPk(getProductByCategory[0].id, {
      include: [Product] 
    });
    if (!category) {
      throw new Error(`Category with id ${getProductByCategory[0].id} not found`);
    }

    return category.Products;
  }
}
