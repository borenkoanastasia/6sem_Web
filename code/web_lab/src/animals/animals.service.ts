import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from 'src/departments/entities/department.entity';
import { Repository } from 'typeorm';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { Animal } from './entities/animal.entity';

@Injectable()
export class AnimalsService {
  constructor(
    @InjectRepository(Animal)
    private repository: Repository<Animal>,
  ) {}

  create(animal: Animal) {
    return this.repository.save(animal);
  }

  findAll() {
    return this.repository.find({
      loadRelationIds: true,
    });
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
  findByAge(age: number) {
    return this.repository.find({
      loadRelationIds: true,
      where: {
        age: age,
      },
    });
  }
  findByType(type: string) {
    return this.repository.find({
      loadRelationIds: true,
      where: {
        type: type,
      },
    });
  }
  findByDepartment(department: number) {
    return this.repository.find({
      loadRelationIds: true,
      where: {
        department: { id: department },
      },
    });
  }

  update(id: number, animal: Animal) {
    return this.repository.update({ id: id }, animal);
  }

  remove(id: number) {
    return this.repository.delete({
      id: id,
    });
  }
}
