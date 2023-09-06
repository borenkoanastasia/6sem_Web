import { getAllData, getDataByField } from 'src/api/getData';
import { Dictionary, MyError, Property } from 'src/models/commonModels';
import {
  Account,
  Animal,
  Department,
  Entity,
  getPropertyCodeName,
} from 'src/models/dataModels';
import { CardMeta, HeaderMeta } from 'src/models/viewModels';
import { ref, Ref } from 'vue';
import { getPropertyCode } from './Helpers';

// ANIMAL

function animal_to_card_meta(entity: Entity): CardMeta {
  const animal = entity as unknown as Animal;
  return {
    id: animal.id,
    name: animal.name,
    description: animal.description,
    url_image: animal.image_url,
    // entity_type: 'animal',
  };
}

// DEPARTMENT

function department_to_card_meta(entity: Entity): CardMeta {
  const department = entity as unknown as Department;
  return {
    id: department.id,
    name: department.name,
    description: department.description,
    url_image: department.image_url,
  };
}

function account_to_card_meta(entity: Entity): CardMeta {
  const account = entity as unknown as Account;
  return {
    id: account.id,
    name: account.username,
    description: account.firstname + ' ' + account.lastname,
    url_image: account.image_url,
    // entity_type: 'department',
  };
}

// DATA

interface PageConstructData {
  meta: HeaderMeta;
  data_name_geter: string;
  to_carder: (animal: Entity) => CardMeta;
}

const PageConstructs: Dictionary<PageConstructData> = {
  animals: {
    meta: {
      name: 'Животные',
      description: 'Здесь представлены животные зоопарка',
    },
    data_name_geter: 'animals',
    to_carder: animal_to_card_meta,
  },
  departments: {
    meta: {
      name: 'Отделы',
      description: 'Здесь представлены отделы зоопарка',
    },
    data_name_geter: 'departments',
    to_carder: department_to_card_meta,
  },
  accounts: {
    meta: {
      name: 'Сотрудники',
      description: 'Здесь представлены сотрудники зоопарка',
    },
    data_name_geter: 'accounts',
    to_carder: account_to_card_meta,
  },
};

const ChildPageNameConstruct: Dictionary<string> = {
  animals: 'animal',
  departments: 'department',
  accounts: 'account',
};

// COMMON

function make_elements_page_meta_data(
  name: string,
  data_save: Ref<CardMeta[]>,
  meta_save: Ref<HeaderMeta>,
  child_name: Ref<string>
) {
  if (!PageConstructs[name]) {
    return false;
  }

  meta_save.value = PageConstructs[name].meta;

  function elements_to_card_meta(elements: Entity[]) {
    data_save.value = [];
    elements.forEach((element) => {
      data_save.value?.push(PageConstructs[name].to_carder(element));
    });
  }
  const error = ref(new MyError(null, null));
  const res = ref([]);

  getAllData(
    PageConstructs[name].data_name_geter,
    res,
    error,
    elements_to_card_meta
  );

  console.log(res, error);

  if (error.value.name) return false;

  child_name.value = ChildPageNameConstruct[name];

  return true;
}

function make_filter_page_data(
  name: string,
  data_save: Ref<CardMeta[]>,
  find_data: Property
) {
  if (find_data.name == '' && find_data.value == '') return false;

  find_data.name = getPropertyCodeName(
    ChildPageNameConstruct[name],
    find_data.name
  );
  console.log(find_data);

  const error = ref(new MyError(null, null));

  function elements_to_card_meta(elements: Entity[]) {
    data_save.value = [];
    if (elements.length == 0) {
      return;
    }
    if (elements.length) {
      elements.forEach((element) => {
        data_save.value?.push(PageConstructs[name].to_carder(element));
      });
    } else {
      if (elements) {
        data_save.value?.push(
          PageConstructs[name].to_carder(elements as unknown as Entity)
        );
      }
    }

    console.log(data_save);
  }

  getDataByField(
    PageConstructs[name].data_name_geter,
    find_data,
    ref([]),
    error,
    elements_to_card_meta
  );

  console.log(data_save, error);

  if (error.value.name) return false;

  data_save.value = data_save.value;

  return name;
}

export {
  make_elements_page_meta_data,
  ChildPageNameConstruct,
  make_filter_page_data,
};
