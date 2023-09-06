<template>
  <q-card horizontal class="justify-center" style="height: 200px">
    <q-card-section horizontal class="q-pa-none q-ma-none">
      <div class="col-5 q-ma-md">
        <div class="text-h6 text-brown-10 q-pa-md">{{ meta.name }}</div>
        <div class="text-subtitle2 text-brown-10 q-pa-md">
          {{ meta.description }}
        </div>
      </div>

      <q-card-actions vertical class="justify-around" style="height: 200px">
        <q-btn
          flat
          round
          color="brown-10"
          icon="open_in_new"
          :onclick="onOpen"
        />
        <q-btn flat round color="brown-10" icon="edit" :onclick="onEdit" />
        <q-btn flat round color="brown-10" icon="delete" :onclick="onDelete" />
      </q-card-actions>

      <q-img class="col" :src="getSrc(meta.url_image)" style="height: 200px" />
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { CardMeta } from 'src/models/viewModels';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'CardComponent',
  props: {
    meta: {
      type: Object as PropType<CardMeta>,
      required: true,
    },
  },
  methods: {
    getSrc(img: string | undefined) {
      if (img) return img;
      return 'https://n1s1.hsmedia.ru/a1/ec/ec/a1ececc48afd3c0c498fdbd47ba45dbe/728x542_1_f5b22481fc08917ff7584d523f52ed21@1000x745_0xac120003_3944844451633381523.jpeg';
    },
    onOpen() {
      this.$emit('open', this.meta.id);
      console.log('open cards');
    },
    onEdit() {
      this.$emit('edit', this.meta.id);
    },
    onDelete() {
      this.$emit('delete', this.meta.id);
    },
  },
});
</script>
