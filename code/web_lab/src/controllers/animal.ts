// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   Param,
//   Post,
//   Put,
// } from '@nestjs/common';
// import { Animal } from 'src/entities/animal';
// import { RepositoryService } from '../services/repository';
// import { Entities } from '../entities/enum_entities';
// import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
// import { UpdateResult } from 'typeorm';

// @ApiBearerAuth()
// @ApiTags('animal')
// @Controller('animal')
// export class AnimalController {
//   constructor(private repositoryService: RepositoryService) {}

//   @Get()
//   getAll(): Promise<Animal[]> {
//     const res = this.repositoryService.findAll<Animal>(Entities.animal);
//     return res;
//   }

//   @Get(':id')
//   getData(@Param('id') id: number): Promise<Animal> {
//     console.log('id: ' + id);
//     const res = this.repositoryService.findOne<Animal>(Entities.animal, id);
//     return res;
//   }

//   @Put()
//   setData(@Body() animal: Animal): Promise<Animal> {
//     const res = this.repositoryService.save<Animal>(Entities.animal, animal);
//     return res;
//   }

//   @Post(':id')
//   updateData(
//     @Param('id') id: number,
//     @Body() animal: Animal,
//   ): Promise<UpdateResult> {
//     const res = this.repositoryService.update<Animal>(
//       Entities.animal,
//       id,
//       animal,
//     );
//     return res;
//   }

//   @Delete(':id')
//   deleteData(@Param('id') id: number): Promise<void> {
//     const res = this.repositoryService.remove<Animal>(Entities.animal, id);
//     return res;
//   }
// }
