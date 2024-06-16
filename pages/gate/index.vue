<template>
  <div>
    <h1 class="page-header">
      Gate Monitoring
    </h1>
    <ADatatable
      :params="currentQuery"
      :columns="COLUMNS"
      :rows="data.results"
      :total-data="`${data.count}`"
      @update:search="handleSearch"
      @update:page="handleUpdatePage"
      @update:size="handleUpdateSize"
    />
  </div>
</template>

<script setup lang="ts">
import { formatDateFromUTC } from '~/utils/helpers'

const COLUMNS = [
  { data: 'number_plate', title: 'Kode Visitor' },
  { data: 'camera', title: 'Kamera', render: (data, type) => {
    if (type === 'display') {
      return data.name
    }
    return data
  } },
  { data: 'time_utc_timestamp', title: 'Waktu Kunjungan', type: 'string', render: (data, type) => {
    if (type === 'display') {
      return formatDateFromUTC(data)
    }
    return data
  } },
  { data: 'direction', title: 'Arah' },
]

const { $api } = useNuxtApp()
const route = useRoute()
const { currentQuery, handleSearch, handleUpdatePage, handleUpdateSize } = useTable()

const { data } = await useAsyncData('lpr', () => $api('/cctv/lpr', {
  query: {
    ...route.query,
  },
}), {
  watch: [currentQuery],
  immediate: true,
})
</script>

<style lang="scss" scoped>

</style>
