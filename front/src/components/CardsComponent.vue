<template>
  <div v-if="meta.length != 0">
    <card-component
      class="q-ma-xl"
      v-for="element in meta.filter(filterCards)"
      v-bind:key="element.name"
      :meta="element"
      @open="onOpen"
      @edit="onEdit"
      @delete="onDelete"
    />
  </div>
  <div class="column flex-center">
    <q-pagination
      v-model="current"
      class="q-pa-md"
      color="brown-10"
      :max="getMaxPages()"
      direction-links
      gutter="20px"
      :max-pages="6"
    />
  </div>
</template>

<script lang="ts">
import { CardMeta } from 'src/models/viewModels';
import CardComponent from './CardComponent.vue';
import { defineComponent, PropType, ref } from 'vue';

export default defineComponent({
  name: 'CardsComponent',
  components: { CardComponent },
  props: {
    meta: {
      type: Array as PropType<CardMeta[]>,
      required: true,
    },
  },
  methods: {
    getMaxPages() {
      var ans = Math.floor(this.meta.length / this.max_card_count);
      if (this.meta.length % this.max_card_count != 0) ans = ans + 1;
      return ans;
    },
    filterCards(item: CardMeta, id: number) {
      console.log(item);
      if (
        (this.current - 1) * this.max_card_count <= id &&
        id < this.current * this.max_card_count
      ) {
        return item;
      }
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
  setup(props) {
    console.log(props.meta, 'Cards');
    return {
      current: ref(1),
      max_card_count: 3,
    };
  },
});
</script>
