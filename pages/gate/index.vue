<template>
  <div>
    <h1 class="page-header">
      Gate Monitoring
    </h1>
    <div>
      <div class="d-flex flex-wrap">
        <ACctv
          v-for="(cctv, cctvIdx) in data.results"
          :id="cctv.id32"
          :key="`cctv-${cctvIdx}`"
          class="p-1"
          :width="400"
          :src="cctv.channel_id"
          @click="handleClickThumbnail(cctv)"
        />
      </div>
    </div>
    <ADatatable
      :params="currentQuery"
      :columns="COLUMNS"
      :rows="lpr?.results"
      :total-data="`${lpr?.count}`"
      @update:search="handleSearch"
      @update:page="handleUpdatePage"
      @update:size="handleUpdateSize"
    />
  </div>
</template>

<script setup lang="ts">
import { formatDateFromUTC } from '~/utils/helpers'

const COLUMNS = [
  { data: 'number_plate', title: 'Kode Visitor', sortable: false },
  { data: 'camera', title: 'Kamera', sortable: false, render: (data, type) => {
    if (type === 'display') {
      return data.name
    }
    return data
  } },
  { data: 'time_utc_timestamp', title: 'Waktu Kunjungan', sortable: false, type: 'string', render: (data, type) => {
    if (type === 'display') {
      return formatDateFromUTC(data)
    }
    return data
  } },
  { data: 'direction', title: 'Arah', sortable: false },
]

const { $api } = useNuxtApp()
const route = useRoute()
const router = useRouter()

const { currentQuery, handleSearch, handleUpdatePage, handleUpdateSize } = useTable()

const { data } = await useAsyncData('camera', () => $api('/cctv/camera', {
  baseUrl: 'https://stream.arnatech.id',
  query: {
    is_active: true,
    is_gate: true,
    page_size: 50,
  },
}))

const lpr = ref()
const channelId = ref()

const handleClickThumbnail = (item: { hls_url: string, id32: string, channel_id: string }) => {
  router.replace({
    path: route.path,
    query: {
      ...route.query,
      channel_id: item.channel_id,
    },
  })
}

const handleGetLpr = async () => {
  try {
    const res = await $api(`/cctv/lpr`, {
      query: {
        channel_id: channelId.value || data.value.results[0].channel_id,
        is_active: true,
        is_gate: true,
      },
    })
    lpr.value = res
  } catch (err) {
    alert(JSON.stringify(err))
  }
}

onBeforeMount(() => {
  handleGetLpr()
})

watch(
  () => route.query,
  () => handleGetLpr(),
)
</script>

<style lang="scss" scoped>

</style>
