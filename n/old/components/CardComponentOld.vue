<!-- <template>
  <q-card horizontal class="justify-center" style="height: 200px">

    <q-card-section horizontal class="q-pa-none q-ma-none">
      <div class="col-5 q-ma-md">
        <div class="text-h6 q-pa-md">{{ meta.name }}</div>
        <div class="text-subtitle2 q-pa-md">{{ meta.description }}</div>
      </div>
      <q-card-actions vertical class="justify-around" style="height: 200px">
        <q-btn
          flat
          round
          color="brown-10"
          icon="open_in_new"
          :to="get_path('show', entity_type, meta.id)"
        />
        <q-btn
          flat
          round
          color="brown-10"
          icon="edit"
          :to="get_path('edit', entity_type, meta.id)"
        />
        <q-btn flat round color="brown-10" icon="delete" />
      </q-card-actions>
      <q-img class="col" :src="get_src(meta.url_image)" style="height: 200px" />
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CardMeta } from './models';

// var card: CardMeta = null;

function get_src(img: string | undefined) {
  if (img) {
    return img;
  }
  return 'https://n1s1.hsmedia.ru/a1/ec/ec/a1ececc48afd3c0c498fdbd47ba45dbe/728x542_1_f5b22481fc08917ff7584d523f52ed21@1000x745_0xac120003_3944844451633381523.jpeg';
}
function get_path(action: string, type: string, id: string) {
  return `/${action}/${type}/${id}`;
}
export default defineComponent({
  name: 'CardComponent',
  props: {
    meta: {
      type: Object as PropType<CardMeta>,
      required: true,
    },
    entity_type: {
      type: Object as PropType<string>,
      required: true,
    },
  },
  setup() {
    return {
      get_src: get_src,
      get_path: get_path,
    };
  },
});
</script> -->
