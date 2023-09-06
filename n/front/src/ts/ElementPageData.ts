import { getDataById } from 'src/api/getData';
import { Dictionary, MyError, Property } from 'src/models/commonModels';
import { Entity } from 'src/models/dataModels';
import { ref, Ref } from 'vue';
import { getPropertiesList } from './Helpers';

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

  function elements_to_card_meta(arg: Entity) {
    properties_save.value = getPropertiesList(arg);
  }

  const error = ref(new MyError(null, null));

  getDataById(
    PageNamesConstractor[name].data_name_geter,
    id,
    ref(null),
    error,
    elements_to_card_meta
  );

  if (error.value.name) return false;

  return true;
}

export { make_element_page_meta_data };
