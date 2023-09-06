// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   Param,
//   Post,
//   Put,
// } from '@nestjs/common';
// import { Department } from 'src/entities/department';
// import { RepositoryService } from '../services/repository';
// import { Entities } from '../entities/enum_entities';
// import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
// import { UpdateResult } from 'typeorm';

// @ApiBearerAuth()
// @ApiTags('department')
// @Controller('department')
// export class DepartmentController {
//   constructor(private repositoryService: RepositoryService) {}

//   @Get()
//   getAll(): Promise<Department[]> {
//     const res = this.repositoryService.findAll<Department>(Entities.department);
//     return res;
//   }

//   @Get(':id')
//   getData(@Param('id') id: number): Promise<Department> {
//     console.log('id: ' + id);
//     const res = this.repositoryService.findOne<Department>(
//       Entities.department,
//       id,
//     );
//     return res as Promise<Department>;
//   }

//   @Put()
//   setData(@Body() department: Department): Promise<Department> {
//     const res = this.repositoryService.save<Department>(
//       Entities.department,
//       department,
//     );
//     return res as Promise<Department>;
//   }

//   @Post(':id')
//   updateData(
//     @Param('id') id: number,
//     @Body() department: Department,
//   ): Promise<UpdateResult> {
//     const res = this.repositoryService.update<Department>(
//       Entities.department,
//       id,
//       department,
//     );
//     return res as Promise<UpdateResult>;
//   }

//   @Delete(':id')
//   deleteData(@Param('id') id: number): Promise<void> {
//     const res = this.repositoryService.remove<Department>(
//       Entities.department,
//       id,
//     );
//     return res;
//   }
// }
