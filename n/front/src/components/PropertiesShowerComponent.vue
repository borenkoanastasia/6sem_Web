<template>
  <q-card class="q-pa-lg q-ma-md">
    <q-card-section>
      <q-list horizontal class="text-subtitle2 justify-center">
        <q-item horizontal v-for="property of meta" v-bind:key="property.name">
          <q-item-section
            v-if="property.name != 'image_url'"
            class="q-pa-md text-right"
            >{{ property.name }}
          </q-item-section>
          <q-separator vertical v-if="property.name != 'image_url'" />

          <q-item-section v-if="property.name != 'image_url'" class="q-pa-md">
            {{ property.value }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
    <q-card-actions class="flex-center">
      <q-space />
      <q-btn
        class="q-ma-sm"
        label="Изменить"
        color="brown-10"
        icon="edit"
        :onclick="onEdit"
      />
      <q-space />
      <q-btn
        class="q-ma-sm"
        label="Удалить"
        icon="delete"
        :onclick="onDelete"
      />
      <q-space />
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { Property } from 'src/models/commonModels';
import { PropertiesShowerMeta } from 'src/models/viewModels';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'PropertiesShowerComponent',
  props: {
    meta: {
      type: Object as PropType<Property[]>,
      required: true,
    },
  },
  methods: {
    onEdit() {
      this.$emit('edit');
    },
    onDelete() {
      this.$emit('delete');
    },
  },
  setup() {
    return {};
  },
});
</script>
