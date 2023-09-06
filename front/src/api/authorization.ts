import axios from 'axios';
import { Token } from 'src/models/apiModels';
import { MyError, User } from 'src/models/commonModels';
import { Ref } from 'vue';
import { api_config } from './details/constants';
import { catch_error } from './details/helpers';

async function auth_login(
  user: User,

  error: Ref<MyError>,

  callback?: () => void,
  errorCallback?: () => void
) {
  await axios
    .post<Token>(`${api_config.default_url}/authorization`, user)

    .then((response) => {
      api_config.jwt_token = response.data;

      error.value = new MyError(null, null);

      if (callback) callback();
    })

    .catch((reason) => {
      api_config.jwt_token = null;
      catch_error(reason, error, errorCallback);
    });
}

// async function auth_profile(
//   answer: Ref<User> | Ref<null>,
//   error: Ref<MyError>,

//   callback?: () => void,
//   errorCallback?: () => void
// ) {
//   await axios
//     .get<User>(`${api_config.default_url}/profile`, {
//       headers: api_config.headers,
//     })
//     .then((response) => {
//       answer.value = response.data;

//       if (callback) callback();
//     })
//     .catch((reason) => {
//       catch_error(reason, error, errorCallback);
//     });
// }

export { auth_login };
// export { auth_login, auth_profile };
