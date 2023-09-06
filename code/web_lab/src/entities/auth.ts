import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Base } from './base';

@Entity()
export class Auth extends Base {
  @Column()
  @ApiProperty({
    example: 'login',
    description: 'The login of the Auth',
  })
  login: string;

  @Column()
  @ApiProperty({
    example: 'password',
    description: 'The password of the Auth',
  })
  password: string;

  @Column()
  @ApiProperty({
    example: true,
    description: 'The allowedWatch of the Auth',
  })
  allowedWatch: boolean;
}
