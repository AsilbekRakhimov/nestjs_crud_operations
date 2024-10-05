import { ApiProperty } from '@nestjs/swagger';
import { CourceInterface } from '../interfaces/cource.interface';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateCourceDto implements CourceInterface {
  @ApiProperty({
    type: String,
    required: false,
    example: 'Matematika',
    description: 'Bu yerga kurs nomi kiritiladi',
  })
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty({
    type: Number,
    required: false,
    example: 50000,
    description: 'Bu yerga kurs narxi kiritiladi',
  })
  @IsOptional()
  @IsNumber()
  cost: number;

  @ApiProperty({
    type: Number,
    required: false,
    example: 23,
    description: "Bu yerga kurs o'tiladigan xona raqami kiritiladi",
  })
  @IsNumber()
  @IsOptional()
  classNumber: number;
}
