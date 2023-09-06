import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { AnimalsService } from './animals.service';
import { Animal } from './entities/animal.entity';

@Controller('animals')
@ApiTags('animals')
export class AnimalsController {
  constructor(private readonly animalsService: AnimalsService) {}

  @Post()
  create(@Body() animal: Animal) {
    return this.animalsService.create(animal);
  }

  @Patch()
  update(@Query('id') id: string, @Body() animal: Animal) {
    return this.animalsService.update(+id, animal);
  }

  @Delete()
  remove(@Query('id') id: string) {
    return this.animalsService.remove(+id);
  }

  findAll() {
    return this.animalsService.findAll();
  }

  findOne(id: string) {
    // console.log('query parameter', id);
    return this.animalsService.findOne(+id);
  }

  findOneByField(field_name: string, field_value: string) {
    // console.log('query parameter', field_name, field_value);
    switch (field_name) {
      case 'name': {
        return this.animalsService.findByName(field_value);
      }
      case 'description': {
        return this.animalsService.findByDescription(field_value);
      }
      case 'age': {
        return this.animalsService.findByAge(Number(field_value));
      }
      case 'type': {
        return this.animalsService.findByType(field_value);
      }
      case 'department': {
        return this.animalsService.findByDepartment(Number(field_value));
      }
      case 'id': {
        return this.animalsService.findOne(Number(field_value));
      }
    }
    return 'Not Found Field';
  }

  @ApiQuery({
    name: 'id',
    type: String,
    description: 'A parameter. Optional',
    required: false,
  })
  @ApiQuery({
    name: 'field_name',
    type: String,
    description: 'A parameter. Optional',
    required: false,
  })
  @ApiQuery({
    name: 'field_value',
    type: String,
    description: 'A parameter. Optional',
    required: false,
  })
  @Get()
  get(
    @Query('id') id?: string,
    @Query('field_name') field_name?: string,
    @Query('field_value') field_value?: string,
  ) {
    console.log(id, field_name, field_value);
    if (id) {
      return this.findOne(id);
    }
    if (field_name && field_value) {
      return this.findOneByField(field_name.toLowerCase(), field_value);
    }
    if (!id && !field_name && !field_value) {
      return this.findAll();
    }
  }
}
