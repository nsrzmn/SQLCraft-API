import {
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasOne,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { User } from "./user.model";

export interface postsI {
  id?: number;
  userId?: number; // foreign key from users  
  title?: string;
  content?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
}

@Table({
  modelName: "posts",
  tableName: "posts",
  timestamps: true,
  paranoid: true,
})
export class Posts extends Model<postsI> {
  @BelongsTo(() => User)
  public user: User;

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  public id: number;

  @ForeignKey(()  => User)
  @Column(DataType.BIGINT)
  public userId: number;

  @Column(DataType.STRING)
  public title: string;

  @Column(DataType.TEXT)
  public content: string;

  @Column(DataType.DATE)
  public createdAt: Date;

  @Column(DataType.DATE)
  public updatedAt: Date;

  @Column(DataType.DATE)
  public deletedAt: Date;


}

