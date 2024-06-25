<template>
  <div>
    <div class="header">
      <div class="header__item">
        <h1 class="page-header">
          Streaming CCTV
        </h1>
        <span>{{ dateNow }}</span>
      </div>
      <div class="flex space-x-4 mb-2">
        <span>Lokasi:</span>
        <URadioGroup
          v-model="filter.location"
          :options="locations"
          :ui-radio="{
            label: 'text-sm font-medium text-white',
          }"
          :ui="{
            fieldset: 'flex space-x-3',
          }"
          @update:model-value="handleFilterLocation"
        />
      </div>
    </div>
    <div class="wrapper-primary">
      <div
        v-if="isLoadingPrimary || !primary"
        class="card primary__video"
        aria-hidden="true"
      >
        <div class="card-body">
          <h5 class="card-title placeholder-glow">
            <span class="placeholder bg-black" />
          </h5>
        </div>
      </div>
      <ACctv
        v-else
        :id="`primary-${primary.id32}`"
        class="primary__video"
        :src="primary.channel_id"
        :height="500"
      />
      <div class="primary__info">
        <div class="d-flex justify-content-between">
          <div>
            <p>Front Office A</p>
            <p class="primary__status">
              Active
            </p>
            <p>Last Movement: recent</p>
          </div>
          <div>
            <small class="cursor-pointer">Unduh</small>
            <div class="d-flex gap-3">
              <small class="cursor-pointer">Log</small>
              <small>|</small>
              <small class="cursor-pointer">Backup</small>
            </div>
          </div>
        </div>
        <div class="primary__statistic">
          <p class="font-bold statistic__title">
            Room Statistic
          </p>
          <table>
            <tbody>
              <tr>
                <td>Movement</td>
                <td>&nbsp;</td>
                <td v-if="isLoadingStatistic">
                  <USkeleton class="h-4 w-[80px]" />
                </td>
                <td v-else>
                  {{ statistic?.total_movement }} Movement
                </td>
              </tr>
              <tr>
                <td>Visitor</td>
                <td>&nbsp;</td>
                <td v-if="isLoadingStatistic">
                  <USkeleton class="h-4 w-[80px]" />
                </td>
                <td v-else>
                  {{ statistic?.total_visitor }} Visitor
                </td>
              </tr>
              <tr v-if="primary?.location?.name">
                <td>Lokasi</td>
                <td>&nbsp;</td>
                <td v-if="isLoadingStatistic">
                  <USkeleton class="h-4 w-[80px]" />
                </td>
                <td v-else>
                  {{ primary?.location?.name }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="statistic__footer">
          <p class="statistic__title">
            Feed Detail
          </p>
          <span>mpeg4 1080p 30fps</span>
          <br>
          <span>Backed to: 11-10-2013 12:00:00</span>
        </div>
      </div>
    </div>
    <div class="my-2">
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
          :class="['p-1 my-1 w-c-3', { 'cctv--active': primary.id32 === cctv.id32 }]"
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
  </div>
</template>

<script setup lang="ts">
import type { Location } from '~/utils/types'
import { formatDateFromUTC } from '~/utils/helpers'

interface Statistic {
  total_movement: number
  total_visitor: number
}

const PAGE_SIZE_CAMERA = 6

const { $api } = useNuxtApp()
const route = useRoute()
const router = useRouter()
const { currentQuery } = useTable()
const toast = useToast()

const { data } = await useAsyncData('camera', () => $api('/cctv/camera', {
  query: {
    ...route.query,
    ...(route.query.location && route.query.location !== '0' ? { location_id32: route.query.location } : {}),
    is_active: true,
    page_size: PAGE_SIZE_CAMERA,
  },
}),
{
  watch: [currentQuery],
  immediate: true,
})

const dateNow = ref()
const primary = ref(data.value.results[0])
const isLoadingPrimary = ref(false)
const isLoadingChild = ref(false)
const isLoadingStatistic = ref(false)
const statistic = ref<Statistic>()
const locations = ref<Location[]>([])
const filter = ref({
  location: route.query?.location ?? '0',
})

const handleClickThumbnail = (item: { hls_url: string, id32: string, channel_id: string }) => {
  isLoadingPrimary.value = true
  setTimeout(() => {
    isLoadingPrimary.value = false
  }, 500)
  primary.value = item
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
    isLoadingChild.value = false
  }, 500)
}
const getStatistic = async () => {
  try {
    isLoadingStatistic.value = true
    const data = await $api<Statistic>(`/cctv/camera/${primary.value.channel_id}/statistic`)
    statistic.value = data
  } catch (error) {
    toast.add({ description: JSON.stringify(err?.response?._data), color: 'red' })
  } finally {
    setTimeout(() => {
      isLoadingStatistic.value = false
    }, 500)
  }
}
const getLocation = async () => {
  try {
    const { results } = await $api<{ results: Location[] }>('cctv/location')
    const remap = results.map(rs => ({ label: rs.name, value: rs.id32 }))
    locations.value = [
      {
        value: '0',
        label: 'Semua',
      },
      ...remap,
    ]
  } catch (error) {
    toast.add({ description: JSON.stringify(err?.response?._data), color: 'red' })
  }
}
const handleFilterLocation = () => {
  router.replace({
    path: route.path,
    query: {
      ...route.query,
      location: filter.value.location,
    },
  })
}

onMounted(() => {
  dateNow.value = formatDateFromUTC('', 'dddd, DD MMMM YYYY')
  getStatistic()
  getLocation()
})

watch(primary, () => {
  getStatistic()
})
</script>

<style lang="scss" scoped>
p {
  margin: unset;
}
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
.wrapper {
  &-primary {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
}
.primary {
  &__video {
    flex: 1;
    width: 100%;
    --bs-border-color-rgb: '';
    .card-body {
      padding: 0;
    }
    .placeholder {
      height: 500px;
      width: 100%;
    }
  }
  &__info {
    background-color: #252525;
    padding: 1rem;
    width: fit-content;
    display: flex;
    flex-direction: column;
  }
  &__status {
    color: #3BA18A;
  }
  &__statistic {
    margin-top: 3rem;
    text-align: center;
    color: #ffffff;
    font-weight: 500;
    table {
      margin: 0 auto;
    }
    td {
      text-align: left;
      padding: 6px;
    }
  }
}
.cctv {
  &--active {
    box-shadow: 0px 4px 20px 0px rgba(59, 161, 138, 1);
    border: 3px solid rgba(59, 161, 138, 1);
  }
}
.statistic {
  &__title {
    margin-bottom: 10px;
    font-weight: 700;
  }
  &__footer {
    margin-top: auto;
  }
}
.gap {
  &-3 {
    gap: 0.75;
  }
  &-4 {
    gap: 1rem;
  }
}
</style>
