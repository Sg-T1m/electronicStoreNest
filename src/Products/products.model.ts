import { User } from './../Users/user.model';
import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Table, Model, ForeignKey, BelongsTo, BelongsToMany, AllowNull } from "sequelize-typescript";
import { Basket } from 'src/Basket/basket.model';
import { Favorite } from "src/Favorite/favorite.model";
import { Orders } from 'src/Orders/orders.model';
import { Category } from "src/Сategory/category.model";

interface ProductCreationAttrs {
  Name: string;
  Cost: number;
  img: string;
  description: string;
  IdCategory: number;
  company: string;
  countries: string;
}

@Table({
  tableName: "Product",
})
export class Product extends Model<Product, ProductCreationAttrs> {
  @ApiProperty({ example: 1, description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({ example: 'Телефон ', description: 'Название товара' })
  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  Name: string;
  @ApiProperty({ example: 22.3, description: 'Цена товара' })
  @Column({ type: DataType.DOUBLE, unique: false, allowNull: false })
  Cost: number;
  @ApiProperty({ example: 'url', description: 'Ссылка на картинку' })
  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  img: string;
  @ApiProperty({ example: 'Оптсание', description: 'Этот товар очень крутой' })
  @Column({ type: DataType.TEXT, unique: false, allowNull: false })
  description: string;
  @ApiProperty({ example: 1, description: 'Уникальный идентификатор категории' })
  @Column({ type: DataType.INTEGER, unique: false, allowNull: false })
  @ForeignKey(() => Category)
  IdCategory: number;
  @ApiProperty({ example: 'Производитель', description: 'Название компании' })
  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  company: string;
  @ApiProperty({ example: "Китай", description: 'Страна производитель' })
  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  countries: string;
  @ApiProperty({ example: "Цвет", description: 'Зелёный' })
  @Column({ type: DataType.STRING, unique: false, allowNull: true })
  Collor: string;
  @ApiProperty({ example: "Вес", description: '1000' })
  @Column({ type: DataType.INTEGER, unique: false, allowNull: true })
  weight: number;
  @ApiProperty({ example: "Основной материал", description: 'пластик' })
  @Column({ type: DataType.STRING, unique: false, allowNull: true })
  MainMaterial: string;
  @BelongsTo(() => Category)
  category: Category;
  @BelongsToMany(() => User, () => Favorite)
  UserFavorites: User[];
  @BelongsToMany(() => User, () => Basket)
  UserBasket: User[];
  @BelongsToMany(() => User, () => Orders)
  UserOrder: User[];
}
