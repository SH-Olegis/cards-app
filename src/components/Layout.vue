<template>
  <a-layout class="page-layout">
    <a-layout-header class="page-layout-header">
      <slot name="header" />
    </a-layout-header>
    <a-layout class="page-layout-container">
      <a-layout-sider :style="{background: 'none'}">
        <slot name="sidebar" />
      </a-layout-sider>
      <a-layout-content :style="{background: 'none'}">
        <slot name="content" />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.page-layout {
  max-width: 1280px;

  margin: 0 auto;

  background: none;
}

.page-layout-header {
  padding: 0;

  background: none;
}

.page-layout-container {
  background: none;

  border-radius: 10px;
  background: #FDFDFD;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.10);
}
</style>
