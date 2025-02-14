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
// import { users } from "./users";

export interface dummyI {
  id?: number;
  userId?: number;
  propertyId?: number;
  labelId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({
  modelName: "dummy",
  tableName: "dummy",
  timestamps: true,
})
export class dummy extends Model<dummyI> {
  //   @BelongsTo((): typeof users => users)
  //   public users: typeof users;

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  public id: number;

  //   @ForeignKey((): typeof users => users)
  @Column(DataType.INTEGER)
  public userId: number;

  @Column(DataType.BIGINT)
  public propertyId: number;

  @Column(DataType.BIGINT)
  public labelId: number;

  @Column(DataType.DATE)
  public createdAt: Date;

  @Column(DataType.DATE)
  public updatedAt: Date;

  @Column({
    type: DataType.VIRTUAL,
    get() {
      return getLabelName(this.getDataValue("labelId"));
    },
  })
  public labelName: string;
}

const getLabelName = (type: any) => {
  if (type === 1) return "Sold";
  if (type === 2) return "Rented";
  return "";
};
