<template>
  <q-page class="q-pa-lg">
    <div class="text-h3 q-pa-lg">{{ page_name }}</div>
    <!-- {{ loadAnimalData }} -->
    <!-- <q-card class="q-ma-md text-subtitle1 row bg-white justify-center">
      <q-card-section horizontal>
      <q-card-section class="q-ma-md text-right">
        <q-card-section
          style="text-left"
          v-for="property in properties"
          v-bind:key="property.name"
        >
          {{ getName(property.name) }}
        </q-card-section>
      </q-card-section>
      <q-separator vertical />
      <q-card-section class="q-ma-md">
        <q-card-section
          v-for="property in properties"
          v-bind:key="property.name"
        >
          {{ property.value }}
        </q-card-section>
      </q-card-section> -->
    <!-- </q-card> -->
    <properties-shower-component
      @edit="onEdit"
      @delete="onDelete"
      :meta="properties"
    />
  </q-page>
</template>
<script lang="ts">
// import { Entity, Property } from 'src/components/models';
import { Property } from 'src/models/commonModels';
import { defineComponent, Ref, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { make_element_page_meta_data } from '../ts/ElementPageData';
import { getPropertyName, getSomething, PropertyNames } from '../ts/Helpers';
import PropertiesShowerComponent from 'src/components/PropertiesShowerComponent.vue';

export default defineComponent({
  name: 'ElementComponent',
  components: { PropertiesShowerComponent },
  methods: {
    onEdit() {
      var url = `/edit/${this.name}/${this.id}`;
      this.router.push({ path: url });
    },
    onDelete() {
      var url = `/delete/${this.name}/${this.id}`;
      this.router.push({ path: url });
    },
  },

  setup() {
    const route = useRoute();
    const router = useRouter();

    var id = route.params.id as string;
    var name = route.params.name as string;
    var page_name = ref('');
    var properties: Ref<Property[]> = ref([]);

    if (!make_element_page_meta_data(id, name, properties, page_name)) {
      console.log(router.currentRoute);
      router.push({ path: '/error' });
    }

    return {
      router: router,
      properties: properties,
      getName: getPropertyName,
      page_name: page_name,
      name: name,
      id: id,
    };
  },
});
</script>
