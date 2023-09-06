import { MyError } from 'src/models/commonModels';
import { Ref } from 'vue';

function catch_error(
  reason: any,
  error: Ref<MyError>,
  errorCallback?: () => void
) {
  console.log(reason);
  error.value = new MyError(reason.request.status, reason.request.statusText);

  if (errorCallback) errorCallback();
}

export { catch_error };
