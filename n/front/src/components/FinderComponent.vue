<template>
  <q-toolbar class="bg-brown-10">
    <div class="row no-wrap q-pa-sm q-mx-lg q-gutter-x-md">
      <q-space />
      <div class="text-bold q-pa-sm text-white text-subtitle2">Поиск</div>
      <q-space />
      <q-select
        dark
        dense
        standout
        v-model="field_name"
        :options="options"
        label="Поле"
        class="col-4 column"
      />
      <q-input
        dark
        dense
        standout
        v-model="field_value"
        label="Значение"
        class="col-7 column"
      />
      <div class="col-1 column">
        <q-btn
          class="text-white text-body1"
          dark
          dense
          standout
          flat
          rounded
          icon="search"
          :onclick="find"
        />
      </div>
    </div>
  </q-toolbar>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { Property } from 'src/models/commonModels';

export default defineComponent({
  name: 'FinderComponent',
  props: {
    options: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  methods: {
    find() {
      var find_data: Property = {
        name: this.field_name,
        value: this.field_value,
      };
      this.$emit('find', find_data);
    },
  },
  setup() {
    return {
      field_name: ref(''),
      field_value: ref(''),
    };
  },
});
</script>
