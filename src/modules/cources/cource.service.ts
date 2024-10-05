import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CourceModel } from './models';
import { CreateCourceDto } from './dtos';
import { CourceInterface } from './interfaces';
import { StudentModel } from '../students';

@Injectable()
export class CourceService {
  constructor(
    @InjectModel(CourceModel) private courceModel: typeof CourceModel,
  ) {}

  // create cource
  async createOneCource(cource: CourceInterface): Promise<void> {
    await this.courceModel.create({
      name: cource.name,
      cost: cource.cost,
      classNumber: cource.classNumber,
    });
  }

  // get all cources
  async getAllCources(): Promise<any[]> {
    return await this.courceModel.findAll({
      include: StudentModel,
    });
  }

  // get one cource
  async getOneCource(id: number): Promise<any> {
    return await this.courceModel.findOne({
      where: {
        id,
      },
      include: StudentModel,
    });
  }

  // update cource
  async updateOneCource(id: number, cource: CourceInterface): Promise<void> {
    await this.courceModel.update(
      {
        name: cource.name,
        cost: cource.cost,
        classnumber: cource.classNumber,
      },
      {
        where: {
          id,
        },
      },
    );
  }

  // delete cource
  async deleteOneCource(id: number): Promise<any> {
    await this.courceModel.destroy({
      where: {
        id,
      },
    });
  }
}
