<template>
  <div ref="el" />
</template>

<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core'

const emit = defineEmits(['visible'])

const el = ref()
const isVisible = useElementVisibility(el)

watch(isVisible, (visible) => {
  if (visible) {
    emit('visible')
  }
})
</script>

<style scoped>

</style>
