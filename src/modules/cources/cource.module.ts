import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CourceModel } from './models';
import { CourceController } from './cource.controller';
import { CourceService } from './cource.service';

@Module({
  imports: [SequelizeModule.forFeature([CourceModel])],
  controllers: [CourceController],
  providers: [CourceService],
})
export class CourceModule {}
