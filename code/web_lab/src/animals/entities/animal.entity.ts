import { ApiProperty } from '@nestjs/swagger';
import { Department } from 'src/departments/entities/department.entity';
import { Base } from 'src/entities/base';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Animal extends Base {
  @Column()
  @ApiProperty({ example: 'string', description: 'The name of the Animal' })
  name: string;

  @Column()
  @ApiProperty({
    example: 'string',
    description: 'The desciption of the Animal',
  })
  description: string;

  @Column()
  @ApiProperty({ example: 5, description: 'The age of the Animal' })
  age: number;

  @Column()
  @ApiProperty({ example: 'fox', description: 'The type of the Animal' })
  type: string;

  @ManyToOne((type) => Department, {
    createForeignKeyConstraints: true,
  })
  @ApiProperty({
    example: 'winter',
    description: 'The department of the Animal',
  })
  department: Department;

  @Column()
  @ApiProperty({
    example: 'some_url',
    description: 'The image of the Animal',
  })
  image_url: string;
}
