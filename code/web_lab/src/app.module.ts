import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './entities/auth';
// import { Employee } from './entities/employee';
// import { Department } from './entities/department';
// import { Animal } from './entities/animal';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AnimalsModule } from './animals/animals.module';
import { DepartmentsModule } from './departments/departments.module';
import { Department } from './departments/entities/department.entity';
import { Animal } from './animals/entities/animal.entity';
import { AccountsModule } from './accounts/accounts.module';
import { Account } from './accounts/entities/account.entity';

@Module({
  imports: [
    // HttpModule,
    TypeOrmModule.forFeature([Animal, Department]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', //reader |  postgres
      password: 'example', //reader |  example
      database: 'web_lab',
      entities: [Department, Animal, Account],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    AnimalsModule,
    DepartmentsModule,
    AccountsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // constructor(public dataSource: DataSource) {}
}
