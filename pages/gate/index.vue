<template>
  <div>
    <h1 class="page-header">
      Gate Monitoring
    </h1>
    <ADatatable
      :page="$route.query?.page ?? '1'"
      :size="$route.query?.size ?? '10'"
      :columns="COLUMNS"
      :rows="data.results"
      :total-data="`${data.count}`"
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
const router = useRouter()

const { data } = await useAsyncData('lpr', () => $api('/cctv/lpr'))

const handleUpdatePage = (page) => {
  router.replace({
    path: route.path,
    query: {
      ...route.query,
      page,
    },
  })
}
const handleUpdateSize = (size) => {
  router.replace({
    path: route.path,
    query: {
      page: 1,
      size,
    },
  })
}
</script>

<style lang="scss" scoped>

</style>
