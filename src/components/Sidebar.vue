<template>
  <a-flex gap="30" vertical class="sidebar">
    <Search :search-text="search" @search="onSearch" />
    <SidebarResults :data="documents">
      <Documents />
    </SidebarResults>
  </a-flex>
</template>

<script lang="ts" setup>
import Search from '@/components/Search.vue';
import SidebarResults from '@/components/SidebarResults.vue';
import Documents from '@/components/documents/Documents.vue';
import { computed, ref } from 'vue';
import { useDocsStore } from '@/stores';

const search = ref('')
const minChars = ref(2)
const isMinChars = computed(() => minChars.value >= 2)

const docsStore = useDocsStore()

const documents = computed(() => docsStore.documents || [])

const onSearch = () => {
  if (isMinChars.value || !search.value) {
    docsStore.getDocsRequest();
  }
}

</script>

<style scoped lang="scss">
.sidebar {
  padding: 24px 20px;
}
</style>