<template>
  <div>
    <div class="row">
      <!-- BEGIN col-3 -->
      <div class="col-xl-4 col-lg-6">
        <!-- BEGIN card -->
        <div class="card mb-3">
          <!-- BEGIN card-body -->
          <div class="card-body">
            <!-- BEGIN stat-lg -->
            <div class="flex items-center justify-between space-x-2 mb-2">
              <!-- BEGIN title -->
              <div class="d-flex fw-bold small">
                <span class="flex-grow-1">KENDARAAN</span>
              </div>
              <!-- END title -->
              <div>
                <h3 class="mb-0">
                  {{ topCount?.vehicle?.count }}
                </h3>
              </div>
            </div>
            <!-- END stat-lg -->
            <!-- BEGIN stat-sm -->
            <div class="small text-inverse text-opacity-50 text-truncate">
              <i class="fa fa-chevron-up fa-fw me-1" /> {{ topCount?.vehicle?.growth }} than last month<br>
              <i class="fa fa-shopping-bag fa-fw me-1" /> {{ topCount?.vehicle?.growth_percent }}% new vehicles<br>
            </div>
            <!-- END stat-sm -->
          </div>
          <!-- END card-body -->

          <!-- BEGIN card-arrow -->
          <div class="card-arrow">
            <div class="card-arrow-top-left" />
            <div class="card-arrow-top-right" />
            <div class="card-arrow-bottom-left" />
            <div class="card-arrow-bottom-right" />
          </div>
          <!-- END card-arrow -->
        </div>
        <!-- END card -->
      </div>
      <!-- END col-3 -->

      <!-- BEGIN col-3 -->
      <div class="col-xl-4 col-lg-6">
        <!-- BEGIN card -->
        <div class="card mb-3">
          <!-- BEGIN card-body -->
          <div class="card-body">
            <!-- BEGIN stat-lg -->
            <div class="flex items-center justify-between space-x-2 mb-2">
              <!-- BEGIN title -->
              <div class="d-flex fw-bold small">
                <span class="flex-grow-1">PENGUNJUNG</span>
              </div>
              <!-- END title -->
              <div>
                <h3 class="mb-0">
                  {{ topCount?.visitor?.count }}
                </h3>
              </div>
            </div>
            <!-- END stat-lg -->
            <!-- BEGIN stat-sm -->
            <div class="small text-inverse text-opacity-50 text-truncate">
              <i class="fa fa-chevron-up fa-fw me-1" /> {{ topCount?.visitor?.growth }} than last month<br>
              <i class="far fa-user fa-fw me-1" /> {{ topCount?.visitor?.growth_percent }}% new visitors<br>
            </div>
            <!-- END stat-sm -->
          </div>
          <!-- END card-body -->

          <!-- BEGIN card-arrow -->
          <div class="card-arrow">
            <div class="card-arrow-top-left" />
            <div class="card-arrow-top-right" />
            <div class="card-arrow-bottom-left" />
            <div class="card-arrow-bottom-right" />
          </div>
          <!-- END card-arrow -->
        </div>
        <!-- END card -->
      </div>
      <!-- END col-3 -->

      <!-- BEGIN col-3 -->
      <div class="col-xl-4 col-lg-6">
        <!-- BEGIN card -->
        <div class="card mb-3 p-3">
          <!-- BEGIN card-body -->
          <div class="card-body">
            <!-- BEGIN stat-lg -->
            <div class="flex items-center justify-between space-x-2 mb-2">
              <!-- BEGIN title -->
              <div class="d-flex fw-bold small">
                <span class="flex-grow-1">KAMERA CCTV</span>
              </div>
              <!-- END title -->
              <div>
                <h3 class="mb-0">
                  {{ topCount?.camera?.count }}
                </h3>
              </div>
            </div>
            <!-- END stat-lg -->
          </div>
          <!-- END card-body -->

          <!-- BEGIN card-arrow -->
          <div class="card-arrow">
            <div class="card-arrow-top-left" />
            <div class="card-arrow-top-right" />
            <div class="card-arrow-bottom-left" />
            <div class="card-arrow-bottom-right" />
          </div>
          <!-- END card-arrow -->
        </div>
        <!-- END card -->
      </div>
      <!-- END col-3 -->

      <div class="col-xl-12">
        <div class="row">
          <!-- BEGIN col-6 -->
          <div class="col-xl-6">
            <!-- BEGIN card -->
            <div class="card mb-3">
              <!-- BEGIN card-body -->
              <div class="card-body">
                <!-- BEGIN title -->
                <div class="d-flex fw-bold small mb-3">
                  <span class="flex-grow-1">JUMLAH KENDARAAN & PENGUNJUNG</span>
                </div>
                <!-- END title -->
                <!-- BEGIN chart -->
                <div class="mb-3 max-w-[100%]">
                  <ClientOnly>
                    <VueApexCharts
                      type="bar"
                      height="100%"
                      :options="bigBar.chartOptions"
                      :series="bigBar.series"
                    />
                  </ClientOnly>
                </div>
                <!-- END chart -->
                <!-- BEGIN row -->
                <div class="row">
                  <!-- BEGIN col-6 -->
                  <div class="col-lg-6 mb-3 mb-lg-0">
                    <div class="d-flex align-items-center">
                      <!-- BEGIN info -->
                      <div class="ps-3 flex-1">
                        <div class="fs-10px fw-bold text-inverse text-opacity-50 mb-1">
                          JUMLAH KENDARAAN
                        </div>
                        <div class="mb-2 fs-5 text-truncate">
                          {{ vehicleVisitorCount.vehicle?.count }}
                        </div>
                        <div class="progress h-3px bg-secondary-transparent-2 mb-1">
                          <div
                            class="progress-bar bg-theme"
                            style="width: 20%"
                          />
                        </div>
                        <div class="d-flex align-items-center small">
                          <i class="bi bi-circle-fill fs-6px me-2 text-theme" />
                          <div class="flex-1">
                            RESIDENCE
                          </div>
                          <div>{{ vehicleVisitorCount.vehicle?.resident }}</div>
                        </div>
                        <div class="d-flex align-items-center small">
                          <i class="bi bi-circle-fill fs-6px me-2 text-theme text-opacity-50" />
                          <div class="flex-1">
                            VISITOR
                          </div>
                          <div>{{ vehicleVisitorCount.vehicle?.visitor }}</div>
                        </div>
                        <div class="d-flex align-items-center small">
                          <i class="bi bi-circle-fill fs-6px me-2 text-theme text-opacity-50" />
                          <div class="flex-1">
                            Unknown
                          </div>
                          <div>{{ vehicleVisitorCount.vehicle?.unknown }}</div>
                        </div>
                      </div>
                      <!-- END info -->
                    </div>
                  </div>
                  <!-- END col-6 -->
                  <!-- BEGIN col-6 -->
                  <div class="col-lg-6">
                    <div class="d-flex">
                      <!-- BEGIN info -->
                      <div class="ps-3 flex-1">
                        <div class="fs-10px fw-bold text-inverse text-opacity-50 mb-1">
                          Visitor
                        </div>
                        <div class="mb-2 fs-5 text-truncate">
                          {{ vehicleVisitorCount.visitor?.count }}
                        </div>
                        <div class="progress h-3px bg-secondary-transparent-2 mb-1">
                          <div
                            class="progress-bar bg-theme"
                            style="width: 10%"
                          />
                        </div>
                        <div class="d-flex align-items-center small">
                          <i class="bi bi-circle-fill fs-6px me-2 text-theme" />
                          <div class="flex-1">
                            Rapat
                          </div>
                          <div>{{ vehicleVisitorCount.visitor?.rapat }}</div>
                        </div>
                        <div class="d-flex align-items-center small">
                          <i class="bi bi-circle-fill fs-6px me-2 text-theme" />
                          <div class="flex-1">
                            Melakukan Pekerjaan
                          </div>
                          <div>{{ vehicleVisitorCount.visitor['melakukan-pekerjaan'] }}</div>
                        </div>
                        <div class="d-flex align-items-center small">
                          <i class="bi bi-circle-fill fs-6px me-2 text-theme" />
                          <div class="flex-1">
                            Berkunjung
                          </div>
                          <div>{{ vehicleVisitorCount.visitor['berkunjung'] }}</div>
                        </div>
                        <div class="d-flex align-items-center small">
                          <i class="bi bi-circle-fill fs-6px me-2 text-theme" />
                          <div class="flex-1">
                            Patroli
                          </div>
                          <div>{{ vehicleVisitorCount.visitor['patroli'] }}</div>
                        </div>
                      </div>
                      <!-- END info -->
                    </div>
                  </div>
                  <!-- END col-6 -->
                </div>
                <!-- END row -->
              </div>
              <!-- END card-body -->

              <!-- BEGIN card-arrow -->
              <div class="card-arrow">
                <div class="card-arrow-top-left" />
                <div class="card-arrow-top-right" />
                <div class="card-arrow-bottom-left" />
                <div class="card-arrow-bottom-right" />
              </div>
              <!-- END card-arrow -->
            </div>
            <!-- END card -->
          </div>
          <!-- END col-6 -->

          <!-- BEGIN col-6 -->
          <div class="col-xl-6">
            <!-- BEGIN card -->
            <div class="card mb-3">
              <!-- BEGIN card-body -->
              <div class="card-body">
                <!-- BEGIN title -->
                <div class="d-flex fw-bold small mb-3">
                  <span class="flex-grow-1">LOG AKTIFITAS</span>
                </div>
                <!-- END title -->
                <!-- BEGIN table -->
                <div class="table-responsive">
                  <table class="table table-striped table-borderless mb-2px small text-nowrap">
                    <tbody>
                      <tr
                        v-for="(act, actIdx) in lpr?.results"
                        :key="actIdx"
                      >
                        <td>
                          <span class="d-flex align-items-center">
                            <i class="bi bi-circle-fill fs-6px text-theme me-2" />
                            {{ act.number_plate }}
                          </span>
                        </td>
                        <td><small>{{ formatDateFromUTC(act.time_utc_timestamp) }}</small></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- END table -->
              </div>
              <!-- END card-body -->

              <!-- BEGIN card-arrow -->
              <div class="card-arrow">
                <div class="card-arrow-top-left" />
                <div class="card-arrow-top-right" />
                <div class="card-arrow-bottom-left" />
                <div class="card-arrow-bottom-right" />
              </div>
              <!-- END card-arrow -->
            </div>
            <!-- END card -->
          </div>
          <!-- END col-6 -->
        </div>
      </div>

      <!-- BEGIN col-6 -->
      <!-- END col-6 -->
      <div class="col-12">
        <!-- BEGIN card -->
        <div class="card mb-3">
          <!-- BEGIN card-body -->
          <div class="card-body">
            <!-- BEGIN title -->
            <div class="d-flex fw-bold small mb-3">
              <span class="flex-grow-1">PETA KPAD</span>
            </div>
            <!-- END title -->
            <div class="flex justify-center">
              <div class="w-full">
                <AMap
                  v-if="locations?.[0].latlng.lat && locations[0].latlng.lng"
                  v-model:zoom="zoom"
                  :locations="locations"
                  size-class="h-[500px] w-[full]"
                  @click-marker="handleClickMarker"
                />
              </div>
            </div>
          </div>
          <!-- END card-body -->

          <!-- BEGIN card-arrow -->
          <div class="card-arrow">
            <div class="card-arrow-top-left" />
            <div class="card-arrow-top-right" />
            <div class="card-arrow-bottom-left" />
            <div class="card-arrow-bottom-right" />
          </div>
          <!-- END card-arrow -->
        </div>
        <!-- END card -->
      </div>
    </div>
    <AModal
      :is-open="isOpenCameraMap"
      :ui="{ width: 'w-full sm:max-w-[70%]' }"
    >
      <UCard :ui="{ header: { padding: 'p-4' }, body: { padding: 'p-4' } }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold mb-0 text-dark">
              {{ selectedCctvMap.name }}
            </h3>
            <UButton
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="isOpenCameraMap = false"
            />
          </div>
        </template>
        <ACctv
          v-if="isOpenCameraMap"
          :id="selectedCctvMap.id32"
          :src="selectedCctvMap.channel_id"
          :height="700"
          :width="1000"
        />
      </UCard>
    </AModal>
  </div>
</template>

<script lang="ts" setup>
import VueApexCharts from 'vue3-apexcharts'
import { formatDateFromUTC } from '~/utils/helpers'
import type { Camera } from '~/utils/types'

const { $api } = useNuxtApp()

const { data: topCount } = await useAsyncData('top-count', () => $api('/statistic/count/'))
const { data: vehicleVisitorChart } = await useAsyncData('vehicle-visitor-chart', () => $api('/statistic/visitor-and-vehicle-bar/'))
const { data: vehicleVisitorCount } = await useAsyncData('vehicle-visitor-count', () => $api('/statistic/visitor-and-vehicle-count/'))
const { data: cameras } = await useAsyncData('cameras', () => $api('/cctv/camera/'))

const bigBar = ref({
  series: [
    {
      name: 'Kendaraan',
      data: vehicleVisitorChart.value?.vehicle?.map(vc => vc.count) ?? [],
    },
    {
      name: 'Visitor',
      data: vehicleVisitorChart.value?.visitor?.map(vs => vs.count) ?? [],
    },
  ],
  chartOptions: {
    chart: {
      height: 30,
      type: 'bar',
      width: '100%',
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: vehicleVisitorChart.value.vehicle?.map(vcDt => formatDateFromUTC(vcDt.date, 'DD-MM-YYYY')),
    },
    fill: {
      opacity: 1,
    },
  },
})
const lpr = ref()
const lprParams = ref({
  page: '1',
  search: '',
  size: '10',
})
const isOpenCameraMap = ref(false)
const selectedCctvMap = ref()
const locations = ref([])
const zoom = ref()

defineShortcuts({
  escape: {
    usingInput: true,
    whenever: [isOpenCameraMap],
    handler: () => { isOpenCameraMap.value = false },
  },
})

const handleGetLpr = async () => {
  try {
    const res = await $api(`/activity/lpr`, {
      query: {
        channel_id: '',
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
const handleClickMarker = (camera) => {
  selectedCctvMap.value = camera
  isOpenCameraMap.value = true
}
const extractCameraNumber = (name) => {
  const match = name.match(/Camera\s(\d+)/)
  return match ? match[1] : null
}

onBeforeMount(() => {
  // eslint-disable-next-line max-len
  locations.value = cameras.value.results.map((camera: Camera) => ({ latlng: { lat: camera.coordinate.lat, lng: camera.coordinate.lng }, text: extractCameraNumber(camera.name), ...camera }))
})
onMounted(() => handleGetLpr())
</script>

<style lang="scss" scoped>
::v-deep(.video-js) {
  height: 500px;
}
</style>
