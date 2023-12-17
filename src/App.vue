<script lang="ts">
import { defineComponent } from 'vue';


import Layout from '@/components/Layout.vue';
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';

export default defineComponent({
  name: 'App',
  components: {
    Sidebar,
    Header,
    Layout
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
