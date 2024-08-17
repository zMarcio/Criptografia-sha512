import {
  Column,
  PrimaryKey,
  Table,
  Model,
  AutoIncrement,
  Unique,
} from "sequelize-typescript";

@Table({ tableName: "user_name" })
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Unique(true)
  @Column
  id: number;

  @Column
  document: string;

  @Column
  cardToken: string;

  @Column
  value: number;
}
