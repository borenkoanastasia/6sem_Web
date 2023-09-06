// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   Param,
//   Post,
//   Put,
// } from '@nestjs/common';
// import { RepositoryService } from '../services/repository';
// import { Entities } from '../entities/enum_entities';
// import { Employee } from 'src/entities/employee';
// import {
//   ApiBearerAuth,
//   ApiOperation,
//   ApiResponse,
//   ApiTags,
// } from '@nestjs/swagger';
// import { UpdateResult } from 'typeorm';

// @ApiBearerAuth()
// @ApiTags('employee')
// @Controller('employee')
// export class EmployeeController {
//   constructor(private repositoryService: RepositoryService) {}

//   @Get()
//   @ApiOperation({ summary: 'Get a employees' })
//   @ApiResponse({
//     status: 200,
//     description: 'The found employee',
//     type: Employee,
//   })
//   getAll(): Promise<Employee[]> {
//     const res = this.repositoryService.findAll<Employee>(Entities.employee);
//     return res;
//   }

//   @Get(':id')
//   @ApiResponse({
//     status: 200,
//     description: 'The found employee',
//     type: Employee,
//   })
//   getData(@Param('id') id: number): Promise<Employee> {
//     const res = this.repositoryService.findOne<Employee>(Entities.employee, id);
//     return res;
//   }

//   @Put()
//   setData(@Body() employee: Employee): Promise<Employee> {
//     const res = this.repositoryService.save<Employee>(
//       Entities.employee,
//       employee,
//     );
//     return res;
//   }

//   @Post(':id')
//   updateData(
//     @Param('id') id: number,
//     @Body() employee: Employee,
//   ): Promise<UpdateResult> {
//     const res = this.repositoryService.update<Employee>(
//       Entities.employee,
//       id,
//       employee,
//     );
//     return res;
//   }

//   @Delete(':id')
//   deleteData(@Param('id') id: number): Promise<void> {
//     const res = this.repositoryService.remove<Employee>(Entities.employee, id);
//     return res;
//   }
// }
