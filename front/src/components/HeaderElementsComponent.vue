<template>
  <div class="row">
    <div class="column q-ma-lg">
      <div class="text-h3 text-brown-10 q-pa-md">{{ meta.name }}</div>
      <div class="text-subtitle2 text-brown-10 q-pa-md">
        {{ meta.description }}
      </div>
    </div>

    <q-space />

    <div class="column">
      <q-space />
      <q-btn
        class="q-ma-lg bg-brown-10 text-white"
        label="Добавить"
        icon="add"
        :onclick="onAdd"
      />
      <q-space />
    </div>
  </div>
</template>

<script lang="ts">
import { HeaderMeta } from 'src/models/viewModels';
import { defineComponent, PropType, ref } from 'vue';

export default defineComponent({
  name: 'HeaderElementsComponent',
  props: {
    meta: {
      type: Object as PropType<HeaderMeta>,
      required: true,
    },
  },
  methods: {
    onAdd() {
      this.$emit('add');
    },
  },
});
</script>
