<!-- eslint-disable max-len -->
<template>
  <div>
    <h1 class="page-header">
      Gate Monitoring
    </h1>
    <div class="my-4">
      <div
        v-if="isLoadingChild"
        class="d-flex flex-wrap"
      >
        <div
          v-for="i in 6"
          :key="`loading-${i}`"
          class="w-c-3 thumbnail cctv-placeholder"
        >
          <div class="card">
            <div class="card-body">
              <span class="placeholder bg-black" />
            </div>
          </div>
        </div>
      </div>
      <div
        v-else
        class="d-flex flex-wrap"
      >
        <ACctv
          v-for="(cctv, cctvIdx) in data.results"
          :id="cctv.id32"
          :key="`cctv-${cctvIdx}`"
          :class="['p-1 my-1 w-c-3', { 'cctv--active': channelIdActive === cctv.channel_id }]"
          :src="cctv.channel_id"
          @click="handleClickThumbnail(cctv)"
        />
      </div>
      <APagination
        v-if="data.results.length"
        :model-value="currentQuery.page"
        :size="PAGE_SIZE_CAMERA.toString()"
        :total-data="data?.count?.toString() ?? '0'"
        @update:model-value="handleUpdatePage"
      />
    </div>
    <ADatatable
      v-if="isRenderingTable"
      :params="lprParams"
      :columns="COLUMNS"
      :rows="lpr?.results ?? []"
      :total-data="lpr?.count?.toString() ?? '0'"
      @update:search="handleSearchLpr"
      @update:page="handleUpdatePageLpr"
      @update:size="handleUpdateSizeLpr"
    >
      <template #checkin="prop">
        <span>{{ prop?.rowData?.direction?.toLowerCase() === 'in' ? formatDateFromUTC(prop.rowData.time_utc_timestamp) : '' }}</span>
      </template>
      <template #checkout="prop">
        <span>{{ prop?.rowData?.direction?.toLowerCase() === 'out' ? formatDateFromUTC(prop.rowData.time_utc_timestamp) : '' }}</span>
      </template>
      <template #snapshot="prop">
        <img
          v-if="prop?.rowData?.snapshot"
          :src="prop?.rowData?.snapshot?.url"
          class="w-20 object-contain cursor-pointer"
          alt="kendaraan"
          @click="openImage(prop.rowData.snapshot?.url)"
        >
      </template>
    </ADatatable>
  </div>
</template>

<script setup lang="ts">
import { formatDateFromUTC } from '~/utils/helpers'

const COLUMNS = [
  { data: 'number_plate', title: 'Plat Nomor', sortable: false },
  { data: 'camera', title: 'Kamera', sortable: false, render: (data) => {
    return data.name
  } },
  { data: null, title: 'Timestamp Masuk', type: 'string', render: '#checkin' },
  { data: null, title: 'Timestamp Keluar', type: 'string', render: '#checkout' },
  { data: null, title: 'Foto Kendaraan', type: 'string', render: '#snapshot' },
]
const PAGE_SIZE_CAMERA = 6

const { $api } = useNuxtApp()
const route = useRoute()
const router = useRouter()

const { currentQuery } = useTable()

const { data } = await useAsyncData('camera', () => $api('/cctv/camera', {
  query: {
    page: route.query.page,
    is_active: true,
    is_gate: true,
    page_size: PAGE_SIZE_CAMERA,
  },
}),
{
  watch: [currentQuery],
  immediate: true,
})

const lpr = ref()
const isRenderingTable = ref(true)
const isLoadingChild = ref(false)
const channelIdActive = ref()
const lprParams = ref({
  page: '1',
  search: '',
  page_size: '10',
})

const handleClickThumbnail = (item: { hls_url: string, id32: string, channel_id: string }) => {
  lprParams.value = {
    page: '1',
    search: '',
    page_size: '10',
  }
  channelIdActive.value = item.channel_id
}
const handleGetLpr = async () => {
  try {
    const res = await $api(`/activity/lpr`, {
      query: {
        channel_id: channelIdActive.value || '',
        is_active: true,
        is_gate: true,
        page: lprParams.value.page,
        page_size: lprParams.value.page_size,
        search: lprParams.value.search,
      },
    })
    lpr.value = res
  } catch (err) {
    alert(JSON.stringify(err))
  }
}
const handleSearchLpr = (keyword: string) => {
  lprParams.value = {
    search: keyword,
    page: '1',
    page_size: '10',
  }
  handleGetLpr()
}
const handleUpdatePageLpr = (page: string) => {
  lprParams.value.page = page
  handleGetLpr()
}
const handleUpdateSizeLpr = (size: string) => {
  lprParams.value.page_size = size
  lprParams.value.page = '1'
  handleGetLpr()
  isRenderingTable.value = false
  setTimeout(() => {
    isRenderingTable.value = true
  }, 500)
}
const handleUpdatePage = (page: string) => {
  isLoadingChild.value = true
  router.push({
    path: route.path,
    query: {
      ...route.query,
      page,
    },
  })
  setTimeout(() => {
    channelIdActive.value = data.value.results[0].channel_id
    isLoadingChild.value = false
  }, 500)
}
const openImage = (src: string) => {
  window.open(src, '_blank')
}

onBeforeMount(() => {
  handleGetLpr()
})

watch(channelIdActive, () => {
  handleGetLpr()
})
</script>

<style lang="scss" scoped>
.cctv {
  &--active {
    box-shadow: 0px 4px 20px 0px rgba(59, 161, 138, 1);
    border: 3px solid rgba(59, 161, 138, 1);
  }
}
</style>
