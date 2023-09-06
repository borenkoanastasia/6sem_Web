// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   Param,
//   Post,
//   Put,
// } from '@nestjs/common';
// import { Auth } from 'src/entities/auth';
// import { RepositoryService } from '../services/repository';
// import { Entities } from '../entities/enum_entities';
// import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
// import { UpdateResult } from 'typeorm';

// @ApiBearerAuth()
// @ApiTags('auth/auth')
// @Controller('auth/auth')
// export class AuthController {
//   constructor(private repositoryService: RepositoryService) {}

//   @Get()
//   getAll(): Promise<Auth[]> {
//     const res = this.repositoryService.findAll<Auth>(Entities.auth);
//     return res;
//   }

//   @Get(':id')
//   getData(@Param('id') id: number): Promise<Auth> {
//     console.log('id: ' + id);
//     const res = this.repositoryService.findOne<Auth>(Entities.auth, id);
//     return res;
//   }

//   @Put()
//   setData(@Body() auth: Auth): Promise<Auth> {
//     const res = this.repositoryService.save<Auth>(Entities.auth, auth);
//     return res;
//   }

//   @Post(':id')
//   updateData(
//     @Param('id') id: number,
//     @Body() auth: Auth,
//   ): Promise<UpdateResult> {
//     const res = this.repositoryService.update<Auth>(Entities.auth, id, auth);
//     return res;
//   }

//   @Delete(':id')
//   deleteData(@Param('id') id: number): Promise<void> {
//     const res = this.repositoryService.remove<Auth>(Entities.auth, id);
//     return res;
//   }
// }
