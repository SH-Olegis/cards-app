<script lang="ts">
import Dashboard from '@/components/Dashboard.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    Dashboard
  }
})
</script>

<template>
  <div>
    <Dashboard />
  </div>
</template>

<style scoped>

</style>
