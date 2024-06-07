import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { Module } from "@nestjs/common";
import { Category } from "./category.model";
import { SequelizeModule } from "@nestjs/sequelize";
import { CategoryRepository } from './category.repository';
@Module({
  imports: [SequelizeModule.forFeature([Category])],
  controllers: [
    CategoryController],
  providers: [
    CategoryService, CategoryRepository],
})
export class CategoryModule { }
