import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsModule } from 'src/accounts/accounts.module';
import { AccountsService } from 'src/accounts/accounts.service';
import { Account } from 'src/accounts/entities/account.entity';
import { Repository } from 'typeorm';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([Account]), Repository],
  providers: [UsersService, AccountsService],
  exports: [UsersService],
})
export class UsersModule {}
