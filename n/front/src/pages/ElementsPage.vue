<template>
  <q-page class="column">
    <header-elements-component :meta="meta_save" @add="onAdd" />
    <finder-component :options="find_options" @find="onFind" />
    <cards-component
      :meta="data_save"
      @edit="onEdit"
      @open="onOpen"
      @delete="onDelete"
    />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import ElementsShowerComponent from 'components/ElementsShowerComponent.vue';
import HeaderElementsComponent from 'components/HeaderElementsComponent.vue';
import CardComponent from 'components/CardComponent.vue';
import FinderComponent from 'components/FinderComponent.vue';
import CardsComponent from 'components/CardsComponent.vue';
import { useRoute, useRouter } from 'vue-router';
import {
  make_elements_page_meta_data,
  make_filter_page_data,
} from '../ts/ElementsPageData';
import { CardMeta, HeaderMeta } from 'src/models/viewModels';
import { QPage } from 'quasar';
import { Property } from 'src/models/commonModels';
import { getPropertiesList, getPropertiesStringList } from 'src/ts/Helpers';
import { DataPropertiesNames } from 'src/models/dataModels';

export default defineComponent({
  name: 'ElementsPage',
  components: {
    HeaderElementsComponent,
    FinderComponent,
    CardsComponent,
  },
  methods: {
    onAdd(id: string) {
      var url = `/add/${this.child_name}/${id}`;
      this.router.push({ path: url });
    },
    onOpen(id: string) {
      var url = `/show/${this.child_name}/${id}`;
      this.router.push({ path: url });
    },
    onEdit(id: string) {
      var url = `/edit/${this.child_name}/${id}`;
      this.router.push({ path: url });
    },
    onDelete(id: string) {
      var url = `/delete/${this.child_name}/${id}`;
      this.router.push({ path: url });
    },
    // onFind(data: Property) {
    //   console.log('I try there', data);
    //   this.find_data = data;
    //   make_filter_page_data(this.name, ref(this.data_save), this.find_data);
    //   console.log('I try there');

    //   // make_elements_page_meta_data(
    //   //   this.name,
    //   //   this.data_save,
    //   //   this.meta_save,
    //   //   this.child_name
    //   // );
    // },
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    var name = route.params.name as string;
    var data_save: Ref<CardMeta[]> = ref([]);
    var meta_save: Ref<HeaderMeta> = ref({
      name: 'Loading...',
      description: 'Loading...',
    });
    var child_name = ref(''); //loadDataByField

    var find_data = ref<Property | null>(null);

    if (!make_elements_page_meta_data(name, data_save, meta_save, child_name)) {
      console.log(router.currentRoute);
      router.push({ path: '/error' });
    }
    var find_options: string[] = [];
    find_options = getPropertiesStringList(
      DataPropertiesNames[child_name.value]
    );
    console.log(find_options);

    function onFind(data: Property) {
      console.log('I try there', data);
      find_data.value = data;
      make_filter_page_data(name, data_save, find_data?.value);
      console.log('I try there');

      // make_elements_page_meta_data(
      //   this.name,
      //   this.data_save,
      //   this.meta_save,
      //   this.child_name
      // );
    }

    return {
      router: router,
      name: name,
      data_save: data_save,
      meta_save: meta_save,
      child_name: child_name,
      find_data: find_data,
      find_options: find_options,
      onFind: onFind,
    };
  },
});
</script>
