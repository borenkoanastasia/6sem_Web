import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private repository: Repository<Account>,
  ) {}

  create(account: Account) {
    return this.repository.save(account);
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

  findOneByUsername(username: string) {
    return this.repository.findOne({
      loadRelationIds: true,
      where: {
        username: username,
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
  findByFistname(firstname: string) {
    return this.repository.find({
      loadRelationIds: true,
      where: {
        firstname: firstname,
      },
    });
  }
  findByLastname(lastname: string) {
    return this.repository.find({
      loadRelationIds: true,
      where: {
        lastname: lastname,
      },
    });
  }
  findByPosition(position: string) {
    return this.repository.find({
      loadRelationIds: true,
      where: {
        position: position,
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

  update(id: number, account: Account) {
    return this.repository.update({ id: id }, account);
  }

  remove(id: number) {
    return this.repository.delete({
      id: id,
    });
  }
}
