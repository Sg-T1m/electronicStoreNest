import { OrdersModule } from './Orders/orders.module';
import { AuthModule } from './Auth/auth.module';
import { RolesModule } from './Roles/roles.module';
import { BasketModule } from './Basket/basket.module';
import { FavoriteModule } from './Favorite/favorite.module';
import { CategoryModule } from './Сategory/category.module';
import { ProductsModule } from "./Products/products.module";
import { Module } from "@nestjs/common";
import { UserModule } from "./Users/user.module";
import { SequelizeModule } from "@nestjs/sequelize";
import { ConfigModule } from "@nestjs/config";
import { User } from "./Users/user.model";
import { Product } from "./Products/products.model";
import { Category } from './Сategory/category.model';
import { Favorite } from './Favorite/favorite.model';
import { Basket } from './Basket/basket.model';
import { Roles } from './Roles/roles.model';
import { Orders } from './Orders/orders.model';

@Module({
  controllers: [
  ],
  providers: [
  ],
  imports: [
    OrdersModule,
    AuthModule,
    RolesModule,
    BasketModule,
    FavoriteModule,
    CategoryModule,
    ProductsModule,
    OrdersModule,
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Product, Category, Favorite, Basket, Roles, Orders],
      autoLoadModels: true,
    }),
    UserModule
  ],
})
export class appModule { }
