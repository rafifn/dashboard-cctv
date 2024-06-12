<template>
  <div>
    <div class="header">
      <div class="header__item">
        <span class="fw-bold">CCTV</span>
        <span>{{ dateNow }}</span>
      </div>
    </div>
    <div class="d-flex flex-wrap">
      <ACctv
        v-for="(cctv, cctvIdx) in data.results"
        :id="cctv.id32"
        :key="`cctv-${cctvIdx}`"
        ref="video"
        class="p-2"
        :src="cctv.hls_url"
      />
    </div>
  </div>
</template>

<script setup>
import { formatDateFromUTC } from '~/utils/helpers'

const { $api } = useNuxtApp()

const { data } = await useAsyncData('camera', () => $api('/cctv/camera', {
  baseUrl: 'https://stream.arnatech.id',
}))

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
