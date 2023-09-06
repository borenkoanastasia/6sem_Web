<template>
  <q-page class="row">
    <div class="text-h3 q-pa-lg">{{ page_name }}</div>
    <div class="flex-center column">
      <q-card class="q-ma-xl text-subtitle1">
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
              <q-item-section class="q-px-md">
                <q-input
                  v-model="property.value"
                  :rules="[property.validate_rule]"
                />
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
            :onclick="onSave"
          />
          <q-space />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { postDataById } from 'src/api/postData';
import { Dictionary, MyError } from 'src/models/commonModels';
import { Entity } from 'src/models/dataModels';
import { EditProperty } from 'src/models/viewModels';
import { make_create_page_meta_data } from 'src/ts/ElementPageData';
import { getPropertyName } from 'src/ts/Helpers';
import { defineComponent, Ref, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  name: 'AddPage',
  methods: {
    onSave() {
      var answer: Dictionary<string> = {};
      this.properties.forEach((item) => {
        answer[item.name] = item.value;
      });
      console.log(answer, this.properties);
      var error = new MyError(null, null);
      postDataById(this.name + 's', answer as unknown as Entity, ref(error));
      // postData()
      // var url = `/show/${this.name}/${this.id}`;
      // this.router.push({ path: url });
    },
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    // var id = route.params.id as string;
    var name = route.params.name as string;
    var page_name = ref('');
    var properties: Ref<EditProperty[]> = ref([]);

    if (!make_create_page_meta_data(name, properties, page_name)) {
      router.push({ path: '/error' });
    }

    return {
      router: router,
      properties: properties,
      getName: getPropertyName,
      page_name: page_name,
      name: name,
    };
  },
});
</script>
