import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";

export interface userI {
  id?: number;
  username?: string;
  email?: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({
  modelName: "User",
  tableName: "users",
  timestamps: true,
})
export class User extends Model<userI> {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  public id: number;

  @Column(DataType.STRING)
  public username: string;

  @Column(DataType.STRING)
  public email: string;

  @Column(DataType.STRING)
  public password: string;

  @Column(DataType.DATE)
  public createdAt: Date;

  @Column(DataType.DATE)
  public updatedAt: Date;

}

