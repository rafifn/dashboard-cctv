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
                  35
                </h3>
              </div>
            </div>
            <!-- END stat-lg -->
            <!-- BEGIN stat-sm -->
            <div class="small text-inverse text-opacity-50 text-truncate">
              <i class="fa fa-chevron-up fa-fw me-1" /> 20.4% more than last month<br>
              <i class="fa fa-shopping-bag fa-fw me-1" /> 33.5% new vehicles<br>
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
                  68
                </h3>
              </div>
            </div>
            <!-- END stat-lg -->
            <!-- BEGIN stat-sm -->
            <div class="small text-inverse text-opacity-50 text-truncate">
              <i class="fa fa-chevron-up fa-fw me-1" /> 33.3% more than last month<br>
              <i class="far fa-user fa-fw me-1" /> 45.5% new visitors<br>
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
                  36
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

      <div class="col-xl-6">
        <div class="row flex-column">
          <!-- BEGIN col-6 -->
          <div class="col-xl-12">
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
                          35
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
                          <div>20</div>
                        </div>
                        <div class="d-flex align-items-center small">
                          <i class="bi bi-circle-fill fs-6px me-2 text-theme text-opacity-50" />
                          <div class="flex-1">
                            VISITOR
                          </div>
                          <div>15</div>
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
                          TUJUAN VISIT
                        </div>
                        <div class="mb-2 fs-5 text-truncate">
                          68
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
                            Melakukan Pekerjaan
                          </div>
                          <div>52</div>
                        </div>
                        <div class="d-flex align-items-center small">
                          <i class="bi bi-circle-fill fs-6px me-2 text-theme text-opacity-50" />
                          <div class="flex-1">
                            Berkunjung
                          </div>
                          <div>12</div>
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
          <div class="col-xl-12">
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
      <div class="col-xl-6">
        <!-- BEGIN card -->
        <div class="card mb-3">
          <!-- BEGIN card-body -->
          <div class="card-body">
            <!-- BEGIN title -->
            <div class="d-flex fw-bold small mb-3">
              <span class="flex-grow-1">PETA KPAD</span>
            </div>
            <!-- END title -->
            <!-- BEGIN map -->
            <div
              class="ratio ratio-1x1 mb-3 cursor-pointer"
              @click="isOpenFullMaps = true"
            >
              <img
                src="/public/map3.jpg"
                alt="map"
              >
            </div>
            <!-- END map -->
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
    <AModal
      :is-open="isOpenFullMaps"
      :is-prevent-close="false"
      is-full-screen
    >
      <div class="flex-1 flex flex-col justify-center items-center px-4">
        <UButton
          variant="link"
          color="red"
          icon="i-heroicons-x-mark-20-solid"
          class="ml-auto"
          @click="isOpenFullMaps = false"
        />
        <div class="w-[800px]">
          <img
            class="object-fit"
            src="/public/map3.jpg"
            alt="map"
          >
        </div>
      </div>
    </AModal>
  </div>
</template>

<script lang="ts" setup>
import VueApexCharts from 'vue3-apexcharts'
import { formatDateFromUTC } from '~/utils/helpers'

const bigBar = {
  series: [
    {
      name: 'Residence',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 23, 12, 55],
    },
    {
      name: 'Kendaraan',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 66, 66],
    },
    {
      name: 'Visitor',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 30, 11],
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
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    yaxis: {
      title: {
        text: '$ (thousands)',
      },
    },
    fill: {
      opacity: 1,
    },
  },
}
const { $api } = useNuxtApp()
const lpr = ref()
const lprParams = ref({
  page: '1',
  search: '',
  size: '10',
})
const isOpenFullMaps = ref(false)

defineShortcuts({
  escape: {
    usingInput: true,
    whenever: [isOpenFullMaps],
    handler: () => { isOpenFullMaps.value = false },
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

onMounted(() => handleGetLpr())
</script>

<style lang="scss" scoped>

</style>
