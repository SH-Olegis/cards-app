<template>
  <a-flex gap="30" vertical class="sidebar">
    <Search />
    <SidebarResults />
  </a-flex>
</template>

<script lang="ts" setup>
import Search from '@/components/Search.vue';
import SidebarResults from '@/components/SidebarResults.vue';

</script>

<style scoped lang="scss">
.sidebar {
  padding: 24px 20px;
}
</style>