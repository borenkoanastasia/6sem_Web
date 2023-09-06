import { ApiProperty } from '@nestjs/swagger';
import { Department } from 'src/departments/entities/department.entity';
import { Base } from 'src/entities/base';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Account extends Base {
  @Column()
  @ApiProperty({ example: 'string', description: 'The name of the Animal' })
  username: string;

  @Column()
  @ApiProperty({
    example: 'string',
    description: 'The desciption of the Animal',
  })
  password: string;

  @Column()
  @ApiProperty({ example: 5, description: 'The age of the Animal' })
  age: number;

  @Column()
  @ApiProperty({ example: 'Ivan', description: 'First Name' })
  firstname: string;

  @Column()
  @ApiProperty({ example: 'Ivanov', description: 'Last Name' })
  lastname: string;

  @Column()
  @ApiProperty({ example: 'Manager', description: 'position' })
  position: string;

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
    description: 'The image of the Account',
  })
  image_url: string;
}
