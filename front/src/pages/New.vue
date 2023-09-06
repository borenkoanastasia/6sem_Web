<template>
  <q-page class="column flex-center">
    <div class="text-h3">Добро пожаловать!</div>
    <!-- <header-element :meta="header" /> -->
    <!-- <input-form-component @input="onSave" /> -->
    <!-- <div class="col">
      <q-card class="q-ma-md">
        <q-card-section> Карточка животного </q-card-section>
      </q-card>

      <q-card class="q-ma-md">

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{}}
        </q-card-section>
      </q-card>
    </div> -->
  </q-page>
</template>

<script lang="ts">
// import { Todo, Meta } from 'components/models';
import HeaderElement from 'components/HeaderElement.vue';
import InputFormComponent from 'components/InputFormComponent.vue';
import { PropertiesEditorMeta } from 'src/models/viewModels';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NewPage',
  // eslint-disable-next-line vue/no-unused-components
  // components: { HeaderElement, InputFormComponent },
  methods: {
    onSave(res: any): void {
      console.log(res);
    },
  },
  setup() {
    return {
      header: {
        name: 'Животное',
        description: 'Информация о животном',
      },
      properties: {
        properties: [
          {
            name: 'Name',
            value: 1,
            validate_rule: (value: string) => {
              if (Number(value)) return true;
              return false;
            },
          },
          {
            name: 'Name',
            value: 'value',
            validate_rule: (value: string) => {
              return true;
            },
          },
          {
            name: 'Name',
            value: 'value',
            validate_rule: (value: string) => {
              return true;
            },
          },
          {
            name: 'Name',
            value: 'value',
            validate_rule: (value: string) => {
              return true;
            },
          },
          {
            name: 'Name',
            value: 'value',
            validate_rule: (value: string) => {
              return true;
            },
          },
        ],
      },
    };
  },
});
</script>
