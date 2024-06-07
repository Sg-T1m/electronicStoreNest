import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Table, Model } from "sequelize-typescript";
import { Product } from "src/Products/products.model";
import { User } from "src/Users/user.model";
interface BasketCreationAttrsP {
    userId: number;
    productId: number;
}
@Table({
    tableName: "Basket"
})
export class Basket extends Model<Basket, BasketCreationAttrsP> {
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
    @ApiProperty({ example: 1, description: 'Уникальный идентификатор товара' })
    @ForeignKey(() => Product)
    @Column({ type: DataType.INTEGER, unique: false, allowNull: false })
    productId: number;

    @BelongsTo(() => User)
    user: User;

    @BelongsTo(() => Product)
    product: Product;
}
