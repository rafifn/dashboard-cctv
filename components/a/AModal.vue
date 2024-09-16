<template>
  <UModal
    :model-value="isOpen"
    :ui="{ background: 'bg-modal', width }"
    :prevent-close="isPreventClose"
    :fullscreen="isFullScreen"
    v-bind="$attrs"
    @update:modal-value="$emit('update:modelValue', $event)"
  >
    <slot />
  </UModal>
</template>

<script setup lang="ts">
interface Props {
  isOpen: boolean
  isPreventClose?: boolean
  isFullScreen?: boolean
  width?: string
}
withDefaults(defineProps<Props>(), {
  title: '',
  isPreventClose: true,
  isFullScreen: false,
  width: '',
})
defineEmits(['update:modelValue'])
</script>

<style scoped>

</style>
