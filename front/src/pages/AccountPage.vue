<template>
  <q-page class="row"> </q-page>
</template>

<script lang="ts">
import { getDataById } from 'src/api/getData';
import { defineComponent, Ref, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  name: 'AccountPage',
  setup() {
    const router = useRouter();
    router.push({ path: '/' });
    // getDataById();
    return {};
  },
});
</script>
