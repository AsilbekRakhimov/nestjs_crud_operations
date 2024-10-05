import { IsNumber, IsString } from 'class-validator';
import { StudentInterface } from '../interfaces';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateStudentDto implements StudentInterface {
  @ApiProperty({
    type: String,
    required: false,
    description: "Bu yerga o'quvchi ismi to'liq kiritiladi",
    example: 'Rahimov Asilbek',
  })
  @IsString()
  fullName: string;

  @ApiProperty({
    type: Number,
    required: false,
    description: "Bu yerga o'quvchi yoshi kiritiladi",
    example: 23,
  })
  @IsNumber()
  age: number;

  @ApiProperty({
    type: String,
    required: false,
    description: "Bu yerga o'quvchi manzili kiritiladi",
    example: 'Yunusobod, Toshkent',
  })
  @IsString()
  address?: string;

  @ApiProperty({
    type: Number,
    required: false,
    description: "Bu yerga o'quvchining kurs id'si kiritiladi",
    example: 2,
  })
  courceId: number;
}
