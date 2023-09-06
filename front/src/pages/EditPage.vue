<template>
  <q-page class="q-pa-lg">
    <div class="text-h3 q-pa-lg">{{ page_name }}</div>
    <div class="flex-center column">
      <q-card class="q-ma-xl text-subtitle1">
        <q-card-section class="row q-pa-xl flex-center">
          <q-list class="q-ma-md text-right justify-center">
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
              <q-item-section class="q-px-md">
                <q-input v-model="property.value" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
        <q-separator />
        <q-card-actions horizontal class="q-pa-lg justify-center">
          <q-space />
          <q-btn
            class="q-pa-md q-mx-md"
            color="brown-10"
            icon="save"
            label="Сохранить"
            :onclick="onEdit"
          />
          <q-btn class="q-pa-md q-mx-md" icon="delete" label="Удалить" />
          <q-space />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Dictionary } from 'express-serve-static-core';
import { patchDataById } from 'src/api/patchData';
import { MyError, Property } from 'src/models/commonModels';
import { Entity, getPropertyCodeName } from 'src/models/dataModels';
import { ChildPageNameConstruct } from 'src/ts/ElementsPageData';
import { defineComponent, Ref, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { make_element_page_meta_data } from '../ts/ElementPageData';
import { getPropertyName } from '../ts/Helpers';

export default defineComponent({
  name: 'Component',

  methods: {
    onEdit() {
      var answer: Dictionary<string> = {};
      this.properties.forEach((item) => {
        answer[item.name] = item.value;
      });
      console.log(answer, this.properties);
      var error = new MyError(null, null);
      patchDataById(
        this.name + 's',
        this.id,
        answer as unknown as Entity,
        ref(error)
      );
      // window.location.reload();
    },
    onDelete(id: string) {
      var url = `/delete/${this.name}/${id}`;
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
      console.log(properties);
      router.push({ path: '/error' });
    }

    return {
      id: id,
      router: router,
      properties: properties,
      getName: getPropertyName,
      page_name: page_name,
      name: name,
    };
  },
});
</script>

function patchData() { throw new Error('Function not implemented.'); } function
patchData() { throw new Error('Function not implemented.'); }
