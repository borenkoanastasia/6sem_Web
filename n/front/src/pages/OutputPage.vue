<template>
  <q-page class="q-pa-lg column flex-center">
    <div class="text-h1 q-pa-lg">Выход</div>
  </q-page>
</template>
<script lang="ts">
import { output } from 'src/ts/Authorization';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'OutputPage',
  setup() {
    const router = useRouter();
    output();
    router.push({ path: '/main' });
    return {};
  },
});
</script>
