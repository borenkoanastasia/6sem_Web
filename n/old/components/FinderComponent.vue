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
  <!-- <q-toolbar class="bg-brown-10"> -->
  <!-- <div class="row no-wrap content-center q-mx-md q-gutter-x-md">
      <div class="col-6 q-py-md">
        <q-select
          dark
          dense
          standout
          v-model="model"
          :options="options"
          label="Поле"
        />
      </div>

      <div class="col-12 q-py-md">
        <q-input dark dense standout v-model="text" label="Значение" />
      </div>
      <div class="col-3 q-py-md"></div>
    </div> -->
  <!-- </q-toolbar> -->
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { FieldData } from './models';

// var card: CardMeta = null;

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
      var find_data: FieldData = {
        name: this.field_name,
        value: this.field_value,
      };
      this.$emit('find', find_data);
    },
  },
  setup() {
    return {
      field_name: ref(''),
      // options: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'],
      field_value: ref(''),
    };
    //   setup(props) {
    //     card = cardMeta;
    //   },
    //   setup(props) {
    //     return { ...useClickCount(), ...useDisplayTodo(toRef(props, 'todos')) };
    //   },
  },
});
</script>
