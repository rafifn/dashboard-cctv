<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
})

defineEmits(['ok', 'cancel'])
</script>

<template>
  <UModal>
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
          Ya
        </UButton>
        <UButton
          color="rose"
          variant="solid"
          class="-my-1"
          @click="$emit('cancel')"
        >
          Tidak
        </UButton>
      </div>
    </UCard>
  </UModal>
</template>
