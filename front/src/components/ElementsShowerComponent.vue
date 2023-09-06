<template>
  <header-elements-component :meta="header_meta" />
  <finder-component :options="finder_options" />
  <cards-component
    :meta="card_meta"
    @add="onAdd"
    @open="onOpen"
    @edit="onEdit"
    @delete="onDelete"
  />
</template>

<script lang="ts">
import { CardMeta, HeaderMeta } from 'src/models/viewModels';
import { defineComponent, PropType } from 'vue';
import HeaderElementsComponent from './HeaderElementsComponent.vue';
import CardsComponent from './CardsComponent.vue';
import FinderComponent from './FinderComponent.vue';

export default defineComponent({
  name: 'CardComponent',
  components: {
    HeaderElementsComponent,
    // FinderComponent,
    // CardsComponent,
  },
  props: {
    header_meta: {
      type: Object as PropType<HeaderMeta>,
      required: true,
    },
    finder_options: {
      type: Array as PropType<string[]>,
      required: true,
    },
    card_meta: {
      type: Array as PropType<CardMeta[]>,
      required: true,
    },
  },
  methods: {
    onAdd() {
      this.$emit('add');
    },
    onOpen(id: string) {
      this.$emit('open', id);
    },
    onEdit(id: string) {
      this.$emit('edit', id);
    },
    onDelete(id: string) {
      this.$emit('delete', id);
    },
  },
});
</script>
