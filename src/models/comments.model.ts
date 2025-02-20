import {
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { User } from "./user.model";
import { Posts } from "./posts.model";

export interface CommentsI {
  id?: number;
  userId?: number;
  postId?: number;
  content?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date |  null;
}

@Table({
  modelName: "comments",
  tableName: "comments",
  timestamps: true,
  paranoid: true,
})
export class Comments extends Model<CommentsI> {
  @BelongsTo((): typeof User => User)
  public users: typeof User;

  @BelongsTo(() => Posts)
  public post: typeof Posts;

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  public id: number;

  @ForeignKey((): typeof User => User)
  @Column(DataType.BIGINT)
  public userId: number;

  @ForeignKey((): typeof Posts => Posts)
  @Column(DataType.BIGINT)
  public postId: number;

  @Column(DataType.TEXT)
  public content: string;

  @Column(DataType.DATE)
  public createdAt: Date;

  @Column(DataType.DATE)
  public updatedAt: Date;

  @Column(DataType.DATE)
  public deletedAt: Date;


}
