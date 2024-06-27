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
        :model-value="currentQuery.page"
        :size="PAGE_SIZE_CAMERA.toString()"
        :total-data="data?.count?.toString() ?? '0'"
        @update:model-value="handleUpdatePage"
      />
    </div>
    <ADatatable
      :params="currentQuery"
      :columns="COLUMNS"
      :rows="lpr?.results ?? []"
      :total-data="lpr?.count?.toString() ?? '0'"
      @update:search="handleSearchLpr"
      @update:page="handleUpdatePageLpr"
      @update:size="handleUpdateSizeLpr"
    />
  </div>
</template>

<script setup lang="ts">
import { formatDateFromUTC } from '~/utils/helpers'

const COLUMNS = [
  { data: 'number_plate', title: 'Kode Visitor', sortable: false },
  { data: 'camera', title: 'Kamera', sortable: false, render: (data) => {
    return data.name
  } },
  { data: 'time_utc_timestamp', title: 'Waktu Kunjungan', sortable: false, type: 'string', render: (data) => {
    return formatDateFromUTC(data)
  } },
  { data: 'direction', title: 'Arah', sortable: false },
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
const isLoadingChild = ref(false)
const channelIdActive = ref()
const lprParams = ref({
  page: '1',
  search: '',
  size: '10',
})

const handleClickThumbnail = (item: { hls_url: string, id32: string, channel_id: string }) => {
  lprParams.value = {
    page: '1',
    search: '',
    size: '10',
  }
  channelIdActive.value = item.channel_id
}
const handleGetLpr = async () => {
  try {
    const res = await $api(`/cctv/lpr`, {
      query: {
        channel_id: channelIdActive.value || '',
        is_active: true,
        is_gate: true,
        page: lprParams.value.page,
        page_size: lprParams.value.size,
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
    size: '10',
  }
  handleGetLpr()
}
const handleUpdatePageLpr = (page: string) => {
  lprParams.value.page = page
  handleGetLpr()
}
const handleUpdateSizeLpr = (size: string) => {
  lprParams.value.size = size
  lprParams.value.page = '1'
  handleGetLpr()
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
