import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { CourceModel } from 'src/modules/cources';

@Table({ tableName: 'students', timestamps: true })
export class StudentModel extends Model {
  @Column({
    allowNull: false,
    type: DataType.TEXT,
    unique: false,
  })
  fullName: string;

  @Column({
    allowNull: false,
    type: DataType.INTEGER,
    unique: false,
  })
  age: number;

  @Column({
    allowNull: false,
    type: DataType.TEXT,
    unique: false,
  })
  address?: number;

  @ForeignKey(() => CourceModel)
  @Column({
    allowNull: false,
    type: DataType.INTEGER,
    unique: false,
    onDelete:"CASCADE",
    onUpdate:"NO ACTION"
  })
  courceId: number;

  @BelongsTo(() => CourceModel)
  category: CourceModel;
}
