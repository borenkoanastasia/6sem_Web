import { Dictionary, Property } from 'src/models/commonModels';
import { getType } from 'tst-reflect';

export function getSomething<T>(name: string, some_dictionary: Dictionary<T>) {
  if (some_dictionary[name]) return some_dictionary[name];
  return name;
}

function GetPropertyValue(obj1: any, dataToRetrieve: string) {
  return dataToRetrieve
    .split('.') // split string based on `.`
    .reduce(function (o, k) {
      return o && o[k]; // get inner property if `o` is defined else get `o` and return
    }, obj1); // set initial value as object
}

export function getPropertiesList(arg0: any) {
  const properties: Property[] = [];
  const type = getType(arg0);
  type.getProperties().forEach((it) => {
    properties.push({
      name: it.name,
      value: GetPropertyValue(arg0, it.name),
    });
  });
  return properties;
}

export function getPropertiesStringList(arg0: any) {
  const properties: string[] = [];
  const type = getType(arg0);
  type
    .getProperties()
    .forEach((it) => properties.push(GetPropertyValue(arg0, it.name).name));
  return properties;
}

// PROPERTIES

export const PropertyNames: Dictionary<string> = {
  id: 'ID',
  name: 'Название',
  age: 'Возраст',
  description: 'Пояснение',
  url_image: 'Изображение',
  type: 'Вид',
};

export function getPropertyName(name: string) {
  return getSomething(name, PropertyNames);
}
export function getPropertyCode(name: string) {
  const list = getPropertiesList(PropertyNames);

  for (const i of list) {
    if (i.value == name) return i.name;
  }

  return name;
}
