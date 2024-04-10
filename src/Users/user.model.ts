import { Column, DataType, Table, Model, ForeignKey } from "sequelize-typescript";
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
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true, })
  id: number;
  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  Name: string;
  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  SName: string;
  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  Patronymic: string;
  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  img: string;
  @Column({ type: DataType.INTEGER, unique: false, defaultValue: 0 })

  idRoles: number;
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  login: string;
  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  password: string;
}
