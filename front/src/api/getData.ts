import axios from 'axios';
import { Entity } from 'src/models/dataModels';
import { MyError, Property } from 'src/models/commonModels';
import { Ref } from 'vue';
import { api_config } from './details/constants';
import { catch_error } from './details/helpers';

async function getAllData(
  data_name: string,

  answer: Ref<Entity[]>,
  error: Ref<MyError>,

  callback?: (arg0: Entity[]) => void,
  errorCallback?: () => void
) {
  await axios
    .get<Entity[]>(`${api_config.default_url}/${data_name}`, {
      headers: api_config.headers,
    })

    .then((response) => {
      answer.value = response.data;

      if (callback) callback(answer.value);
    })

    .catch((reason) => {
      catch_error(reason, error, errorCallback);
    });
}

async function getDataById(
  data_name: string,
  id: string,

  answer: Ref<Entity> | Ref<null>,
  error: Ref<MyError>,

  callback?: (arg0: Entity) => void,
  errorCallback?: () => void
) {
  console.log(`${api_config.default_url}/${data_name}?id=${id}`);
  await axios
    .get<Entity>(`${api_config.default_url}/${data_name}?id=${id}`, {
      headers: api_config.headers,
    })
    .then((response) => {
      answer.value = response.data;
      if (callback) callback(answer.value);
    })
    .catch((reason) => {
      catch_error(reason, error, errorCallback);
    });
}

async function getDataByField(
  data_name: string,
  field: Property,

  answer: Ref<Entity[]>,
  error: Ref<MyError>,

  callback?: (arg0: Entity[]) => void,
  errorCallback?: () => void
) {
  console.log(
    `${api_config.default_url}/${data_name}?field_name=${field.name}&field_value=${field.value}`,
    field
  );
  await axios
    .get<Entity[]>(
      `${api_config.default_url}/${data_name}?field_name=${field.name}&field_value=${field.value}`,
      {
        headers: api_config.headers,
      }
    )
    .then((response) => {
      answer.value = response.data;
      if (callback) callback(answer.value);
    })
    .catch((reason) => {
      catch_error(reason, error, errorCallback);
    });
}

export { getAllData, getDataById, getDataByField };

// import { Ref } from 'vue';
// import { useQuasar } from 'quasar';
// import axios from 'axios';
// import { Department, Entity } from 'src/components/models';
// import { Token } from './models';
// import { api_config } from './constants';

// async function getDepartmentsData(
//   answer: Ref<Entity[]>,
//   callback: (arg0: Entity[]) => void
// ) {
//   await axios
//     .get<Department[]>(`${api_config.default_url}/department`, {
//       headers: api_config.headers,
//     })
//     .then((response) => {
//       answer.value = response.data;
//       callback(answer.value);
//     });
// }

// async function getDepartmentData(
//   id: string,
//   answer: Ref<Entity> | Ref<null>,
//   callback: (arg0: Entity) => void
// ) {
//   await axios
//     .get<Department>(`${api_config.default_url}/department/${id}`, {
//       headers: api_config.headers,
//     })
//     .then((response) => {
//       answer.value = response.data;
//       callback(answer.value);
//     });
// }

// export { getDepartmentData, getDepartmentsData };

// import { Ref } from 'vue';
// import { useQuasar } from 'quasar';
// import axios from 'axios';
// import { Animal, Entity } from 'src/components/models';
// import { Token } from './models';
// import { api_config } from './constants';

// async function getAnimalsData(
//   answer: Ref<Entity[]>,
//   callback: (arg0: Entity[]) => void
// ) {
//   await axios
//     .get<Animal[]>(`${api_config.default_url}/animal`, {
//       headers: api_config.headers,
//     })
//     .then((response) => {
//       answer.value = response.data;
//       callback(answer.value);
//     });
// }
// async function getAnimalData(
//   id: string,
//   answer: Ref<Entity> | Ref<null>,
//   callback: (arg0: Entity) => void
// ) {
//   await axios
//     .get<Animal>(`${api_config.default_url}/animal/${id}`, {
//       headers: api_config.headers,
//     })
//     .then((response) => {
//       answer.value = response.data;
//       callback(answer.value);
//     });
// }

// // async function getAnimalData(id: string) {
// //   return await axios.get<Animal>(`${URL}/animal/${id}`);
// // }

// export { getAnimalData, getAnimalsData };
