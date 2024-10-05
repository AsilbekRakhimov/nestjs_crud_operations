import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { StudentModel } from './models';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
  imports: [SequelizeModule.forFeature([StudentModel])],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
