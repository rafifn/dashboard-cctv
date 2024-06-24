<template>
  <div>
    <div class="row">
      <!-- BEGIN col-3 -->
      <div class="col-xl-3 col-lg-6">
        <!-- BEGIN card -->
        <div class="card mb-3">
          <!-- BEGIN card-body -->
          <div class="card-body">
            <!-- BEGIN title -->
            <div class="d-flex fw-bold small mb-3">
              <span class="flex-grow-1">KENDARAAN</span>
              <a
                href="#"
                data-toggle="card-expand"
                class="text-inverse text-opacity-50 text-decoration-none"
              ><i class="bi bi-fullscreen" /></a>
            </div>
            <!-- END title -->
            <!-- BEGIN stat-lg -->
            <div class="flex items-center space-x-2 mb-2">
              <div>
                <h3 class="mb-0">
                  3,820
                </h3>
              </div>
              <div>
                <ClientOnly>
                  <VueApexCharts
                    type="line"
                    height="50"
                    :options="lineData.chartOptions"
                    :series="lineData.series"
                  />
                </ClientOnly>
              </div>
            </div>
            <!-- END stat-lg -->
            <!-- BEGIN stat-sm -->
            <div class="small text-inverse text-opacity-50 text-truncate">
              <i class="fa fa-chevron-up fa-fw me-1" /> 20.4% more than last week<br>
              <i class="fa fa-shopping-bag fa-fw me-1" /> 33.5% new vehicles<br>
              <i class="fa fa-dollar-sign fa-fw me-1" /> 6.21% bounce rate
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
      <div class="col-xl-3 col-lg-6">
        <!-- BEGIN card -->
        <div class="card mb-3">
          <!-- BEGIN card-body -->
          <div class="card-body">
            <!-- BEGIN title -->
            <div class="d-flex fw-bold small mb-3">
              <span class="flex-grow-1">PENGUNJUNG</span>
              <a
                href="#"
                data-toggle="card-expand"
                class="text-inverse text-opacity-50 text-decoration-none"
              ><i class="bi bi-fullscreen" /></a>
            </div>
            <!-- END title -->
            <!-- BEGIN stat-lg -->
            <div class="flex items-center space-x-2 mb-2">
              <div>
                <h3 class="mb-0">
                  4,207
                </h3>
              </div>
              <div>
                <ClientOnly>
                  <VueApexCharts
                    type="bar"
                    height="50"
                    :options="barData.chartOptions"
                    :series="barData.series"
                  />
                </ClientOnly>
              </div>
            </div>
            <!-- END stat-lg -->
            <!-- BEGIN stat-sm -->
            <div class="small text-inverse text-opacity-50 text-truncate">
              <i class="fa fa-chevron-up fa-fw me-1" /> 33.3% more than last week<br>
              <i class="far fa-user fa-fw me-1" /> 45.5% new visitors<br>
              <i class="far fa-times-circle fa-fw me-1" /> 3.25% bounce rate
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
      <div class="col-xl-3 col-lg-6">
        <!-- BEGIN card -->
        <div class="card mb-3">
          <!-- BEGIN card-body -->
          <div class="card-body">
            <!-- BEGIN title -->
            <div class="d-flex fw-bold small mb-3">
              <span class="flex-grow-1">KAMERA CCTV</span>
              <a
                href="#"
                data-toggle="card-expand"
                class="text-inverse text-opacity-50 text-decoration-none"
              ><i class="bi bi-fullscreen" /></a>
            </div>
            <!-- END title -->
            <!-- BEGIN stat-lg -->
            <div class="flex items-center space-x-2 mb-2">
              <div>
                <h3 class="mb-0">
                  4,490
                </h3>
              </div>
              <div>
                <ClientOnly>
                  <VueApexCharts
                    type="line"
                    height="50"
                    :options="pieData.chartOptions"
                    :series="pieData.series"
                  />
                </ClientOnly>
              </div>
            </div>
            <!-- END stat-lg -->
            <!-- BEGIN stat-sm -->
            <div class="small text-inverse text-opacity-50 text-truncate">
              <i class="fa fa-chevron-up fa-fw me-1" /> 59.5% dari gerbang belakang<br>
              <i class="fab fa-facebook-f fa-fw me-1" /> 45.5% dari gerbang depan<br>
              <i class="fab fa-youtube fa-fw me-1" /> 15.25% dari gerbang kanan
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

      <!-- BEGIN col-6 -->
      <div class="col-xl-6">
        <!-- BEGIN card -->
        <div class="card mb-3">
          <!-- BEGIN card-body -->
          <div class="card-body">
            <!-- BEGIN title -->
            <div class="d-flex fw-bold small mb-3">
              <span class="flex-grow-1">JUMLAH KENDARAAN & PENGUNJUNG</span>
              <a
                href="#"
                data-toggle="card-expand"
                class="text-inverse text-opacity-50 text-decoration-none"
              ><i class="bi bi-fullscreen" /></a>
            </div>
            <!-- END title -->
            <!-- BEGIN chart -->
            <div class="ratio ratio-16x9 mb-3">
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
                  <!-- BEGIN chart -->
                  <div class="w-50px h-50px">
                    <div
                      data-render="apexchart"
                      data-type="donut"
                      data-title="Visitors"
                      data-height="50"
                    />
                  </div>
                  <!-- END chart -->
                  <!-- BEGIN info -->
                  <div class="ps-3 flex-1">
                    <div class="fs-10px fw-bold text-inverse text-opacity-50 mb-1">
                      JUMLAH KENDARAAN
                    </div>
                    <div class="mb-2 fs-5 text-truncate">
                      3820
                    </div>
                    <div class="progress h-3px bg-secondary-transparent-2 mb-1">
                      <div
                        class="progress-bar bg-theme"
                        style="width: 20%"
                      />
                    </div>
                    <div class="fs-11px text-inverse text-opacity-50 mb-2 text-truncate">
                      Last updated 1 min ago
                    </div>
                    <div class="d-flex align-items-center small">
                      <i class="bi bi-circle-fill fs-6px me-2 text-theme" />
                      <div class="flex-1">
                        ANGGOTA
                      </div>
                      <div>19.56GB</div>
                    </div>
                    <div class="d-flex align-items-center small">
                      <i class="bi bi-circle-fill fs-6px me-2 text-theme text-opacity-50" />
                      <div class="flex-1">
                        NON-ANGGOTA
                      </div>
                      <div>0.50GB</div>
                    </div>
                  </div>
                  <!-- END info -->
                </div>
              </div>
              <!-- END col-6 -->
              <!-- BEGIN col-6 -->
              <div class="col-lg-6">
                <div class="d-flex">
                  <!-- BEGIN chart -->
                  <div class="w-50px pt-3">
                    <div
                      data-render="apexchart"
                      data-type="donut"
                      data-title="Visitors"
                      data-height="50"
                    />
                  </div>
                  <!-- END chart -->
                  <!-- BEGIN info -->
                  <div class="ps-3 flex-1">
                    <div class="fs-10px fw-bold text-inverse text-opacity-50 mb-1">
                      JUMLAH PENGUNJUNG
                    </div>
                    <div class="mb-2 fs-5 text-truncate">
                      4207
                    </div>
                    <div class="progress h-3px bg-secondary-transparent-2 mb-1">
                      <div
                        class="progress-bar bg-theme"
                        style="width: 10%"
                      />
                    </div>
                    <div class="fs-11px text-inverse text-opacity-50 mb-2 text-truncate">
                      Last updated 1 min ago
                    </div>
                    <div class="d-flex align-items-center small">
                      <i class="bi bi-circle-fill fs-6px me-2 text-theme" />
                      <div class="flex-1">
                        REGULER
                      </div>
                      <div>35.47GB</div>
                    </div>
                    <div class="d-flex align-items-center small">
                      <i class="bi bi-circle-fill fs-6px me-2 text-theme text-opacity-50" />
                      <div class="flex-1">
                        VIP
                      </div>
                      <div>1.25GB</div>
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
              <span class="flex-grow-1">LALU LINTAS KENDARAAN & PENGUNJUNG</span>
              <a
                href="#"
                data-toggle="card-expand"
                class="text-inverse text-opacity-50 text-decoration-none"
              ><i class="bi bi-fullscreen" /></a>
            </div>
            <!-- END title -->
            <!-- BEGIN map -->
            <div class="ratio ratio-16x9 mb-3">
              <img
                src="/public/map2.png"
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

      <!-- BEGIN col-6 -->
      <div class="col-xl-6">
        <!-- BEGIN card -->
        <div class="card mb-3">
          <!-- BEGIN card-body -->
          <div class="card-body">
            <!-- BEGIN title -->
            <div class="d-flex fw-bold small mb-3">
              <span class="flex-grow-1">LOG AKTIFITAS</span>
              <a
                href="#"
                data-toggle="card-expand"
                class="text-inverse text-opacity-50 text-decoration-none"
              ><i class="bi bi-fullscreen" /></a>
            </div>
            <!-- END title -->
            <!-- BEGIN table -->
            <div class="table-responsive">
              <table class="table table-striped table-borderless mb-2px small text-nowrap">
                <tbody>
                  <tr>
                    <td>
                      <span class="d-flex align-items-center">
                        <i class="bi bi-circle-fill fs-6px text-theme me-2" />
                        Pengunjung masuk melewati gerbang depan
                      </span>
                    </td>
                    <td><small>just now</small></td>
                    <td>
                      <span
                        class="badge d-block bg-theme text-theme-900 rounded-0 pt-5px w-70px"
                        style="min-height: 18px"
                      >MONTHLY PASS</span>
                    </td>
                    <td>
                      <a
                        href="#"
                        class="text-decoration-none text-inverse"
                      ><i class="bi bi-search" /></a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="d-flex align-items-center">
                        <i class="bi bi-circle-fill fs-6px text-inverse-transparent-3 me-2" />
                        Mobil Avanza B1234ABC keluar dari gerbang belakang
                      </span>
                    </td>
                    <td><small>1 min ago</small></td>
                    <td>
                      <span
                        class="badge d-block text-inverse bg-secondary bg-opacity-25 rounded-0 pt-5px w-70px"
                        style="min-height: 18px"
                      >WEEKLY PASS</span>
                    </td>
                    <td>
                      <a
                        href="#"
                        class="text-decoration-none text-inverse"
                      ><i class="bi bi-search" /></a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="d-flex align-items-center">
                        <i class="bi bi-circle-fill fs-6px text-inverse-transparent-3 me-2" />
                        Pengunjung keluar dari gerbang belakang
                      </span>
                    </td>
                    <td><small>1 mins ago</small></td>
                    <td>
                      <span
                        class="badge d-block text-inverse bg-secondary bg-opacity-25 rounded-0 pt-5px w-70px"
                        style="min-height: 18px"
                      >DAILY PASS</span>
                    </td>
                    <td>
                      <a
                        href="#"
                        class="text-decoration-none text-inverse"
                      ><i class="bi bi-search" /></a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="d-flex align-items-center">
                        <i class="bi bi-circle-fill fs-6px text-theme me-2" />
                        Pengunjung keluar dari gerbang depan
                      </span>
                    </td>
                    <td><small>1 min ago</small></td>
                    <td>
                      <span
                        class="badge d-block bg-theme text-theme-900 rounded-0 pt-5px w-70px"
                        style="min-height: 18px"
                      >WEEKLY PASS</span>
                    </td>
                    <td>
                      <a
                        href="#"
                        class="text-decoration-none text-inverse"
                      ><i class="bi bi-search" /></a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="d-flex align-items-center">
                        <i class="bi bi-circle-fill fs-6px text-inverse text-opacity-25 me-2" />
                        Pengunjung keluar dari gerbang kanan
                      </span>
                    </td>
                    <td><small>2 mins ago</small></td>
                    <td>
                      <span
                        class="badge d-block text-inverse bg-secondary bg-opacity-25 rounded-0 pt-5px w-70px"
                        style="min-height: 18px"
                      >DAILY PASS</span>
                    </td>
                    <td>
                      <a
                        href="#"
                        class="text-decoration-none text-inverse"
                      ><i class="bi bi-search" /></a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="d-flex align-items-center">
                        <i class="bi bi-circle-fill fs-6px text-theme me-2" />
                        Mobil Brio B2222FFF masuk melewati gerbang kanan
                      </span>
                    </td>
                    <td><small>2 mins ago</small></td>
                    <td>
                      <span
                        class="badge d-block bg-theme text-theme-900 rounded-0 pt-5px w-70px"
                        style="min-height: 18px"
                      >MONTHLY PASS</span>
                    </td>
                    <td>
                      <a
                        href="#"
                        class="text-decoration-none text-inverse"
                      ><i class="bi bi-search" /></a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="d-flex align-items-center">
                        <i class="bi bi-circle-fill fs-6px text-theme me-2" />
                        Pengunjung keluar dari gerbang kiri
                      </span>
                    </td>
                    <td><small>5 mins ago</small></td>
                    <td>
                      <span
                        class="badge d-block bg-theme text-theme-900 rounded-0 pt-5px w-70px"
                        style="min-height: 18px"
                      >DAILY PASS</span>
                    </td>
                    <td>
                      <a
                        href="#"
                        class="text-decoration-none text-inverse"
                      ><i class="bi bi-search" /></a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="d-flex align-items-center">
                        <i class="bi bi-circle-fill fs-6px text-inverse text-opacity-25 me-2" />
                        Pengunjung keluar dari gerbang depan
                      </span>
                    </td>
                    <td><small>5 mins ago</small></td>
                    <td>
                      <span
                        class="badge d-block text-inverse bg-secondary bg-opacity-25 rounded-0 pt-5px w-70px"
                        style="min-height: 18px"
                      >DAILY PASS</span>
                    </td>
                    <td>
                      <a
                        href="#"
                        class="text-decoration-none text-inverse"
                      ><i class="bi bi-search" /></a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="d-flex align-items-center">
                        <i class="bi bi-circle-fill fs-6px text-inverse-transparent-3 me-2" />
                        Pengunjung keluar dari gerbang depan
                      </span>
                    </td>
                    <td><small>5 mins ago</small></td>
                    <td>
                      <span
                        class="badge d-block text-inverse bg-secondary bg-opacity-25 rounded-0 pt-5px w-70px"
                        style="min-height: 18px"
                      >MONTHLY PASS</span>
                    </td>
                    <td>
                      <a
                        href="#"
                        class="text-decoration-none text-inverse"
                      ><i class="bi bi-search" /></a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="d-flex align-items-center">
                        <i class="bi bi-circle-fill fs-6px text-inverse text-opacity-25 me-2" />
                        Pengunjung keluar dari gerbang depan
                      </span>
                    </td>
                    <td><small>7 mins ago</small></td>
                    <td>
                      <span
                        class="badge d-block text-inverse bg-secondary bg-opacity-25 rounded-0 pt-5px w-70px"
                        style="min-height: 18px"
                      >DAILY PASS</span>
                    </td>
                    <td>
                      <a
                        href="#"
                        class="text-decoration-none text-inverse"
                      ><i class="bi bi-search" /></a>
                    </td>
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
</template>

<script lang="ts" setup>
import VueApexCharts from 'vue3-apexcharts'

const lineData = {
  series: [{
    name: 'Desktops',
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
  }],
  chartOptions: {
    chart: {
      height: 30,
      type: 'line',
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
    colors: ['#3cd2a5'],
    stroke: {
      curve: 'straight',
      width: 2,
    },
    grid: { show: false },
    xaxis: {
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
  },
}
const barData = {
  series: [{
    name: 'Desktops',
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
  }],
  chartOptions: {
    chart: {
      height: 30,
      type: 'bar',
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
    plotOptions: { bar: {
      horizontal: false,
      columnWidth: '65%',
      endingShape: 'rounded',
    } },
    colors: ['#3cd2a5'],
    stroke: {
      curve: 'straight',
      width: 2,
    },
    grid: { show: false },
    xaxis: {
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
  },
}
const pieData = {
  series: [{
    name: 'Desktops',
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
  }],
  chartOptions: {
    chart: {
      height: 30,
      type: 'pie',
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
    plotOptions: { bar: {
      horizontal: false,
      columnWidth: '65%',
      endingShape: 'rounded',
    } },
    colors: ['#3cd2a5'],
    stroke: {
      curve: 'straight',
      width: 2,
    },
    grid: { show: false },
    xaxis: {
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
  },
}
const bigBar = {
  series: [{
    name: 'Desktops',
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
  }],
  chartOptions: {
    chart: {
      height: 30,
      type: 'bar',
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
    plotOptions: { bar: {
      horizontal: false,
      columnWidth: '65%',
      endingShape: 'rounded',
    } },
    colors: ['#3cd2a5'],
    stroke: {
      curve: 'straight',
      width: 2,
    },
    grid: { show: false },
    xaxis: {
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
