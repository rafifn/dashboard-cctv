<template>
  <div>
    <div class="header">
      <div class="header__item">
        <span class="fw-bold">CCTV</span>
        <span>{{ dateNow }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { formatDateFromUTC } from '~/utils/helpers'

const dateNow = ref()

onMounted(() => {
  dateNow.value = formatDateFromUTC('', 'dddd, DD MMMM YYYY')
})
</script>

<style lang="scss" scoped>
.header {
  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      color: #ffffff;
      font-size: 1rem;
    }
  }
}
</style>
