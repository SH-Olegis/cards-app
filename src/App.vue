<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue';

import Layout from '@/components/Layout.vue';
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
import { useDocsStore } from '@/stores';

export default defineComponent({
  name: 'App',
  components: {
    Sidebar,
    Header,
    Layout
  },
  setup() {
    const docsStore = useDocsStore()

    onBeforeMount(() => {
      docsStore.getDocsRequest()
    })
  }
})
</script>

<template>
  <Layout>
    <template #header>
      <Header />
    </template>
    <template #sidebar>
      <Sidebar />
    </template>
    <template #content>
      Content
    </template>
  </Layout>
</template>

<style scoped>

</style>
