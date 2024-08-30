<script setup lang="ts">
import { sub, format, isSameDay, type Duration } from 'date-fns'

interface Props {
  modelValue: {
    start: string
    end: string
  }
  mode?: 'date' | 'datetime' | 'time'
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => ({
    start: sub(new Date(), { days: 14 }),
    end: new Date(),
  }),
  mode: 'date',
})
defineEmits(['update:modelValue'])

const ranges = [
  { label: '7 Hari Terakhir', duration: { days: 7 } },
  { label: '14 Hari Terakhir', duration: { days: 14 } },
  { label: '30 Hari Terakhir', duration: { days: 30 } },
  { label: '3 Bulan Terakhir', duration: { months: 3 } },
]
const selected = ref(props.modelValue)

function isRangeSelected(duration: Duration) {
  return isSameDay(selected.value.start, sub(new Date(), duration)) && isSameDay(selected.value.end, new Date())
}

function selectRange(duration: Duration) {
  selected.value = { start: sub(new Date(), duration), end: new Date() }
}

watch(
  () => props.modelValue,
  newVal => selected.value = newVal,
  {
    deep: true,
  },
)
</script>

<template>
  <UPopover :popper="{ placement: 'bottom-start' }">
    <UButton
      icon="i-heroicons-calendar-days-20-solid"
      variant="outline"
    >
      {{ format(selected.start, 'd MMM yyy HH:mm:ss') }} - {{ format(selected.end, 'd MMM yyy HH:mm:ss') }}
    </UButton>

    <template #panel="{ close }">
      <div class="flex items-start sm:divide-x divide-gray-200 dark:divide-gray-800">
        <div class="hidden sm:flex flex-col py-4">
          <UButton
            v-for="(range, index) in ranges"
            :key="index"
            :label="range.label"
            color="gray"
            variant="ghost"
            class="rounded-none px-6"
            :class="[
              isRangeSelected(range.duration)
                ? 'bg-gray-100 dark:bg-gray-800'
                : 'hover:bg-gray-50 dark:hover:bg-gray-800/50',
            ]"
            truncate
            @click="selectRange(range.duration)"
          />
        </div>

        <ADatepicker
          :model-value="selected"
          :mode="mode"
          is24hr
          hide-time-header
          :time-accuracy="3"
          @close="close"
          @update:model-value="$emit('update:modelValue', $event)"
        />
      </div>
    </template>
  </UPopover>
</template>
