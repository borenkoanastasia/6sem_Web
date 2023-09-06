<template>
  <q-card class="q-pa-lg q-ma-md flex-center">
    <q-card-section>
      <q-list horizontal class="justify-center">
        <q-item
          class="q-pa-md"
          v-for="property of properties"
          v-bind:key="property.name"
          :meta="property"
        >
          <q-item horizontal>
            <q-input
              outlined
              v-if="property.name != 'ID'"
              rounded-border
              class="text-brown-10"
              v-model="property.value"
              :rules="[property.validate_rule]"
              :label="property.name"
            />
          </q-item>
        </q-item>
      </q-list>
      <!-- <properties-editor-component class="q-pa-md" :meta="properties" /> -->
    </q-card-section>
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
import { EditProperty, PropertiesEditorMeta } from 'src/models/viewModels';
import { defineComponent, PropType, ref } from 'vue';
import PropertiesEditorComponent from './PropertiesEditorComponent.vue';
import EditorActionsComponent from './EditorActionsComponent.vue';

export default defineComponent({
  name: 'EditorComponent',
  // components: { PropertiesEditorComponent, EditorActionsComponent },
  props: {
    meta: {
      type: Array as PropType<EditProperty[]>,
      required: true,
    },
  },
  methods: {
    onSave() {
      this.$emit('save', this.properties);
    },
    onDelete() {
      this.$emit('delete');
    },
  },
  setup(props) {
    return {
      properties: ref(props.meta),
    };
  },
});
</script>
