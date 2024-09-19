<script lang="ts" setup>
interface Props {
  title: string
  modelValue: boolean
  btnOkText?: string
  btnCancelText?: string
}
withDefaults(defineProps<Props>(), {
  btnOkText: 'Ya',
  btnCancelText: 'Tidak',
})

defineEmits(['ok', 'cancel', 'update:modelValue'])
</script>

<template>
  <UModal
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue')"
  >
    <UCard :ui="{ header: { padding: 'p-4' }, body: { padding: 'p-4' } }">
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold leading-6 mb-0 text-dark">
            {{ title }}
          </h3>
        </div>
      </template>
      <div class="flex justify-end space-x-2">
        <UButton
          variant="solid"
          class="-my-1"
          @click="$emit('ok')"
        >
          {{ btnOkText }}
        </UButton>
        <UButton
          color="rose"
          variant="solid"
          class="-my-1"
          @click="$emit('cancel')"
        >
          {{ btnCancelText }}
        </UButton>
      </div>
    </UCard>
  </UModal>
</template>
