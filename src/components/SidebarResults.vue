<template>
  <div>
      <slot v-if="data.length" />
      <p v-else>
        По данному запросу ничего не найдено
      </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SidebarResults',
  props: {
    data: {
      type: Array,
      required: true,
    }
  }
})

</script>

<style lang="scss" scoped>

</style>