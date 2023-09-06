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
    id: { name: 'ID', rule: number_rule },
    username: { name: 'Логин', rule: string_rule },
    age: { name: 'Возраст', rule: number_rule },
    firstname: { name: 'Имя', rule: string_rule },
    lastname: { name: 'Фамилия', rule: string_rule },
    position: { name: 'Должность', rule: string_rule },
    department: { name: 'Отдел', rule: number_rule },
  },
  department: {
    id: { name: 'ID', rule: number_rule },
    name: { name: 'Имя', rule: string_rule },
    description: { name: 'Описание', rule: string_rule },
  },
  animal: {
    id: { name: 'ID', rule: number_rule },
    name: { name: 'Имя', rule: string_rule },
    description: { name: 'Описание', rule: string_rule },
    age: { name: 'Возраст', rule: number_rule },
    type: { name: 'Вид', rule: string_rule },
    department: { name: 'Отдел', rule: number_rule },
  },
};
// Dictionary;

export { Department, Animal, Account, DataPropertiesNames, Entity };
