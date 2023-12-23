<template>
  <div class="document-item">
    <img
        :src="document.image"
        alt=""
        class="document-item__image"
    >
    <p class="document-item__name">{{ document.name }}</p>
    <p class="document-item__size">12 Mb</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { DocsInterfaces } from '@/stores/docs/docs.interfaces';

export default defineComponent({
  props: {
    document: {
      type: [] as PropType<DocsInterfaces>,
      required: true
    }
  },

  setup() {
    return {

    }
  }
})
</script>

<style scoped>

</style>