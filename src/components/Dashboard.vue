<template>
  <div>

  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue';
import { useDocsStore } from '@/stores';
export default defineComponent ({
  name: 'Dashboard',
  setup() {
    const docsStore = useDocsStore()

    onBeforeMount(() => {
      docsStore.getDocs()
    })
  },
})
</script>

<style scoped>

</style>