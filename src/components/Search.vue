<template>
  <div>
    <p>Поиск документа</p>
    <a-input v-model:value="value" placeholder="Введите ID документа" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const value = ref('')

    return {
      value
    }
  }
})
</script>

<style scoped>

</style>