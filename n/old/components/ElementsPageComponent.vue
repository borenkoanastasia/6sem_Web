<template>
  <div class="row">
    <div class="column q-ma-lg">
      <div class="text-h3 q-pa-md">{{ page_meta.name }}</div>
      <div class="text-subtitle2 q-pa-md">
        {{ page_meta.description }}
      </div>
    </div>
    <q-space />
    <div class="column">
      <q-space />
      <q-btn
        class="q-ma-lg bg-brown-10 text-white"
        label="Добавить"
        icon="add"
        :to="get_path(entity_type)"
      />
      <q-space />
    </div>
  </div>
  <finder-component @find="onFind" :options="options(page_data[0])" />
  <!-- <q-layout view="lhh Lpr lff" container class="bg-brown-1">
        <q-page-container class="bg-brown-1">
          <q-page padding style="padding-top: 60px" class="q-pa-md"> -->
  <div v-if="page_data.length > 0">
    <card-component
      v-for="element in page_data.filter((item, id) => {
        if (
          (current - 1) * max_card_count <= id &&
          id < current * max_card_count
        ) {
          return item;
        }
      })"
      class="q-ma-xl"
      :meta="element"
      v-bind:key="element.name"
      :entity_type="entity_type"
    />
  </div>
  <div class="column flex-center">
    <q-pagination
      v-model="current"
      class="q-pa-md"
      color="brown-10"
      :max="get_max(page_data.length)"
      direction-links
      gutter="20px"
    />
  </div>

  <!-- <q-page-sticky expand position="top">
        <finder-component />
      </q-page-sticky> -->
  <!-- </q-page>
          <q-page-scroller position="bottom">
            <q-btn fab icon="keyboard_arrow_up" color="red" />
          </q-page-scroller>
        </q-page-container>
      </q-layout> -->
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import CardComponent from 'components/CardComponent.vue';
import FinderComponent from 'components/FinderComponent.vue';
// import { CardMeta, Entity, FieldData, PageMeta } from 'src/components/models';
import { getPropertiesList, getPropertyName } from 'src/ts/Helpers';

// const c: CardMeta = {
//   name: 'Имя',
//   description: 'Описание',
//   url_image:
//     'https://n1s1.hsmedia.ru/a1/ec/ec/a1ececc48afd3c0c498fdbd47ba45dbe/728x542_1_f5b22481fc08917ff7584d523f52ed21@1000x745_0xac120003_3944844451633381523.jpeg',
// };

function get_path(entity_type: string) {
  return `/edit/${entity_type}/new`;
}

const max_card_count = 3;

function get_max(page_data_lenght: number) {
  var ans = Math.floor(page_data_lenght / max_card_count);
  if (page_data_lenght % max_card_count != 0) {
    return ans + 1;
  }
  return ans;
}

function getOptions(element: Entity) {
  var res = getPropertiesList(element);
  var ans: string[] = [];
  res.forEach((item) => {
    ans.push(getPropertyName(item.name));
  });
  return ans;
}

// export default defineComponent({
//   name: 'ElementsPageComponent',
//   components: { CardComponent, FinderComponent },
//   props: {
//     page_meta: {
//       type: Object as PropType<PageMeta>,
//       required: true,
//     },
//     page_data: {
//       type: Array as PropType<CardMeta[]>,
//       required: true,
//     },
//     entity_type: {
//       type: Object as PropType<string>,
//       required: true,
//     },
//   },
//   methods: {
//     onFind(data: FieldData) {
//       this.$emit('find', data);
//     },
//   },
//   setup() {
//     return {
//       current: 1,
//       get_max: get_max,
//       max_card_count: max_card_count,
//       options: getOptions,
//       get_path: get_path,
//     };
//   },
//   // setup() {
//   //   var animals: Ref<Entity[]> | Ref<null> = ref(null);
//   //   loadAnimalsData(animals, none_fun);
//   //   return {
//   //     card: c,
//   //     animals: animals,
//   //   };
//   // },
// });
</script>
