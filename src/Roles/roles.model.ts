import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { User } from "src/Users/user.model";

interface RoleCreationAttrs {
    NameRole: String;
}
@Table({
    tableName: 'Roles'
})
export class Roles extends Model<Roles, RoleCreationAttrs> {
    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;
    @ApiProperty({ example: 'User', description: 'Название роли' })
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    NameRole: string;
    @HasMany(() => User)
    Products: User[];

}
