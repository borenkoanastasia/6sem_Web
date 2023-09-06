<template>
  <q-page class="row">
    <div class="col" v-if="data_save.length != 0">
      <elements-page-component
        :entity_type="child_name"
        :page_data="data_save"
        :page_meta="meta_save"
        @find="onFind"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import ElementsPageComponent from 'components/ElementsPageComponent.vue';
import { CardMeta, FieldData, PageMeta } from 'src/components/models';
import { useRoute, useRouter } from 'vue-router';
import {
  make_elements_page_meta_data,
  make_filter_page_data,
} from '../ts/ElementsPageData';

export default defineComponent({
  name: 'ElementsPage',
  components: { ElementsPageComponent },
  methods: {},
  setup() {
    const route = useRoute();
    const router = useRouter();

    var name = route.params.name as string;
    var data_save: Ref<CardMeta[]> = ref([]);
    var meta_save: Ref<PageMeta> = ref({
      name: 'Loading...',
      description: 'Loading...',
    });
    var child_name = ref(''); //loadDataByField

    var find_data = ref<FieldData | null>(null);

    if (!make_elements_page_meta_data(name, data_save, meta_save, child_name)) {
      console.log(router.currentRoute);
      router.push({ path: '/error' });
    }

    function onFind(data: FieldData) {
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
      name: name,
      data_save: data_save,
      meta_save: meta_save,
      child_name: child_name,
      find_data: find_data,
      onFind: onFind,
    };
  },
});
</script>
