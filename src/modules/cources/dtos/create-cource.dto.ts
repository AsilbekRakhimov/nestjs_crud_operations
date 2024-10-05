import { ApiProperty } from '@nestjs/swagger';
import { CourceInterface } from '../interfaces/cource.interface';
import { IsNumber, IsString } from 'class-validator';

export class CreateCourceDto implements CourceInterface {
  @ApiProperty({
    type: String,
    required: true,
    example: 'Matematika',
    description: 'Bu yerga kurs nomi kiritiladi',
  })
  @IsString()
  name: string;

  @ApiProperty({
    type: Number,
    required: true,
    example: 50000,
    description: 'Bu yerga kurs narxi kiritiladi',
  })
  @IsNumber()
  cost: number;

  @ApiProperty({
    type: Number,
    required: true,
    example: 23,
    description: "Bu yerga kurs o'tiladigan xona raqami kiritiladi",
  })
  @IsNumber()
  classNumber: number;

  // @ApiProperty({
  //     type: Number,
  //     required: true,
  //     example: 4,
  //     description: "Bu yerga kursga kiradigan o'quvchilar id si kiritiladi"
  // })
  // studentId: number;
}
