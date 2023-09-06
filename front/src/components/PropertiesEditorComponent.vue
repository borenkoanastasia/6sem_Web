<template>
  <q-list horizontal class="justify-center">
    <q-item
      class="q-pa-md"
      v-for="property of properties"
      v-bind:key="property.name"
      :meta="property"
    >
      <q-item horizontal>
        <q-input
          :ref="input"
          outlined
          rounded-border
          class="text-brown-10"
          v-model="property.value"
          :rules="[property.validate_rule]"
          :label="property.name"
        />
      </q-item>
    </q-item>
  </q-list>
</template>

<script lang="ts">
import { Property } from 'src/models/commonModels';
import { PropertiesEditorMeta } from 'src/models/viewModels';
import { defineComponent, PropType, Ref, ref } from 'vue';
import PropertyEditorComponent from './PropertyEditorComponent.vue';

export default defineComponent({
  name: 'PropertiesEditorComponent',
  props: {
    meta: {
      type: Object as PropType<PropertiesEditorMeta>,
      required: true,
    },
  },
  methods: {},
  setup(props) {
    return {
      properties: ref(props.meta.properties),
      input: ref(),
    };
  },
});
</script>
