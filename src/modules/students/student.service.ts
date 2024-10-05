import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { StudentModel } from './models';
import { StudentInterface } from './interfaces';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(StudentModel) private studentModel: typeof StudentModel,
  ) {}

  // create one student
  async createOneStudent(student: StudentInterface): Promise<void> {
    await this.studentModel.create({
      fullName: student.fullName,
      age: student.age,
      address: student.address,
      courceId: student.courceId,
    });
  }

  // get all students
  async getAllStudents(): Promise<any[]> {
    return await this.studentModel.findAll();
  }

  // get one student
  async getOneStudent(id: number): Promise<any> {
    return await this.studentModel.findOne({
      where: {
        id,
      },
    });
  }

  // update one student
  async updateOneStudent(id: number, student: StudentInterface): Promise<void> {
    await this.studentModel.update(
      {
        fullName: student.fullName,
        age: student.age,
        address: student.address,
        courceId: student.courceId,
      },
      {
        where: {
          id,
        },
      },
    );
  }

  // delete student
  async deleteOneStudent(id: number): Promise<void> {
    await this.studentModel.destroy({
      where: {
        id,
      },
    });
  }
}
