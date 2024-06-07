import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  DataType,
  Table,
  Model,
  HasMany,

} from "sequelize-typescript";
import { Product } from "src/Products/products.model";
interface CategoryCreationAttrs {
  NameCategory: String;
}
@Table({
  tableName: "Category",
})
export class Category extends Model<Category, CategoryCreationAttrs> {
  @ApiProperty({ example: 1, description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({ example: "Телефоны", description: 'Название категории' })
  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: false,
  })
  NameCategory: String;
  @ApiProperty({ example: "url", description: 'картинка категории' })
  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: false,
  })
  imgCategory: String;
  @HasMany(() => Product)
  Products: Product[];
}
