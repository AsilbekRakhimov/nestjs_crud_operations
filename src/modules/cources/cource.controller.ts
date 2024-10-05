import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CourceService } from './cource.service';
import { CreateCourceDto, UpdateCourceDto } from './dtos';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Cource')
@Controller('cource')
export class CourceController {
  constructor(private service: CourceService) {}

  // create cource
  @ApiOperation({
    description: 'Create cource',
    summary: 'You can create a cource here !',
  })
  @Post('/create')
  async createCource(@Body() cource: CreateCourceDto): Promise<void> {
    try {
      await this.service.createOneCource(cource);
    } catch (error) {
      throw new ConflictException(error.message);
    }
  }

  // get all cources
  @ApiOperation({
    description: 'Get all courcess',
    summary: 'You can get all cources here !',
  })
  @Get('/all')
  async getCources(): Promise<any[]> {
    try {
      return await this.service.getAllCources();
    } catch (error) {
      throw new ConflictException(error.message);
    }
  }

  // get one cource
  @ApiOperation({
    description: 'Get one cource',
    summary: 'You can get one cource here !',
  })
  @Get('/one/:id')
  async getCource(@Param('id') id: number): Promise<any> {
    try {
      return await this.service.getOneCource(id);
    } catch (error) {
      throw new ConflictException(error.message);
    }
  }

  // update cource
  @ApiOperation({
    description: 'Update one cource',
    summary: 'You can update one cource here !',
  })
  @Put('/update/:id')
  async updateCource(
    @Param('id') id: number,
    @Body() cource: UpdateCourceDto,
  ): Promise<void> {
    await this.service.updateOneCource(id, cource);
  }

  // delete cource
  @ApiOperation({
    description: 'Delete one cource',
    summary: 'You can delete one cource here !',
  })
  @Delete('/delete/:id')
  async deleteCource(@Param('id') id: number): Promise<void> {
    try {
      await this.service.deleteOneCource(id);
    } catch (error) {
      throw new ConflictException(error.message);
    }
  }
}
