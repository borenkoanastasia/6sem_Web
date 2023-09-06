<template>
  <q-page class="q-pa-lg column flex-center">
    <div class="text-h3 q-pa-lg">Регистрация</div>
    <div style="width: 300pt" class="q-pa-lg column q-gutter-y-md flex-center">
      <q-input
        dense
        outlined
        v-model="x"
        bg-color="white"
        label-color="black"
        label="Логин"
        class="full-width rounded-borders"
      ></q-input>
      <q-input
        dense
        outlined
        bg-color="white"
        label-color="black"
        label="Пароль"
        class="full-width rounded-borders"
        v-model="password"
        :type="isPwd ? 'password' : 'text'"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <q-input
        dense
        outlined
        bg-color="white"
        label-color="black"
        label="Пароль"
        class="full-width rounded-borders"
        v-model="password"
        :type="isPwd ? 'password' : 'text'"
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
      ></q-btn>
    </div>
  </q-page>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RegistrationPage',
  setup() {
    var x = '';
    var password = '';
    var isPwd = true;
    return { x: x, password: password, isPwd: isPwd };
  },
});
</script>
