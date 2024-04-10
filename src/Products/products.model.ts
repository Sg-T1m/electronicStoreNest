import { Column, DataType, Table, Model, ForeignKey, BelongsTo } from "sequelize-typescript";
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
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  Name: string;
  @Column({ type: DataType.DOUBLE, unique: false, allowNull: false })
  Cost: number;
  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  img: string;
  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  description: string;
  @Column({ type: DataType.INTEGER, unique: false, allowNull: false })
  @ForeignKey(() => Category)
  IdCategory: number;
  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  company: string;
  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  countries: string;
  @BelongsTo(() => Category)
  category: Category;
}
