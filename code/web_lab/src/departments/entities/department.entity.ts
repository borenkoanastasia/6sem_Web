import { ApiProperty } from '@nestjs/swagger';
import { Base } from 'src/entities/base';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Department extends Base {
  @Column()
  @ApiProperty({
    example: 'winter',
    description: 'The name of the Departmnent',
  })
  name: string;

  @Column()
  @ApiProperty({
    example: 'cold room',
    description: 'The description of the Department',
  })
  description: string;

  @Column()
  @ApiProperty({
    example: 'some_url',
    description: 'The image of the Department',
  })
  image_url: string;
}
