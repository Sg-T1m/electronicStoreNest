import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Product } from "src/Products/products.model";
import { User } from "src/Users/user.model";


interface OrdersCreationAttrs {
    userId: number;
    productId: number;
}

@Table({
    tableName: 'Orders'
})
export class Orders extends Model<Orders, OrdersCreationAttrs> {
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