import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Base {
  @ApiProperty({
    example: 1,
    description: 'The id',
  })
  @PrimaryGeneratedColumn()
  id: number;
}
