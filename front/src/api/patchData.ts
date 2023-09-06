import axios from 'axios';
import { Entity } from 'src/models/dataModels';
import { MyError } from 'src/models/commonModels';
import { Ref } from 'vue';
import { api_config } from './details/constants';
import { catch_error } from './details/helpers';

async function patchDataById(
  data_name: string,
  id: string,

  answer: Entity,
  error: Ref<MyError>,

  callback?: () => void,
  errorCallback?: () => void
) {
  console.log(`${api_config.default_url}/${data_name}?id=${id}`, answer);
  await axios
    .patch(`${api_config.default_url}/${data_name}?id=${id}`, answer, {
      headers: api_config.headers,
    })
    .then((response) => {
      if (callback) callback();
    })
    .catch((reason) => {
      catch_error(reason, error, errorCallback);
    });
}

export { patchDataById };
