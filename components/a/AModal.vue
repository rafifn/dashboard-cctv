<template>
  <UModal
    :model-value="isOpen"
    :ui="{ background: 'bg-modal' }"
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
}
withDefaults(defineProps<Props>(), {
  title: '',
  isPreventClose: true,
  isFullScreen: false,
})
defineEmits(['update:modelValue'])
</script>

<style scoped>

</style>
