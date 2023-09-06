import axios from 'axios';
import { Notify, useQuasar } from 'quasar';
import { MyError } from 'src/models/commonModels';
import { Entity } from 'src/models/dataModels';
import { Ref } from 'vue';
import { api_config } from './details/constants';
import { catch_error } from './details/helpers';

async function deleteDataById(
  data_name: string,
  id: string,

  error: Ref<MyError>,

  callback?: () => void,
  errorCallback?: () => void
) {
  await axios
    .delete<Entity>(`${api_config.default_url}/${data_name}?id=${id}`, {
      headers: api_config.headers,
    })
    .then((response) => {
      if (callback) callback();
    })
    .catch((reason) => {
      catch_error(reason, error, errorCallback);
    });
}
export { deleteDataById };
