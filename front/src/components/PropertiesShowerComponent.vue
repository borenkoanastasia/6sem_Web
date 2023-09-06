<template>
  <q-card class="q-ma-xl text-subtitle1">
    <q-card-section class="q-pa-xl flex-center">
      <q-list horizontal class="">
        <div v-for="property of meta" v-bind:key="property.name">
          <q-item horizontal v-if="property.name != 'image_url'">
            <q-item-section
              v-if="property.name != 'image_url'"
              class="q-pa-md text-right"
              >{{ getName(property.name) }}
            </q-item-section>
            <q-separator vertical v-if="property.name != 'image_url'" />

            <q-item-section v-if="property.name != 'image_url'" class="q-pa-md">
              {{ property.value }}
            </q-item-section>
          </q-item>
        </div>
      </q-list>
    </q-card-section>
    <q-separator />
    <q-card-actions class="q-mx-xl flex-center">
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
import { getPropertyName } from 'src/ts/Helpers';
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
    return {
      getName: getPropertyName,
    };
  },
});
</script>
