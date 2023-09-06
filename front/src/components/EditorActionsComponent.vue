<template>
  <q-card-actions class="flex-center">
    <q-space />
    <q-btn
      class="q-ma-sm"
      label="Изменить"
      color="brown-10"
      icon="save"
      :onclick="onSave"
    />
    <q-space />
    <q-btn class="q-ma-sm" label="Удалить" icon="delete" :onclick="onDelete" />
    <q-space />
  </q-card-actions>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EditorActionsComponent',
  components: {},
  methods: {
    onSave() {
      this.$emit('save');
    },
    onDelete() {
      this.$emit('delete');
    },
  },
  setup(props) {
    return {};
  },
});
</script>
