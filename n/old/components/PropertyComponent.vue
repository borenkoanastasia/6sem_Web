<template>
  <q-item horizontal>
    <q-item-section class="q-pa-md">{{ property.name }} </q-item-section>
    <q-separator vertical />
    <q-item-section class="q-pa-md"> {{ property.value }}</q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Meta, Property } from './models';

// var card: CardMeta = null;
export default defineComponent({
  name: 'PropertyComponent',
  props: {
    // props: {
    //   type: Object as PropType<Property>,
    // },
    property: {
      type: Object as PropType<Property>,
      required: true,
    },
  },
});
</script>
