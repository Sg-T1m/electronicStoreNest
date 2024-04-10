import { BelongsTo, Column, DataType, ForeignKey, Table, Model } from "sequelize-typescript";
import { Product } from "src/Products/products.model";
import { User } from "src/Users/user.model";


interface BasketCreationAttrsP{
    userId: number;
    productId: number;
}

@Table({
    tableName: "Basket"
})
export class Basket extends Model<Basket, BasketCreationAttrsP> {
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;
    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, unique: false, allowNull: false })
    userId: number;

    @ForeignKey(() => Product)
    @Column({ type: DataType.INTEGER, unique: false, allowNull: false })
    productId: number;

    @BelongsTo(() => User)
    user: User;

    @BelongsTo(() => Product)
    product: Product;
}
