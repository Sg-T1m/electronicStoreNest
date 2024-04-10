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
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: false,
  })
  NameCategory: String;
  @HasMany(() => Product)
  Products: Product[];
}
