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
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { StudentService } from './student.service';
import { CreateStudentDto, UpdateStudentDto } from './dtos';

@ApiTags('Student')
@Controller('student')
export class StudentController {
  constructor(private service: StudentService) {}

  // add student
  @ApiOperation({
    description: 'Add one student',
    summary: 'You can add one student here !',
  })
  @Post('/add')
  async createStudent(@Body() student: CreateStudentDto): Promise<any> {
    try {
      await this.service.createOneStudent(student);
    } catch (error) {
      throw new ConflictException(error.message);
    }
  }

  // get all students
  @ApiOperation({
    description: 'Get all students',
    summary: 'You can get all students here !',
  })
  @Get('/all')
  async getStudents(): Promise<any[]> {
    try {
      return await this.service.getAllStudents();
    } catch (error) {
      throw new ConflictException(error.message);
    }
  }

  // get one student
  @ApiOperation({
    description: 'Get one student',
    summary: 'You can get one student here !',
  })
  @Get('/one/:id')
  async getStudent(@Param('id') id: number): Promise<any> {
    try {
      return await this.service.getOneStudent(id);
    } catch (error) {
      throw new ConflictException(error.message);
    }
  }

  // update student
  @ApiOperation({
    description: 'Update one student',
    summary: 'You can update one student here !',
  })
  @Put('/update/:id')
  async updateStudent(
    @Param('id') id: number,
    @Body() student: UpdateStudentDto,
  ): Promise<any> {
    try {
      await this.service.updateOneStudent(id, student);
    } catch (error) {
      throw new ConflictException(error.message);
    }
  }

  // delete student
  @ApiOperation({
    description: 'Delete one student',
    summary: 'You can delete one student here !',
  })
  @Delete('/delete/:id')
  async deleteStudent(@Param('id') id: number) {
    try {
      await this.service.deleteOneStudent(id);
    } catch (error) {
      throw new ConflictException(error.message);
    }
  }
}
