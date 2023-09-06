<template>
  <q-page class="q-pa-lg column flex-center">
    <div class="text-h3 q-pa-lg">Вход</div>
    <div style="width: 300pt" class="q-pa-lg column q-gutter-y-md flex-center">
      <q-input
        ref="loginRef"
        dense
        outlined
        v-model="x"
        bg-color="white"
        label-color="black"
        label="Логин"
        class="full-width rounded-borders"
        :rules="[() => !error.name]"
      ></q-input>
      <q-input
        ref="passwordRef"
        dense
        outlined
        bg-color="white"
        label-color="black"
        label="Пароль"
        class="full-width rounded-borders"
        v-model="password"
        :type="isPwd ? 'password' : 'text'"
        :rules="[() => !error.name]"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <q-btn
        dense
        outlined
        v-model="x"
        color="brown-10"
        label="Войти"
        class="text-white full-width rounded-borders q-px-lg q-py-sm"
        :onclick="authorizate"
      ></q-btn>
    </div>
  </q-page>
</template>
<script lang="ts">
import { error } from 'console';
import { QBtn, QIcon, QInput, QPage } from 'quasar';
import { auth_login } from 'src/api/authorization';
import { MyError, User } from 'src/models/commonModels';
import { enter } from 'src/ts/Authorization';
import { defineComponent, Ref, ref } from 'vue';
import { useRouter } from 'vue-router';

// eslint-disable-next-line @typescript-eslint/no-unused-vars

export default defineComponent({
  name: 'AuthorizationPage',
  setup() {
    const router = useRouter();

    const x = ref('');
    const password = ref('');

    var isPwd = ref(true);
    // var token: Ref<Token> | Ref<null> = ref(null);
    var user: Ref<User> | Ref<null> = ref(null);
    var error: Ref<MyError> = ref(new MyError(null, null));
    // var error2: Ref<MyError> = ref(new MyError(null, null));

    var loginRef = ref<QInput | null>(null);
    var passwordRef = ref<QInput | null>(null);

    function errorCallback() {
      loginRef.value?.validate();
      passwordRef.value?.validate();
      if (loginRef.value?.hasError || passwordRef.value?.hasError) {
        console.log('errors');
      }
      console.log(error);
    }
    function callback() {
      enter();
      router.push({ path: '/account' });
    }
    function authorizate() {
      var user = { username: x.value, password: password.value };
      auth_login(user, error, callback, errorCallback);
    }
    function get_user() {
      // auth_profile(user, error2);
    }

    return {
      loginRef: loginRef,
      passwordRef: passwordRef,
      x: x,
      password: password,
      isPwd: isPwd,
      authorizate: authorizate,
      get_profile: get_user,
      user: user,
      error: error,
    };
  },
});
</script>
