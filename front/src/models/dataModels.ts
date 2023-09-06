import { GetPropertyValue } from 'src/ts/Helpers';
import { getType } from 'tst-reflect';
import { Dictionary } from './commonModels';

interface Entity {
  id: string;
}

interface Department {
  id: number;
  name: string;
  description: string;
  image_url: string;
}

interface Animal {
  id: number;
  name: string;
  description: string;
  age: number;
  type: string;
  department: Department;
  image_url: string;
}

interface Account {
  id: number;
  username: string;
  age: number;
  firstname: string;
  lastname: string;
  position: string;
  department: Department;
  image_url: string;
}

interface PropertyMeta {
  name: string;
  code_name: string;
  rule: (value: string) => boolean;
}

function string_rule(value: string) {
  return value != '';
}
function number_rule(value: string) {
  if (Number(value)) return true;
  return false;
}

const DataPropertiesNames: Dictionary<Dictionary<PropertyMeta>> = {
  account: {
    id: { name: 'ID', code_name: 'id', rule: number_rule },
    username: { name: 'Логин', code_name: 'username', rule: string_rule },
    age: { name: 'Возраст', code_name: 'age', rule: number_rule },
    firstname: { name: 'Имя', code_name: 'firstname', rule: string_rule },
    lastname: { name: 'Фамилия', code_name: 'lastname', rule: string_rule },
    position: { name: 'Должность', code_name: 'position', rule: string_rule },
    department: { name: 'Отдел', code_name: 'department', rule: number_rule },

    image_url: {
      name: 'Изображение',
      code_name: 'image_url',
      rule: string_rule,
    },
  },
  department: {
    id: { name: 'ID', code_name: 'id', rule: number_rule },
    name: { name: 'Имя', code_name: 'name', rule: string_rule },
    description: {
      name: 'Описание',
      code_name: 'description',
      rule: string_rule,
    },
    image_url: {
      name: 'Изображение',
      code_name: 'image_url',
      rule: string_rule,
    },
  },
  animal: {
    id: { name: 'ID', code_name: 'id', rule: number_rule },
    name: { name: 'Имя', code_name: 'name', rule: string_rule },
    description: {
      name: 'Описание',
      code_name: 'description',
      rule: string_rule,
    },
    age: { name: 'Возраст', code_name: 'age', rule: number_rule },
    type: { name: 'Вид', code_name: 'type', rule: string_rule },
    department: { name: 'Отдел', code_name: 'department', rule: number_rule },

    image_url: {
      name: 'Изображение',
      code_name: 'image_url',
      rule: string_rule,
    },
  },
};

function getPropertyCodeName(name_entity: string, name_property: string) {
  const type = getType(DataPropertiesNames[name_entity]);
  let res = '';
  console.log(type.getProperties(), name_entity);
  type.getProperties().forEach((item) => {
    const x = GetPropertyValue(DataPropertiesNames[name_entity], item.name);
    if (name_property == x.name) {
      res = item.name;
    }
    console.log(x.name, name_property, res, x, item);
  });
  return res;
}

export {
  Department,
  Animal,
  Account,
  getPropertyCodeName,
  DataPropertiesNames,
  Entity,
};
