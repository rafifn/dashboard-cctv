<!-- eslint-disable max-len -->
<template>
  <div class="wrapper__pagination">
    <div
      id="datatableDefault_info"
      class="dt-info"
      aria-live="polite"
      role="status"
    >
      Showing 1 to 10 of 56 entries
    </div>
    <div class="dt-paging paging_full_numbers">
      <ul class="pagination mb-0">
        <li :class="['dt-paging-button page-item', { disabled: modelValue.toString() === '1' }]">
          <span
            class="page-link previous"
            aria-controls="datatableDefault"
            aria-disabled="true"
            aria-label="Previous"
            data-dt-idx="previous"
            tabindex="-1"
            @click="modelValue.toString() !== '1' && $emit('update:modelValue', (Number(modelValue) - 1).toString())"
          >
            ‹
          </span>
        </li>
        <li
          v-for="opt in pages"
          :key="opt"
          :class="['dt-paging-button page-item', { active: modelValue.toString() === opt.toString() }]"
        >
          <span
            class="page-link"
            aria-controls="datatableDefault"
            aria-current="page"
            data-dt-idx="0"
            tabindex="0"
            @click="opt.toString() !== '...' && $emit('update:modelValue', opt.toString())"
          >
            {{ opt }}
          </span>
        </li>
        <li :class="['dt-paging-button page-item', { disabled: modelValue.toString() === lastPage.toString() }]">
          <span
            class="page-link next"
            aria-controls="datatableDefault"
            aria-label="Next"
            data-dt-idx="next"
            tabindex="0"
            @click="modelValue.toString() !== lastPage.toString() && $emit('update:modelValue', (Number(modelValue) + 1).toString())"
          >
            ›
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const MAX_PAGE = 5

interface Props {
  modelValue: string | number
  size: string
  totalData: string
}
const props = defineProps<Props>()
defineEmits(['update:modelValue'])

const lastPage = computed(() => Math.ceil(props.totalData / props.size))

const pages = computed(() => {
  const pg = []
  const totalPages = Math.ceil(props.totalData / props.size)
  if (totalPages <= 10) {
    for (let i = 1; i <= totalPages; i++) {
      pg.push(i)
    }
  } else if (Number(props.modelValue) < MAX_PAGE) {
    for (let i = 1; i <= MAX_PAGE; i++) {
      pg.push(i)
    }
    pg.push('...')
    pg.push(totalPages)
  } else if (Number(props.modelValue) >= MAX_PAGE && Number(props.modelValue) <= totalPages - MAX_PAGE) {
    pg.push(1)
    pg.push('...')
    for (let i = Number(props.modelValue) - 2; i <= Number(props.modelValue) + 2; i++) {
      pg.push(i)
    }
    pg.push('...')
    pg.push(totalPages)
  } else {
    pg.push(1)
    pg.push('...')
    for (let i = totalPages - MAX_PAGE + 1; i <= totalPages; i++) {
      pg.push(i)
    }
  }
  return pg
})
</script>

<style scoped lang="scss">
.wrapper {
  &__pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.page-item {
  cursor: pointer;
}
</style>
