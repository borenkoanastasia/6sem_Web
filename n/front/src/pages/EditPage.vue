<template>
  <q-page class="q-pa-lg">
    <editor-component />
    <div class="text-h3 q-pa-lg">{{ name }}</div>
    <!-- {{ loadAnimalData }} -->
    <div class="flex-center column">
      <q-card class="q-ma-xl text-subtitle1">
        <!-- <q-card-section horizontal> -->
        <q-card-section class="row q-pa-xl flex-center">
          <q-list class="q-ma-md text-right">
            <q-item
              class=""
              style="text-left"
              v-for="property in properties"
              v-bind:key="property.name"
              horizontal
            >
              <q-item-section class="q-px-md">
                {{ getName(property.name) }}
              </q-item-section>
              <!-- <q-separator vertical /> -->
              <q-item-section class="q-px-md">
                <q-input v-model="property.value" />
              </q-item-section>
            </q-item>
          </q-list>
          <!-- <q-separator vertical />
        <q-card-section class="full-height q-ma-md">
          <q-card-section
            v-for="property in properties"
            v-bind:key="property.name"
          >
            <q-input v-model="property.value" />
          </q-card-section>
        </q-card-section> -->
        </q-card-section>
        <q-separator />
        <q-card-actions horizontal class="q-pa-lg justify-center">
          <q-space />
          <q-btn
            class="q-pa-md q-mx-md"
            color="brown-10"
            icon="save"
            label="Сохранить"
          />
          <q-btn class="q-pa-md q-mx-md" icon="delete" label="Удалить" />
          <q-space />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>
<script lang="ts">
// import { Property } from 'src/components/models';
import { Property } from 'src/models/commonModels';
import { defineComponent, Ref, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { make_element_page_meta_data } from '../ts/ElementPageData';
import { getPropertyName } from '../ts/Helpers';
import EditorComponent from 'src/components/EditorComponent.vue';

export default defineComponent({
  name: 'Component',
  components: { EditorComponent },

  setup() {
    const route = useRoute();
    const router = useRouter();

    var id = route.params.id as string;
    var name = route.params.name as string;
    var page_name = ref('');
    var properties: Ref<Property[]> = ref([]);

    if (id != 'new') {
      if (!make_element_page_meta_data(id, name, properties, page_name)) {
        router.push({ path: '/error' });
      }
    }

    return {
      properties: properties,
      getName: getPropertyName,
      name: page_name,
    };
  },
});
</script>
