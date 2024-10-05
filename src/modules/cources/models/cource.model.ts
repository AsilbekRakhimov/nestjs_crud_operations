import { Column, DataType, Table, Model, HasMany } from 'sequelize-typescript';
import { StudentModel } from 'src/modules/students';

@Table({ tableName: 'cources', timestamps: true })
export class CourceModel extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  })
  id: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    unique: true,
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 300000,
  })
  cost: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: false,
  })
  classNumber: number;

  @HasMany(() => StudentModel)
  students: StudentModel[]
}
