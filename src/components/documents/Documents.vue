<template>
  <div>
    <DocumentsItem v-for="document in documents" :document="document" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useDocsStore } from '@/stores';
import DocumentsItem from '@/components/documents/DocumentsItem.vue';

export default defineComponent({
  components: {
    DocumentsItem
  },
  setup() {
    const docsStore = useDocsStore()
    const documents = docsStore.documents

    return {
      documents
    }
  }
})
</script>

<style scoped>

</style>