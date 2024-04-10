import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Product } from "./products.model";
import { ProductsController } from "./products.controller";
import { ProductRepository } from "./product.repository";
import { ProductService } from "./product.service";
@Module({
  controllers: [ProductsController],
  providers: [ProductService, ProductRepository],
  imports:[SequelizeModule.forFeature([Product])],
})
export class ProductsModule {}
