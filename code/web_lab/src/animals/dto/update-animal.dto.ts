import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateAnimalDto } from './create-animal.dto';

export class UpdateAnimalDto extends PartialType(CreateAnimalDto) {
  @ApiProperty({ example: 'string', description: 'The name of the Animal' })
  name: string;

  @ApiProperty({
    example: 'string',
    description: 'The desciption of the Animal',
  })
  description: string;

  @ApiProperty({ example: 5, description: 'The age of the Animal' })
  age: number;

  @ApiProperty({ example: 'fox', description: 'The type of the Animal' })
  type: string;

  @ApiProperty({
    example: '1',
    description: 'The department of the Animal',
  })
  department: number;
}
