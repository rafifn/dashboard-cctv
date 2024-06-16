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
            <div class="row align-items-center mb-2">
              <div class="col-7">
                <h3 class="mb-0">
                  3,820
                </h3>
              </div>
              <div class="col-5">
                <div
                  class="mt-n2"
                  data-render="apexchart"
                  data-type="line"
                  data-title="Visitors"
                  data-height="30"
                />
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
            <div class="row align-items-center mb-2">
              <div class="col-7">
                <h3 class="mb-0">
                  4,207
                </h3>
              </div>
              <div class="col-5">
                <div
                  class="mt-n2"
                  data-render="apexchart"
                  data-type="bar"
                  data-title="Visitors"
                  data-height="30"
                />
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
            <div class="row align-items-center mb-2">
              <div class="col-7">
                <h3 class="mb-0">
                  4,490
                </h3>
              </div>
              <div class="col-5">
                <div
                  class="mt-n3 mb-n2"
                  data-render="apexchart"
                  data-type="pie"
                  data-title="Visitors"
                  data-height="45"
                />
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
            <div class="ratio ratio-21x9 mb-3">
              <div id="chart-server" />
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
    <ADatatable
      :page="$route.query?.page ?? '1'"
      :size="$route.query?.size ?? '10'"
      :columns="COLUMNS"
      :rows="ROWS"
      :total-data="`${ROWS.length}`"
      @update:page="handleUpdatePage"
      @update:size="handleUpdateSize"
    />
  </div>
</template>

<script setup>
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
const ROWS = [
  {
    id: 5,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: 'b268795c-6d70-4c7e-b526-110c3b588b6d',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-VAH',
    direction: 'Unknown',
    time_utc_timestamp: 1718081454264,
  },
  {
    id: 7,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: '2ba771b6-f5b7-4c20-9f04-eeeae76f19d5',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-SAM',
    direction: 'In',
    time_utc_timestamp: 1718187191948,
  },
  {
    id: 8,
    camera: {
      id32: '1A',
      name: 'Camera 33 - POS 10',
    },
    vehicle: null,
    uuid: '9121ac45-8917-4ffa-87bb-01fcdbfd4658',
    channel_id: 'e726acdf-6194-4471-88f7-159790713a23',
    number_plate: 'B-1685-RZF',
    direction: 'Out',
    time_utc_timestamp: 1718361315273,
  },
  {
    id: 6,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: {
      id32: '3',
      license_plate_number: 'B-1943-TIY',
      vehicle_type: {
        id32: '1',
        name: 'Mobil Pribadi',
      },
      owner: {
        full_name: 'M.ALI HAROMEN',
        no_id: '891027390037',
        id32: '1',
      },
    },
    uuid: '3e6dbae0-6303-4704-8d07-b248a8deb51a',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-1943-TIY',
    direction: 'Unknown',
    time_utc_timestamp: 1718084677534,
  },
  {
    id: 5,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: 'b268795c-6d70-4c7e-b526-110c3b588b6d',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-VAH',
    direction: 'Unknown',
    time_utc_timestamp: 1718081454264,
  },
  {
    id: 7,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: '2ba771b6-f5b7-4c20-9f04-eeeae76f19d5',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-SAM',
    direction: 'In',
    time_utc_timestamp: 1718187191948,
  },
  {
    id: 8,
    camera: {
      id32: '1A',
      name: 'Camera 33 - POS 10',
    },
    vehicle: null,
    uuid: '9121ac45-8917-4ffa-87bb-01fcdbfd4658',
    channel_id: 'e726acdf-6194-4471-88f7-159790713a23',
    number_plate: 'B-1685-RZF',
    direction: 'Out',
    time_utc_timestamp: 1718361315273,
  },
  {
    id: 6,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: {
      id32: '3',
      license_plate_number: 'B-1943-TIY',
      vehicle_type: {
        id32: '1',
        name: 'Mobil Pribadi',
      },
      owner: {
        full_name: 'M.ALI HAROMEN',
        no_id: '891027390037',
        id32: '1',
      },
    },
    uuid: '3e6dbae0-6303-4704-8d07-b248a8deb51a',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-1943-TIY',
    direction: 'Unknown',
    time_utc_timestamp: 1718084677534,
  },
  {
    id: 5,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: 'b268795c-6d70-4c7e-b526-110c3b588b6d',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-VAH',
    direction: 'Unknown',
    time_utc_timestamp: 1718081454264,
  },
  {
    id: 7,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: '2ba771b6-f5b7-4c20-9f04-eeeae76f19d5',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-SAM',
    direction: 'In',
    time_utc_timestamp: 1718187191948,
  },
  {
    id: 8,
    camera: {
      id32: '1A',
      name: 'Camera 33 - POS 10',
    },
    vehicle: null,
    uuid: '9121ac45-8917-4ffa-87bb-01fcdbfd4658',
    channel_id: 'e726acdf-6194-4471-88f7-159790713a23',
    number_plate: 'B-1685-RZF',
    direction: 'Out',
    time_utc_timestamp: 1718361315273,
  },
  {
    id: 6,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: {
      id32: '3',
      license_plate_number: 'B-1943-TIY',
      vehicle_type: {
        id32: '1',
        name: 'Mobil Pribadi',
      },
      owner: {
        full_name: 'M.ALI HAROMEN',
        no_id: '891027390037',
        id32: '1',
      },
    },
    uuid: '3e6dbae0-6303-4704-8d07-b248a8deb51a',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-1943-TIY',
    direction: 'Unknown',
    time_utc_timestamp: 1718084677534,
  },
  {
    id: 5,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: 'b268795c-6d70-4c7e-b526-110c3b588b6d',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-VAH',
    direction: 'Unknown',
    time_utc_timestamp: 1718081454264,
  },
  {
    id: 7,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: '2ba771b6-f5b7-4c20-9f04-eeeae76f19d5',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-SAM',
    direction: 'In',
    time_utc_timestamp: 1718187191948,
  },
  {
    id: 8,
    camera: {
      id32: '1A',
      name: 'Camera 33 - POS 10',
    },
    vehicle: null,
    uuid: '9121ac45-8917-4ffa-87bb-01fcdbfd4658',
    channel_id: 'e726acdf-6194-4471-88f7-159790713a23',
    number_plate: 'B-1685-RZF',
    direction: 'Out',
    time_utc_timestamp: 1718361315273,
  },
  {
    id: 6,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: {
      id32: '3',
      license_plate_number: 'B-1943-TIY',
      vehicle_type: {
        id32: '1',
        name: 'Mobil Pribadi',
      },
      owner: {
        full_name: 'M.ALI HAROMEN',
        no_id: '891027390037',
        id32: '1',
      },
    },
    uuid: '3e6dbae0-6303-4704-8d07-b248a8deb51a',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-1943-TIY',
    direction: 'Unknown',
    time_utc_timestamp: 1718084677534,
  },
  {
    id: 5,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: 'b268795c-6d70-4c7e-b526-110c3b588b6d',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-VAH',
    direction: 'Unknown',
    time_utc_timestamp: 1718081454264,
  },
  {
    id: 7,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: '2ba771b6-f5b7-4c20-9f04-eeeae76f19d5',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-SAM',
    direction: 'In',
    time_utc_timestamp: 1718187191948,
  },
  {
    id: 8,
    camera: {
      id32: '1A',
      name: 'Camera 33 - POS 10',
    },
    vehicle: null,
    uuid: '9121ac45-8917-4ffa-87bb-01fcdbfd4658',
    channel_id: 'e726acdf-6194-4471-88f7-159790713a23',
    number_plate: 'B-1685-RZF',
    direction: 'Out',
    time_utc_timestamp: 1718361315273,
  },
  {
    id: 6,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: {
      id32: '3',
      license_plate_number: 'B-1943-TIY',
      vehicle_type: {
        id32: '1',
        name: 'Mobil Pribadi',
      },
      owner: {
        full_name: 'M.ALI HAROMEN',
        no_id: '891027390037',
        id32: '1',
      },
    },
    uuid: '3e6dbae0-6303-4704-8d07-b248a8deb51a',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-1943-TIY',
    direction: 'Unknown',
    time_utc_timestamp: 1718084677534,
  },
  {
    id: 5,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: 'b268795c-6d70-4c7e-b526-110c3b588b6d',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-VAH',
    direction: 'Unknown',
    time_utc_timestamp: 1718081454264,
  },
  {
    id: 7,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: '2ba771b6-f5b7-4c20-9f04-eeeae76f19d5',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-SAM',
    direction: 'In',
    time_utc_timestamp: 1718187191948,
  },
  {
    id: 8,
    camera: {
      id32: '1A',
      name: 'Camera 33 - POS 10',
    },
    vehicle: null,
    uuid: '9121ac45-8917-4ffa-87bb-01fcdbfd4658',
    channel_id: 'e726acdf-6194-4471-88f7-159790713a23',
    number_plate: 'B-1685-RZF',
    direction: 'Out',
    time_utc_timestamp: 1718361315273,
  },
  {
    id: 6,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: {
      id32: '3',
      license_plate_number: 'B-1943-TIY',
      vehicle_type: {
        id32: '1',
        name: 'Mobil Pribadi',
      },
      owner: {
        full_name: 'M.ALI HAROMEN',
        no_id: '891027390037',
        id32: '1',
      },
    },
    uuid: '3e6dbae0-6303-4704-8d07-b248a8deb51a',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-1943-TIY',
    direction: 'Unknown',
    time_utc_timestamp: 1718084677534,
  },
  {
    id: 5,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: 'b268795c-6d70-4c7e-b526-110c3b588b6d',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-VAH',
    direction: 'Unknown',
    time_utc_timestamp: 1718081454264,
  },
  {
    id: 7,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: '2ba771b6-f5b7-4c20-9f04-eeeae76f19d5',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-SAM',
    direction: 'In',
    time_utc_timestamp: 1718187191948,
  },
  {
    id: 8,
    camera: {
      id32: '1A',
      name: 'Camera 33 - POS 10',
    },
    vehicle: null,
    uuid: '9121ac45-8917-4ffa-87bb-01fcdbfd4658',
    channel_id: 'e726acdf-6194-4471-88f7-159790713a23',
    number_plate: 'B-1685-RZF',
    direction: 'Out',
    time_utc_timestamp: 1718361315273,
  },
  {
    id: 6,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: {
      id32: '3',
      license_plate_number: 'B-1943-TIY',
      vehicle_type: {
        id32: '1',
        name: 'Mobil Pribadi',
      },
      owner: {
        full_name: 'M.ALI HAROMEN',
        no_id: '891027390037',
        id32: '1',
      },
    },
    uuid: '3e6dbae0-6303-4704-8d07-b248a8deb51a',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-1943-TIY',
    direction: 'Unknown',
    time_utc_timestamp: 1718084677534,
  },
  {
    id: 5,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: 'b268795c-6d70-4c7e-b526-110c3b588b6d',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-VAH',
    direction: 'Unknown',
    time_utc_timestamp: 1718081454264,
  },
  {
    id: 7,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: '2ba771b6-f5b7-4c20-9f04-eeeae76f19d5',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-SAM',
    direction: 'In',
    time_utc_timestamp: 1718187191948,
  },
  {
    id: 8,
    camera: {
      id32: '1A',
      name: 'Camera 33 - POS 10',
    },
    vehicle: null,
    uuid: '9121ac45-8917-4ffa-87bb-01fcdbfd4658',
    channel_id: 'e726acdf-6194-4471-88f7-159790713a23',
    number_plate: 'B-1685-RZF',
    direction: 'Out',
    time_utc_timestamp: 1718361315273,
  },
  {
    id: 6,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: {
      id32: '3',
      license_plate_number: 'B-1943-TIY',
      vehicle_type: {
        id32: '1',
        name: 'Mobil Pribadi',
      },
      owner: {
        full_name: 'M.ALI HAROMEN',
        no_id: '891027390037',
        id32: '1',
      },
    },
    uuid: '3e6dbae0-6303-4704-8d07-b248a8deb51a',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-1943-TIY',
    direction: 'Unknown',
    time_utc_timestamp: 1718084677534,
  },
  {
    id: 5,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: 'b268795c-6d70-4c7e-b526-110c3b588b6d',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-VAH',
    direction: 'Unknown',
    time_utc_timestamp: 1718081454264,
  },
  {
    id: 7,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: '2ba771b6-f5b7-4c20-9f04-eeeae76f19d5',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-SAM',
    direction: 'In',
    time_utc_timestamp: 1718187191948,
  },
  {
    id: 8,
    camera: {
      id32: '1A',
      name: 'Camera 33 - POS 10',
    },
    vehicle: null,
    uuid: '9121ac45-8917-4ffa-87bb-01fcdbfd4658',
    channel_id: 'e726acdf-6194-4471-88f7-159790713a23',
    number_plate: 'B-1685-RZF',
    direction: 'Out',
    time_utc_timestamp: 1718361315273,
  },
  {
    id: 6,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: {
      id32: '3',
      license_plate_number: 'B-1943-TIY',
      vehicle_type: {
        id32: '1',
        name: 'Mobil Pribadi',
      },
      owner: {
        full_name: 'M.ALI HAROMEN',
        no_id: '891027390037',
        id32: '1',
      },
    },
    uuid: '3e6dbae0-6303-4704-8d07-b248a8deb51a',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-1943-TIY',
    direction: 'Unknown',
    time_utc_timestamp: 1718084677534,
  },
  {
    id: 5,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: 'b268795c-6d70-4c7e-b526-110c3b588b6d',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-VAH',
    direction: 'Unknown',
    time_utc_timestamp: 1718081454264,
  },
  {
    id: 7,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: '2ba771b6-f5b7-4c20-9f04-eeeae76f19d5',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-SAM',
    direction: 'In',
    time_utc_timestamp: 1718187191948,
  },
  {
    id: 8,
    camera: {
      id32: '1A',
      name: 'Camera 33 - POS 10',
    },
    vehicle: null,
    uuid: '9121ac45-8917-4ffa-87bb-01fcdbfd4658',
    channel_id: 'e726acdf-6194-4471-88f7-159790713a23',
    number_plate: 'B-1685-RZF',
    direction: 'Out',
    time_utc_timestamp: 1718361315273,
  },
  {
    id: 6,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: {
      id32: '3',
      license_plate_number: 'B-1943-TIY',
      vehicle_type: {
        id32: '1',
        name: 'Mobil Pribadi',
      },
      owner: {
        full_name: 'M.ALI HAROMEN',
        no_id: '891027390037',
        id32: '1',
      },
    },
    uuid: '3e6dbae0-6303-4704-8d07-b248a8deb51a',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-1943-TIY',
    direction: 'Unknown',
    time_utc_timestamp: 1718084677534,
  },
  {
    id: 5,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: 'b268795c-6d70-4c7e-b526-110c3b588b6d',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-VAH',
    direction: 'Unknown',
    time_utc_timestamp: 1718081454264,
  },
  {
    id: 7,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: '2ba771b6-f5b7-4c20-9f04-eeeae76f19d5',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-SAM',
    direction: 'In',
    time_utc_timestamp: 1718187191948,
  },
  {
    id: 8,
    camera: {
      id32: '1A',
      name: 'Camera 33 - POS 10',
    },
    vehicle: null,
    uuid: '9121ac45-8917-4ffa-87bb-01fcdbfd4658',
    channel_id: 'e726acdf-6194-4471-88f7-159790713a23',
    number_plate: 'B-1685-RZF',
    direction: 'Out',
    time_utc_timestamp: 1718361315273,
  },
  {
    id: 6,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: {
      id32: '3',
      license_plate_number: 'B-1943-TIY',
      vehicle_type: {
        id32: '1',
        name: 'Mobil Pribadi',
      },
      owner: {
        full_name: 'M.ALI HAROMEN',
        no_id: '891027390037',
        id32: '1',
      },
    },
    uuid: '3e6dbae0-6303-4704-8d07-b248a8deb51a',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-1943-TIY',
    direction: 'Unknown',
    time_utc_timestamp: 1718084677534,
  },
  {
    id: 5,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: 'b268795c-6d70-4c7e-b526-110c3b588b6d',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-VAH',
    direction: 'Unknown',
    time_utc_timestamp: 1718081454264,
  },
  {
    id: 7,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: '2ba771b6-f5b7-4c20-9f04-eeeae76f19d5',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-SAM',
    direction: 'In',
    time_utc_timestamp: 1718187191948,
  },
  {
    id: 8,
    camera: {
      id32: '1A',
      name: 'Camera 33 - POS 10',
    },
    vehicle: null,
    uuid: '9121ac45-8917-4ffa-87bb-01fcdbfd4658',
    channel_id: 'e726acdf-6194-4471-88f7-159790713a23',
    number_plate: 'B-1685-RZF',
    direction: 'Out',
    time_utc_timestamp: 1718361315273,
  },
  {
    id: 6,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: {
      id32: '3',
      license_plate_number: 'B-1943-TIY',
      vehicle_type: {
        id32: '1',
        name: 'Mobil Pribadi',
      },
      owner: {
        full_name: 'M.ALI HAROMEN',
        no_id: '891027390037',
        id32: '1',
      },
    },
    uuid: '3e6dbae0-6303-4704-8d07-b248a8deb51a',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-1943-TIY',
    direction: 'Unknown',
    time_utc_timestamp: 1718084677534,
  },
  {
    id: 5,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: 'b268795c-6d70-4c7e-b526-110c3b588b6d',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-VAH',
    direction: 'Unknown',
    time_utc_timestamp: 1718081454264,
  },
  {
    id: 7,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: '2ba771b6-f5b7-4c20-9f04-eeeae76f19d5',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-SAM',
    direction: 'In',
    time_utc_timestamp: 1718187191948,
  },
  {
    id: 8,
    camera: {
      id32: '1A',
      name: 'Camera 33 - POS 10',
    },
    vehicle: null,
    uuid: '9121ac45-8917-4ffa-87bb-01fcdbfd4658',
    channel_id: 'e726acdf-6194-4471-88f7-159790713a23',
    number_plate: 'B-1685-RZF',
    direction: 'Out',
    time_utc_timestamp: 1718361315273,
  },
  {
    id: 6,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: {
      id32: '3',
      license_plate_number: 'B-1943-TIY',
      vehicle_type: {
        id32: '1',
        name: 'Mobil Pribadi',
      },
      owner: {
        full_name: 'M.ALI HAROMEN',
        no_id: '891027390037',
        id32: '1',
      },
    },
    uuid: '3e6dbae0-6303-4704-8d07-b248a8deb51a',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-1943-TIY',
    direction: 'Unknown',
    time_utc_timestamp: 1718084677534,
  },
  {
    id: 5,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: 'b268795c-6d70-4c7e-b526-110c3b588b6d',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-VAH',
    direction: 'Unknown',
    time_utc_timestamp: 1718081454264,
  },
  {
    id: 7,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: '2ba771b6-f5b7-4c20-9f04-eeeae76f19d5',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-SAM',
    direction: 'In',
    time_utc_timestamp: 1718187191948,
  },
  {
    id: 8,
    camera: {
      id32: '1A',
      name: 'Camera 33 - POS 10',
    },
    vehicle: null,
    uuid: '9121ac45-8917-4ffa-87bb-01fcdbfd4658',
    channel_id: 'e726acdf-6194-4471-88f7-159790713a23',
    number_plate: 'B-1685-RZF',
    direction: 'Out',
    time_utc_timestamp: 1718361315273,
  },
  {
    id: 6,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: {
      id32: '3',
      license_plate_number: 'B-1943-TIY',
      vehicle_type: {
        id32: '1',
        name: 'Mobil Pribadi',
      },
      owner: {
        full_name: 'M.ALI HAROMEN',
        no_id: '891027390037',
        id32: '1',
      },
    },
    uuid: '3e6dbae0-6303-4704-8d07-b248a8deb51a',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-1943-TIY',
    direction: 'Unknown',
    time_utc_timestamp: 1718084677534,
  },
  {
    id: 5,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: 'b268795c-6d70-4c7e-b526-110c3b588b6d',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-VAH',
    direction: 'Unknown',
    time_utc_timestamp: 1718081454264,
  },
  {
    id: 7,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: '2ba771b6-f5b7-4c20-9f04-eeeae76f19d5',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-SAM',
    direction: 'In',
    time_utc_timestamp: 1718187191948,
  },
  {
    id: 8,
    camera: {
      id32: '1A',
      name: 'Camera 33 - POS 10',
    },
    vehicle: null,
    uuid: '9121ac45-8917-4ffa-87bb-01fcdbfd4658',
    channel_id: 'e726acdf-6194-4471-88f7-159790713a23',
    number_plate: 'B-1685-RZF',
    direction: 'Out',
    time_utc_timestamp: 1718361315273,
  },
  {
    id: 6,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: {
      id32: '3',
      license_plate_number: 'B-1943-TIY',
      vehicle_type: {
        id32: '1',
        name: 'Mobil Pribadi',
      },
      owner: {
        full_name: 'M.ALI HAROMEN',
        no_id: '891027390037',
        id32: '1',
      },
    },
    uuid: '3e6dbae0-6303-4704-8d07-b248a8deb51a',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-1943-TIY',
    direction: 'Unknown',
    time_utc_timestamp: 1718084677534,
  },
  {
    id: 5,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: 'b268795c-6d70-4c7e-b526-110c3b588b6d',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-VAH',
    direction: 'Unknown',
    time_utc_timestamp: 1718081454264,
  },
  {
    id: 7,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: '2ba771b6-f5b7-4c20-9f04-eeeae76f19d5',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-SAM',
    direction: 'In',
    time_utc_timestamp: 1718187191948,
  },
  {
    id: 8,
    camera: {
      id32: '1A',
      name: 'Camera 33 - POS 10',
    },
    vehicle: null,
    uuid: '9121ac45-8917-4ffa-87bb-01fcdbfd4658',
    channel_id: 'e726acdf-6194-4471-88f7-159790713a23',
    number_plate: 'B-1685-RZF',
    direction: 'Out',
    time_utc_timestamp: 1718361315273,
  },
  {
    id: 6,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: {
      id32: '3',
      license_plate_number: 'B-1943-TIY',
      vehicle_type: {
        id32: '1',
        name: 'Mobil Pribadi',
      },
      owner: {
        full_name: 'M.ALI HAROMEN',
        no_id: '891027390037',
        id32: '1',
      },
    },
    uuid: '3e6dbae0-6303-4704-8d07-b248a8deb51a',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-1943-TIY',
    direction: 'Unknown',
    time_utc_timestamp: 1718084677534,
  },
  {
    id: 5,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: 'b268795c-6d70-4c7e-b526-110c3b588b6d',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-VAH',
    direction: 'Unknown',
    time_utc_timestamp: 1718081454264,
  },
  {
    id: 7,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: '2ba771b6-f5b7-4c20-9f04-eeeae76f19d5',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-SAM',
    direction: 'In',
    time_utc_timestamp: 1718187191948,
  },
  {
    id: 8,
    camera: {
      id32: '1A',
      name: 'Camera 33 - POS 10',
    },
    vehicle: null,
    uuid: '9121ac45-8917-4ffa-87bb-01fcdbfd4658',
    channel_id: 'e726acdf-6194-4471-88f7-159790713a23',
    number_plate: 'B-1685-RZF',
    direction: 'Out',
    time_utc_timestamp: 1718361315273,
  },
  {
    id: 6,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: {
      id32: '3',
      license_plate_number: 'B-1943-TIY',
      vehicle_type: {
        id32: '1',
        name: 'Mobil Pribadi',
      },
      owner: {
        full_name: 'M.ALI HAROMEN',
        no_id: '891027390037',
        id32: '1',
      },
    },
    uuid: '3e6dbae0-6303-4704-8d07-b248a8deb51a',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-1943-TIY',
    direction: 'Unknown',
    time_utc_timestamp: 1718084677534,
  },
  {
    id: 5,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: 'b268795c-6d70-4c7e-b526-110c3b588b6d',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-VAH',
    direction: 'Unknown',
    time_utc_timestamp: 1718081454264,
  },
  {
    id: 7,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: '2ba771b6-f5b7-4c20-9f04-eeeae76f19d5',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-SAM',
    direction: 'In',
    time_utc_timestamp: 1718187191948,
  },
  {
    id: 8,
    camera: {
      id32: '1A',
      name: 'Camera 33 - POS 10',
    },
    vehicle: null,
    uuid: '9121ac45-8917-4ffa-87bb-01fcdbfd4658',
    channel_id: 'e726acdf-6194-4471-88f7-159790713a23',
    number_plate: 'B-1685-RZF',
    direction: 'Out',
    time_utc_timestamp: 1718361315273,
  },
  {
    id: 6,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: {
      id32: '3',
      license_plate_number: 'B-1943-TIY',
      vehicle_type: {
        id32: '1',
        name: 'Mobil Pribadi',
      },
      owner: {
        full_name: 'M.ALI HAROMEN',
        no_id: '891027390037',
        id32: '1',
      },
    },
    uuid: '3e6dbae0-6303-4704-8d07-b248a8deb51a',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-1943-TIY',
    direction: 'Unknown',
    time_utc_timestamp: 1718084677534,
  },
  {
    id: 5,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: 'b268795c-6d70-4c7e-b526-110c3b588b6d',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-VAH',
    direction: 'Unknown',
    time_utc_timestamp: 1718081454264,
  },
  {
    id: 7,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: '2ba771b6-f5b7-4c20-9f04-eeeae76f19d5',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-SAM',
    direction: 'In',
    time_utc_timestamp: 1718187191948,
  },
  {
    id: 8,
    camera: {
      id32: '1A',
      name: 'Camera 33 - POS 10',
    },
    vehicle: null,
    uuid: '9121ac45-8917-4ffa-87bb-01fcdbfd4658',
    channel_id: 'e726acdf-6194-4471-88f7-159790713a23',
    number_plate: 'B-1685-RZF',
    direction: 'Out',
    time_utc_timestamp: 1718361315273,
  },
  {
    id: 6,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: {
      id32: '3',
      license_plate_number: 'B-1943-TIY',
      vehicle_type: {
        id32: '1',
        name: 'Mobil Pribadi',
      },
      owner: {
        full_name: 'M.ALI HAROMEN',
        no_id: '891027390037',
        id32: '1',
      },
    },
    uuid: '3e6dbae0-6303-4704-8d07-b248a8deb51a',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-1943-TIY',
    direction: 'Unknown',
    time_utc_timestamp: 1718084677534,
  },
  {
    id: 5,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: 'b268795c-6d70-4c7e-b526-110c3b588b6d',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-VAH',
    direction: 'Unknown',
    time_utc_timestamp: 1718081454264,
  },
  {
    id: 7,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: '2ba771b6-f5b7-4c20-9f04-eeeae76f19d5',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-SAM',
    direction: 'In',
    time_utc_timestamp: 1718187191948,
  },
  {
    id: 8,
    camera: {
      id32: '1A',
      name: 'Camera 33 - POS 10',
    },
    vehicle: null,
    uuid: '9121ac45-8917-4ffa-87bb-01fcdbfd4658',
    channel_id: 'e726acdf-6194-4471-88f7-159790713a23',
    number_plate: 'B-1685-RZF',
    direction: 'Out',
    time_utc_timestamp: 1718361315273,
  },
  {
    id: 6,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: {
      id32: '3',
      license_plate_number: 'B-1943-TIY',
      vehicle_type: {
        id32: '1',
        name: 'Mobil Pribadi',
      },
      owner: {
        full_name: 'M.ALI HAROMEN',
        no_id: '891027390037',
        id32: '1',
      },
    },
    uuid: '3e6dbae0-6303-4704-8d07-b248a8deb51a',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-1943-TIY',
    direction: 'Unknown',
    time_utc_timestamp: 1718084677534,
  },
  {
    id: 5,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: 'b268795c-6d70-4c7e-b526-110c3b588b6d',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-VAH',
    direction: 'Unknown',
    time_utc_timestamp: 1718081454264,
  },
  {
    id: 7,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: '2ba771b6-f5b7-4c20-9f04-eeeae76f19d5',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-SAM',
    direction: 'In',
    time_utc_timestamp: 1718187191948,
  },
  {
    id: 8,
    camera: {
      id32: '1A',
      name: 'Camera 33 - POS 10',
    },
    vehicle: null,
    uuid: '9121ac45-8917-4ffa-87bb-01fcdbfd4658',
    channel_id: 'e726acdf-6194-4471-88f7-159790713a23',
    number_plate: 'B-1685-RZF',
    direction: 'Out',
    time_utc_timestamp: 1718361315273,
  },
  {
    id: 6,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: {
      id32: '3',
      license_plate_number: 'B-1943-TIY',
      vehicle_type: {
        id32: '1',
        name: 'Mobil Pribadi',
      },
      owner: {
        full_name: 'M.ALI HAROMEN',
        no_id: '891027390037',
        id32: '1',
      },
    },
    uuid: '3e6dbae0-6303-4704-8d07-b248a8deb51a',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-1943-TIY',
    direction: 'Unknown',
    time_utc_timestamp: 1718084677534,
  },
  {
    id: 5,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: 'b268795c-6d70-4c7e-b526-110c3b588b6d',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-VAH',
    direction: 'Unknown',
    time_utc_timestamp: 1718081454264,
  },
  {
    id: 7,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: '2ba771b6-f5b7-4c20-9f04-eeeae76f19d5',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-SAM',
    direction: 'In',
    time_utc_timestamp: 1718187191948,
  },
  {
    id: 8,
    camera: {
      id32: '1A',
      name: 'Camera 33 - POS 10',
    },
    vehicle: null,
    uuid: '9121ac45-8917-4ffa-87bb-01fcdbfd4658',
    channel_id: 'e726acdf-6194-4471-88f7-159790713a23',
    number_plate: 'B-1685-RZF',
    direction: 'Out',
    time_utc_timestamp: 1718361315273,
  },
  {
    id: 6,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: {
      id32: '3',
      license_plate_number: 'B-1943-TIY',
      vehicle_type: {
        id32: '1',
        name: 'Mobil Pribadi',
      },
      owner: {
        full_name: 'M.ALI HAROMEN',
        no_id: '891027390037',
        id32: '1',
      },
    },
    uuid: '3e6dbae0-6303-4704-8d07-b248a8deb51a',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-1943-TIY',
    direction: 'Unknown',
    time_utc_timestamp: 1718084677534,
  },
  {
    id: 5,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: 'b268795c-6d70-4c7e-b526-110c3b588b6d',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-VAH',
    direction: 'Unknown',
    time_utc_timestamp: 1718081454264,
  },
  {
    id: 7,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: '2ba771b6-f5b7-4c20-9f04-eeeae76f19d5',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-SAM',
    direction: 'In',
    time_utc_timestamp: 1718187191948,
  },
  {
    id: 8,
    camera: {
      id32: '1A',
      name: 'Camera 33 - POS 10',
    },
    vehicle: null,
    uuid: '9121ac45-8917-4ffa-87bb-01fcdbfd4658',
    channel_id: 'e726acdf-6194-4471-88f7-159790713a23',
    number_plate: 'B-1685-RZF',
    direction: 'Out',
    time_utc_timestamp: 1718361315273,
  },
  {
    id: 6,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: {
      id32: '3',
      license_plate_number: 'B-1943-TIY',
      vehicle_type: {
        id32: '1',
        name: 'Mobil Pribadi',
      },
      owner: {
        full_name: 'M.ALI HAROMEN',
        no_id: '891027390037',
        id32: '1',
      },
    },
    uuid: '3e6dbae0-6303-4704-8d07-b248a8deb51a',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-1943-TIY',
    direction: 'Unknown',
    time_utc_timestamp: 1718084677534,
  },
  {
    id: 5,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: 'b268795c-6d70-4c7e-b526-110c3b588b6d',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-VAH',
    direction: 'Unknown',
    time_utc_timestamp: 1718081454264,
  },
  {
    id: 7,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: '2ba771b6-f5b7-4c20-9f04-eeeae76f19d5',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-SAM',
    direction: 'In',
    time_utc_timestamp: 1718187191948,
  },
  {
    id: 8,
    camera: {
      id32: '1A',
      name: 'Camera 33 - POS 10',
    },
    vehicle: null,
    uuid: '9121ac45-8917-4ffa-87bb-01fcdbfd4658',
    channel_id: 'e726acdf-6194-4471-88f7-159790713a23',
    number_plate: 'B-1685-RZF',
    direction: 'Out',
    time_utc_timestamp: 1718361315273,
  },
  {
    id: 6,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: {
      id32: '3',
      license_plate_number: 'B-1943-TIY',
      vehicle_type: {
        id32: '1',
        name: 'Mobil Pribadi',
      },
      owner: {
        full_name: 'M.ALI HAROMEN',
        no_id: '891027390037',
        id32: '1',
      },
    },
    uuid: '3e6dbae0-6303-4704-8d07-b248a8deb51a',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-1943-TIY',
    direction: 'Unknown',
    time_utc_timestamp: 1718084677534,
  },
  {
    id: 5,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: 'b268795c-6d70-4c7e-b526-110c3b588b6d',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-VAH',
    direction: 'Unknown',
    time_utc_timestamp: 1718081454264,
  },
  {
    id: 7,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: '2ba771b6-f5b7-4c20-9f04-eeeae76f19d5',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-SAM',
    direction: 'In',
    time_utc_timestamp: 1718187191948,
  },
  {
    id: 8,
    camera: {
      id32: '1A',
      name: 'Camera 33 - POS 10',
    },
    vehicle: null,
    uuid: '9121ac45-8917-4ffa-87bb-01fcdbfd4658',
    channel_id: 'e726acdf-6194-4471-88f7-159790713a23',
    number_plate: 'B-1685-RZF',
    direction: 'Out',
    time_utc_timestamp: 1718361315273,
  },
  {
    id: 6,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: {
      id32: '3',
      license_plate_number: 'B-1943-TIY',
      vehicle_type: {
        id32: '1',
        name: 'Mobil Pribadi',
      },
      owner: {
        full_name: 'M.ALI HAROMEN',
        no_id: '891027390037',
        id32: '1',
      },
    },
    uuid: '3e6dbae0-6303-4704-8d07-b248a8deb51a',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-1943-TIY',
    direction: 'Unknown',
    time_utc_timestamp: 1718084677534,
  },
  {
    id: 5,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: 'b268795c-6d70-4c7e-b526-110c3b588b6d',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-VAH',
    direction: 'Unknown',
    time_utc_timestamp: 1718081454264,
  },
  {
    id: 7,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: null,
    uuid: '2ba771b6-f5b7-4c20-9f04-eeeae76f19d5',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-9256-SAM',
    direction: 'In',
    time_utc_timestamp: 1718187191948,
  },
  {
    id: 8,
    camera: {
      id32: '1A',
      name: 'Camera 33 - POS 10',
    },
    vehicle: null,
    uuid: '9121ac45-8917-4ffa-87bb-01fcdbfd4658',
    channel_id: 'e726acdf-6194-4471-88f7-159790713a23',
    number_plate: 'B-1685-RZF',
    direction: 'Out',
    time_utc_timestamp: 1718361315273,
  },
  {
    id: 6,
    camera: {
      id32: '13',
      name: 'Camera 26 - POS 30',
    },
    vehicle: {
      id32: '3',
      license_plate_number: 'B-1943-TIY',
      vehicle_type: {
        id32: '1',
        name: 'Mobil Pribadi',
      },
      owner: {
        full_name: 'M.ALI HAROMEN',
        no_id: '891027390037',
        id32: '1',
      },
    },
    uuid: '3e6dbae0-6303-4704-8d07-b248a8deb51a',
    channel_id: 'bab5459e-5844-42e4-9e6f-4547465e1122',
    number_plate: 'B-1943-TIY',
    direction: 'Unknown',
    time_utc_timestamp: 1718084677534,
  },
]

const route = useRoute()
const router = useRouter()

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
