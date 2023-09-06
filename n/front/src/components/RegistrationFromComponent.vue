<template>
  <div class="column q-ma-lg flex-center">
    <div class="text-h3 q-pa-xl text-brown-10">Регистрация</div>
    <!-- <div class="text-subtitle2 q-pa-md">{{ meta.description }}</div> -->
    <q-card class="column q-pa-lg flex-center">
      <q-list horizontal class="justify-center">
        <q-item
          class="q-pa-md"
          v-for="property of data"
          v-bind:key="property.name"
          :meta="property"
        >
          <q-item horizontal>
            <q-input
              outlined
              rounded-border
              class="text-brown-10"
              v-model="property.value"
              :rules="[property.validate_rule]"
              :label="property.name"
            />
          </q-item>
        </q-item>
      </q-list>
      <editor-actions-component @save="onSave" @delete="onDelete" />
    </q-card>
  </div>
</template>

<script lang="ts">
import {
  EditProperty,
  HeaderMeta,
  PropertiesEditorMeta,
} from 'src/models/viewModels';
import PropertiesEditorComponent from './PropertiesEditorComponent.vue';
import EditorActionsComponent from './EditorActionsComponent.vue';
import { defineComponent, PropType, ref } from 'vue';

export default defineComponent({
  name: 'RegistrationFromComponent',
  components: { EditorActionsComponent },
  props: {
    meta: {
      type: Array as PropType<EditProperty[]>,
      required: true,
    },
  },
  methods: {
    onSave() {
      this.$emit('save', this.meta);
    },
    onDelete() {
      this.$emit('delete');
    },
  },
  setup(props) {
    // eslint-disable-next-line vue/no-mutating-props
    var data = ref(props.meta);
    data.value.push(
      {
        name: 'Логин',
        value: '',
        validate_rule: (value) => {
          if (value) return true;
          return false;
        },
      },
      {
        name: 'Пароль',
        value: '',
        validate_rule: (value) => {
          if (value) return true;
          return false;
        },
      },
      {
        name: 'Пароль еще раз',
        value: '',
        validate_rule: (value) => {
          if (value) return true;
          return false;
        },
      }
    );
    return {
      data: data,
    };
  },
});
</script>
