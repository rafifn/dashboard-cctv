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
            <div>
              <img
                class="object-fit"
                src="/public/map3.jpg"
                alt="map"
                usemap="#image-map"
              >
              <map name="image-map">
                <area
                  alt="Camera 16"
                  title="Camera 16"
                  coords="289,146,17"
                  shape="circle"
                  @click="handleClickMapPoint('Camera 16')"
                >
                <area
                  alt="Camera 25"
                  title="Camera 25"
                  coords="393,115,16"
                  shape="circle"
                  @click="handleClickMapPoint('Camera 25')"
                >
                <area
                  alt="Camera 15"
                  title="Camera 15"
                  coords="275,194,297,199,277,168,269,180"
                  shape="poly"
                  @click="handleClickMapPoint('Camera 15')"
                >
                <area
                  alt="Camera 14"
                  title="Camera 14"
                  coords="303,177,16"
                  shape="circle"
                  @click="handleClickMapPoint('Camera 14')"
                >
                <area
                  alt="Camera 23 &amp; Camera 24"
                  title="Camera 23 &amp; Camera 24"
                  coords="397,179,18"
                  shape="circle"
                  @click="handleClickMapPoint('Camera 23 & Camera 24')"
                >
                <area
                  alt="Camera 13 &amp; Camera 12 &amp; Camera 33"
                  title="Camera 13 &amp; Camera 12 &amp; Camera 33"
                  coords="342,228,19"
                  shape="circle"
                  @click="handleClickMapPoint('Camera 13 & Camera 12 & Camera 33')"
                >
                <area
                  alt="Camera 28"
                  title="Camera 28"
                  coords="150,336,17"
                  shape="circle"
                  @click="handleClickMapPoint('Camera 28')"
                >
                <area
                  alt="Camera 11 &amp; Camera 36"
                  title="Camera 11 &amp; Camera 36"
                  coords="169,325,180,325,186,330,190,336,192,342,193,349,191,355,183,362,169,362,162,357"
                  shape="poly"
                  @click="handleClickMapPoint('Camera 11 & Camera 36')"
                >
                <area
                  alt="Camera 17"
                  title="Camera 17"
                  coords="320,297,17"
                  shape="circle"
                  @click="handleClickMapPoint('Camera 17')"
                >
                <area
                  alt="Camera 27"
                  title="Camera 27"
                  coords="226,438,17"
                  shape="circle"
                  @click="handleClickMapPoint('Camera 27')"
                >
                <area
                  alt="Camera 30"
                  title="Camera 30"
                  coords="209,426,207,420,207,412,210,407,217,403,224,402,231,403,236,408,238,413,239,418"
                  shape="poly"
                  @click="handleClickMapPoint('Camera 30')"
                >
                <area
                  alt="Camera 32"
                  title="Camera 32"
                  coords="294,458,18"
                  shape="circle"
                  @click="handleClickMapPoint('Camera 32')"
                >
                <area
                  alt="Camera 34"
                  title="Camera 34"
                  coords="386,438,17"
                  shape="circle"
                  @click="handleClickMapPoint('Camera 34')"
                >
                <area
                  alt="Camera 21"
                  title="Camera 21"
                  coords="364,446,360,453,360,461,363,466,370,470,376,471,384,469,388,463,393,458"
                  shape="poly"
                  @click="handleClickMapPoint('Camera 21')"
                >
                <area
                  alt="Camera 22 &amp; Camera 20"
                  title="Camera 22 &amp; Camera 20"
                  coords="422,497,21"
                  shape="circle"
                  @click="handleClickMapPoint('Camera 22 & Camera 20')"
                >
                <area
                  alt="Camera 29 &amp; Camera 35"
                  title="Camera 29 &amp; Camera 35"
                  coords="622,502,21"
                  shape="circle"
                  @click="handleClickMapPoint('Camera 29 & Camera 35')"
                >
                <area
                  alt="Camera 19"
                  title="Camera 19"
                  coords="543,593,17"
                  shape="circle"
                  @click="handleClickMapPoint('Camera 19')"
                >
                <area
                  alt="Camera 18"
                  title="Camera 18"
                  coords="529,619,16"
                  shape="circle"
                  @click="handleClickMapPoint('Camera 18')"
                >
                <area
                  alt="Camera 31"
                  title="Camera 31"
                  coords="490,685,17"
                  shape="circle"
                  @click="handleClickMapPoint('Camera 31')"
                >
                <area
                  alt="Camera 26"
                  title="Camera 26"
                  coords="476,721,18"
                  shape="circle"
                  @click="handleClickMapPoint('Camera 26')"
                >
                <area
                  alt="Camera 37"
                  title="Camera 37"
                  coords="468,701,460,696,449,697,440,708,444,719,448,725,453,729,459,730"
                  shape="poly"
                  @click="handleClickMapPoint('Camera 37')"
                >
              </map>
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
      :ui="{ background: 'bg-modal', width: 'w-full sm:max-w-[70%]' }"
    >
      <UCard>
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 mb-0 text-white">
              {{ selectedCctvMap.id }}
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
          :id="selectedCctvMap.id"
          :src="selectedCctvMap.src"
          :height="700"
          :width="1000"
        />
      </UCard>
    </AModal>
  </div>
</template>

<script lang="ts" setup>
import VueApexCharts from 'vue3-apexcharts'
import { MAP_CHANNEL } from '~/utils/constants'
import { formatDateFromUTC } from '~/utils/helpers'

const { $api } = useNuxtApp()

const { data: topCount } = await useAsyncData('top-count', () => $api('/statistic/count/'))
const { data: vehicleVisitorChart } = await useAsyncData('vehicle-visitor-chart', () => $api('/statistic/visitor-and-vehicle-bar/'))
const { data: vehicleVisitorCount } = await useAsyncData('vehicle-visitor-count', () => $api('/statistic/visitor-and-vehicle-count/'))

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
const handleClickMapPoint = (point: string) => {
  const camera = MAP_CHANNEL.find(ch => ch.camera_name.includes(point))
  selectedCctvMap.value = { id: point, src: camera?.channel_id }
  isOpenCameraMap.value = true
}

onMounted(() => handleGetLpr())
</script>

<style lang="scss" scoped>
::v-deep(.video-js) {
  height: 500px;
}
</style>
