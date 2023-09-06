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
import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';

@ApiTags('departments')
@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @Post()
  create(@Body() department: Department) {
    console.log('create', department);
    return this.departmentsService.create(department);
  }

  @Patch('')
  update(@Query('id') id: string, @Body() department: Department) {
    return this.departmentsService.update(+id, department);
  }

  @Delete('')
  remove(@Query('id') id: string) {
    return this.departmentsService.remove(+id);
  }

  findAll() {
    return this.departmentsService.findAll();
  }

  findOne(id: string) {
    return this.departmentsService.findOne(+id);
  }

  findOneByField(field_name: string, field_value: string) {
    switch (field_name) {
      case 'name': {
        return this.departmentsService.findByName(field_value);
      }
      case 'description': {
        return this.departmentsService.findByDescription(field_value);
      }
      case 'id': {
        return this.departmentsService.findOne(Number(field_value));
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
    @Query('id') id?: string | undefined,
    @Query('field_name') field_name?: string | undefined,
    @Query('field_value') field_value?: string | undefined,
  ) {
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
