<template>
  <q-page class="row"> </q-page>
</template>

<script lang="ts">
import { deleteDataById } from 'src/api/deleteData';
import { MyError } from 'src/models/commonModels';
import { defineComponent, Ref, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  name: 'DeletePage',
  setup() {
    const router = useRouter();
    const route = useRoute();

    var id = route.params.id as string;
    var name = route.params.name as string;
    var error = ref(new MyError(null, null));
    deleteDataById(name + 's', id, error);

    router.push({ path: '/' });

    return {};
  },
});
</script>
