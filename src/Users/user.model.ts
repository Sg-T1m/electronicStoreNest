import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Table, Model, ForeignKey, BelongsTo, BelongsToMany } from "sequelize-typescript";
import { Basket } from "src/Basket/basket.model";
import { Favorite } from "src/Favorite/favorite.model";
import { Orders } from "src/Orders/orders.model";
import { Product } from "src/Products/products.model";
import { Roles } from "src/Roles/roles.model";
import { Category } from "src/Сategory/category.model";

interface UserCreationAttrs {
  Name: string;
  SName: string;
  Patronymic: string;
  img: string;
  login: string;
  password: string;
}

@Table({
  tableName: "Users",
})
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true, })
  id: number;
  @ApiProperty({ example: 'Иван', description: 'Имя' })
  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  Name: string;
  @ApiProperty({ example: 'Иванов', description: 'Фамилия' })
  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  SName: string;
  @ApiProperty({ example: 'Иванович', description: 'Отчество' })
  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  Patronymic: string;
  @ApiProperty({ example: 'url', description: 'картинка' })
  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  img: string;
  @ApiProperty({ example: 1, description: 'id roles' })
  @Column({ type: DataType.INTEGER, unique: false, defaultValue: 1 })
  @ForeignKey(() => Roles)
  idRoles: number;
  @ApiProperty({ example: 'ivan335', description: 'Уникальный логин' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  login: string;
  @ApiProperty({ example: '1245', description: 'пароль' })
  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  password: string;
  @BelongsTo(() => Roles)
  roles: Roles;
  @BelongsToMany(() => Product, () => Favorite)
  ProductFavorist: Product[];
  @BelongsToMany(() => Product, () => Basket)
  ProductBasket: Product[];
  @BelongsToMany(() => Product, () => Orders)
  ProductOrders: Product[];
}
