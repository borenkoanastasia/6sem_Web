import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Department)
    private repository: Repository<Department>,
  ) {}

  create(department: Department) {
    console.log(department);

    return this.repository.save(department);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.find({
      loadRelationIds: true,
      where: {
        id: id,
      },
    });
  }
  findByName(name: string) {
    return this.repository.find({
      loadRelationIds: true,
      where: {
        name: name,
      },
    });
  }
  findByDescription(description: string) {
    return this.repository.find({
      loadRelationIds: true,
      where: {
        description: description,
      },
    });
  }

  update(id: number, animal: Department) {
    return this.repository.update({ id: id }, animal);
  }

  remove(id: number) {
    return this.repository.delete({
      id: id,
    });
  }
}
