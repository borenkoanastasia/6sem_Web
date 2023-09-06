import axios from 'axios';
import { boot } from 'quasar/wrappers';
// import axios, { AxiosInstance } from 'axios';

// const host = 'http://localhost:0080/api/v1/';

// export { host };

// const instance: AxiosInstance = axios.create({
//   withCredentials: true,
//   baseURL: host + '/api/',
// });

// declare module 'vue/types/vue' {
//   interface Vue {
//     $axios: AxiosInstance;
//     $host: string;
//   }
// }

// export { instance as axios };

// export default boot(({ Vue }) => {
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
//   Vue.prototype.$axios = instance;
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
//   Vue.prototype.$host = host;
// });

const api = axios.create({ baseURL: 'hhttp://localhost:0080/api/v1' });

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { api };
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
// export default boot(async (/* { app, router, ... } */) => {
//   // something to do
// });
