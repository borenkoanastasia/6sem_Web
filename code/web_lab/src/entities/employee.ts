// import { ApiProperty } from '@nestjs/swagger';
// import { Entity, Column, ManyToOne } from 'typeorm';
// import { Base } from './base';
// import { Department } from './department';

// @Entity()
// export class Employee extends Base {
//   @Column()
//   @ApiProperty({
//     example: 'Ivan',
//     description: 'The firstName of the Employee',
//   })
//   firstName: string;

//   @Column()
//   @ApiProperty({
//     example: 'Ivanov',
//     description: 'The lastName of the Employee',
//   })
//   lastName: string;

//   @Column()
//   @ApiProperty({
//     example: 25,
//     description: 'The lastName of the Employee',
//   })
//   age: number;

//   @Column()
//   @ApiProperty({
//     example: 1000,
//     description: 'The salary of the Employee',
//   })
//   salary: number;

//   @ManyToOne((type) => Department, {
//     createForeignKeyConstraints: true,
//   })
//   @ApiProperty({
//     example: 'winter',
//     description: 'The department of the Employee',
//   })
//   department: Department;
// }
