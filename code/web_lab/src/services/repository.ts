// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Animal } from 'src/entities/animal';
// // import { Auth } from 'src/entities/auth';
// import { Base } from 'src/entities/base';
// import { Department } from 'src/entities/department';
// import { Employee } from 'src/entities/employee';
// import { Repository, UpdateResult } from 'typeorm';
// import { Entities } from '../entities/enum_entities';

// @Injectable()
// export class RepositoryService {
//   constructor(
//     @InjectRepository(Animal)
//     private animalRepository: Repository<Animal>,
//     @InjectRepository(Department)
//     private departmentRepository: Repository<Department>,
//     // @InjectRepository(Auth)
//     // private authRepository: Repository<Auth>,
//     @InjectRepository(Employee)
//     private employeeRepository: Repository<Employee>,
//   ) {}

//   private chouseRepository(x: Entities): Repository<Base> {
//     switch (x) {
//       case Entities.animal:
//         return this.animalRepository;
//       // case Entities.auth:
//       //   return this.authRepository;
//       case Entities.department:
//         return this.departmentRepository;
//       case Entities.employee:
//         return this.employeeRepository;
//       default:
//         return null;
//     }
//   }

//   findAll<T>(x: Entities): Promise<T[]> {
//     return this._findAll<T>(
//       this.chouseRepository(x) as Repository<T>,
//     ) as Promise<T[]>;
//   }

//   save<T>(x: Entities, object: T): Promise<T> {
//     return this._save<T>(
//       this.chouseRepository(x) as Repository<T>,
//       object,
//     ) as Promise<T>;
//   }

//   findOne<T>(x: Entities, id: number): Promise<T> {
//     console.log(this.chouseRepository(x) as Repository<T>, x);
//     // if (this.chouseRepository(x) == null)
//     return this._findOne<T>(this.chouseRepository(x) as Repository<T>, id);
//   }

//   remove<T>(x: Entities, id: number): Promise<void> {
//     return this._remove<T>(this.chouseRepository(x) as Repository<T>, id);
//   }

//   update<T>(animal: Entities, id: number, entity: Base): Promise<UpdateResult> {
//     switch (animal) {
//       case Entities.animal:
//         return this._updateAnimal(id, entity as Animal);
//       // case Entities.auth:
//       //   return this._updateAuth(id, entity as Auth);
//       case Entities.department:
//         return this._updateDepartment(id, entity as Department);
//       case Entities.employee:
//         return this._updateEmployee(id, entity as Employee);
//       default:
//         return null;
//     }
//   }

//   private _findAll<T>(repository: Repository<T>): Promise<T[]> {
//     return repository.find();
//   }

//   private _save<T>(repository: Repository<T>, object: T): Promise<T> {
//     return repository.save(object);
//   }

//   private _findOne<T>(repository: Repository<T>, id: number): Promise<T> {
//     console.log(repository);
//     return (repository as Repository<Base>).findOneBy({
//       id,
//     }) as Promise<T>;
//   }

//   private async _remove<T>(
//     repository: Repository<T>,
//     id: number,
//   ): Promise<void> {
//     await repository.delete(id);
//   }

//   private _updateAnimal(id: number, object: Animal): Promise<UpdateResult> {
//     return this.animalRepository.update({ id: id }, object);
//   }

//   private _updateDepartment(
//     id: number,
//     object: Department,
//   ): Promise<UpdateResult> {
//     return this.departmentRepository.update({ id: id }, object);
//   }

//   // private _updateAuth(id: number, object: Auth): Promise<UpdateResult> {
//   //   return this.authRepository.update({ id: id }, object);
//   // }

//   private _updateEmployee(id: number, object: Employee): Promise<UpdateResult> {
//     return this.employeeRepository.update({ id: id }, object);
//   }
// }
