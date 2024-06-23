<template>
  <UModal
    :model-value="isOpen"
    :ui="{ background: 'bg-modal' }"
    :prevent-close="isPreventClose"
    @update:modal-value="$emit('update:modelValue', $event)"
  >
    <slot />
  </UModal>
</template>

<script setup lang="ts">
interface Props {
  isOpen: boolean
  isPreventClose?: boolean
}
withDefaults(defineProps<Props>(), {
  title: '',
  isPreventClose: true,
})
defineEmits(['update:modelValue'])
</script>

<style scoped>

</style>
