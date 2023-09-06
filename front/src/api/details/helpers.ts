import { MyError } from 'src/models/commonModels';
import { Ref } from 'vue';
import { Notify } from 'quasar';

function catch_error(
  reason: any,
  error: Ref<MyError>,
  errorCallback?: () => void
) {
  console.log(reason);

  Notify.create({
    message: 'Ошибка, действие  не позволено.',
  });
  error.value = new MyError(reason.request.status, reason.request.statusText);

  if (errorCallback) errorCallback();
}

export { catch_error };
