<template>
  <div class="column q-ma-lg flex-center">
    <div class="text-h3 q-pa-xl text-brown-10">Вход</div>
    <!-- <div class="text-subtitle2 q-pa-md">{{ meta.description }}</div> -->
    <q-card class="column flex-center q-pa-lg">
      <q-card-section>
        <properties-editor-component :ref="refProperties" :meta="properties" />
      </q-card-section>
      <q-card-section class="full-width">
        <q-btn
          class="q-px-md full-width"
          full-width
          label="Войти"
          color="brown-10"
          :onclick="onInput"
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { User } from 'src/models/commonModels';
import { HeaderMeta } from 'src/models/viewModels';
import { defineComponent, PropType, ref } from 'vue';
import PropertiesEditorComponent from './PropertiesEditorComponent.vue';

export default defineComponent({
  name: 'InputFormComponent',
  components: { PropertiesEditorComponent },
  props: {},
  methods: {
    onInput() {
      this.$emit('input', this.properties);
    },
  },
  setup() {
    var properties = [
      {
        name: 'Логин',
        value: '',
        validate_rule: (value: string) => {
          return value != '';
        },
      },
      {
        name: 'Пароль',
        value: '',
        validate_rule: (value: string) => {
          return value != '';
        },
      },
    ];
    return {
      properties: { properties: properties },
      refProperties: ref(),
    };
  },
});
</script>
