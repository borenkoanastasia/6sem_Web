<template>
  <div class="column q-ma-lg">
    <div class="text-h3 text-brown-10 q-pa-md">{{ meta.name }}</div>
    <div class="text-subtitle2 text-brown-10 q-pa-md">
      {{ meta.description }}
    </div>
  </div>
</template>

<script lang="ts">
import { HeaderMeta } from 'src/models/viewModels';
import { defineComponent, PropType, ref } from 'vue';

export default defineComponent({
  name: 'HeaderElementComponent',
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
