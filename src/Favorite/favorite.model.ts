import { ApiProperty } from '@nestjs/swagger';
import { Table, Column, Model, ForeignKey, BelongsTo, DataType, HasMany } from 'sequelize-typescript';
import { Product } from 'src/Products/products.model';
import { User } from 'src/Users/user.model';

interface FavoriteCreationAttrs {
  userId: number;
  productId: number;
}
@Table(
  {
    tableName: 'Favorite'
  }
)
export class Favorite extends Model<Favorite, FavoriteCreationAttrs> {
  @ApiProperty({ example: 1, description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({ example: 1, description: 'Уникальный идентификатор пользователя' })
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, unique: false, allowNull: false })
  userId: number;

  @ForeignKey(() => Product)
  @ApiProperty({ example: 1, description: 'Уникальный идентификатор товара' })
  @Column({ type: DataType.INTEGER, unique: false, allowNull: false })
  productId: number;

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Product)
  product: Product;
}