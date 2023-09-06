import { getDataById } from 'src/api/getData';
import { Dictionary, MyError, Property } from 'src/models/commonModels';
import { DataPropertiesNames, Entity } from 'src/models/dataModels';
import { EditProperty } from 'src/models/viewModels';
import { getType } from 'tst-reflect';
import { ref, Ref } from 'vue';
import { getPropertiesList, GetPropertyValue } from './Helpers';

interface PageNamesConstractData {
  name: string;
  data_name_geter: string;
}

const PageNamesConstractor: Dictionary<PageNamesConstractData> = {
  animal: {
    name: 'Животное',
    data_name_geter: 'animals',
  },
  department: {
    name: 'Отдел',
    data_name_geter: 'departments',
  },
};

// COMMON

function make_element_page_meta_data(
  id: string,
  name: string,
  properties_save: Ref<Property[]>,
  meta_save: Ref<string>
) {
  if (!PageNamesConstractor[name]) return false;

  meta_save.value = PageNamesConstractor[name].name;

  function elements_to_card_meta(arg: any) {
    if (Array.isArray(arg)) properties_save.value = getPropertiesList(arg[0]);
    else properties_save.value = getPropertiesList(arg);
    console.log(arg);
  }

  const error = ref(new MyError(null, null));

  getDataById(
    PageNamesConstractor[name].data_name_geter,
    id,
    ref(null),
    error,
    elements_to_card_meta
  );
  console.log(properties_save);

  if (error.value.name) return false;

  return true;
}

function make_create_page_meta_data(
  name: string,
  properties_save: Ref<EditProperty[]>,
  meta_save: Ref<string>
) {
  if (!PageNamesConstractor[name]) return false;

  meta_save.value = PageNamesConstractor[name].name;

  const type = getType(DataPropertiesNames[name]);
  type.getProperties().forEach((it) => {
    if (it.name == 'id') {
      return;
    }
    properties_save.value.push({
      name: it.name,
      value: '', //GetPropertyValue(
      //   DataPropertiesNames[name],
      //   it.name
      // ) as unknown as string,
      validate_rule: DataPropertiesNames[name][it.name].rule,
    });
  });
  console.log(type.getProperties(), properties_save.value);

  // getPropertiesList(DataPropertiesNames[name]).forEach((item) => {
  //   properties_save.value.push({
  //     value: '',
  //     name: item.value.name,
  //     validate_rule: item.value.rule,
  //   });
  // });

  const error = ref(new MyError(null, null));

  // getDataById(
  //   PageNamesConstractor[name].data_name_geter,
  //   id,
  //   ref(null),
  //   error,
  //   elements_to_card_meta
  // );

  if (error.value.name) return false;

  return true;
}

export { make_element_page_meta_data, make_create_page_meta_data };
