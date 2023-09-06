import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';

@ApiTags('accounts')
@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  create(@Body() account: Account) {
    return this.accountsService.create(account);
  }

  @UseGuards(JwtAuthGuard)
  @Patch()
  update(@Query('id') id: string, @Body() account: Account) {
    return this.accountsService.update(+id, account);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  remove(@Query('id') id: string) {
    return this.accountsService.remove(+id);
  }

  findAll() {
    return this.accountsService.findAll();
  }

  findOne(id: string) {
    return this.accountsService.findOne(+id);
  }

  findOneByField(field_name: string, field_value: string) {
    switch (field_name) {
      case 'username': {
        return this.accountsService.findOneByUsername(field_value);
      }
      case 'firstname': {
        return this.accountsService.findByFistname(field_value);
      }
      case 'age': {
        return this.accountsService.findByAge(Number(field_value));
      }
      case 'lastname': {
        return this.accountsService.findByLastname(field_value);
      }
      case 'department': {
        return this.accountsService.findByDepartment(Number(field_value));
      }
      case 'id': {
        return this.accountsService.findOne(Number(field_value));
      }
    }
    return 'Not Found Field';
  }

  @UseGuards(JwtAuthGuard)
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
