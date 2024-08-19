<!-- eslint-disable max-len -->
<template>
  <div class="space-y-4">
    <ACctv
      :id="CAMERA.id"
      :src="CAMERA.src"
      :height="500"
    />
    <ADatatable
      :params="currentQuery"
      :columns="COLUMNS"
      :rows="DATA?.results ?? []"
      :total-data="DATA?.count?.toString() ?? '0'"
      :downloadable="false"
      :searchable="false"
      has-actions
    >
      <template #actions>
        <div class="space-x-2">
          <button
            class="btn btn-outline-info mr-1"
          >
            <i class="fa-solid fa-circle-play" />
          </button>
          <button
            class="btn btn-outline-success mr-1"
          >
            <i class="fa-solid fa-circle-down" />
          </button>
        </div>
      </template>
    </ADatatable>
  </div>
</template>

<script setup lang="ts">
import { formatDateFromUTC } from '~/utils/helpers'

const CAMERA = {
  src: 'bab5459e-5844-42e4-9e6f-4547465e1122',
  id: '1',
}
const DATA = {
  results: [
    {
      id_recording: '1',
      camera: 'Camera 32 - POS 20',
      date: 1723775212000,
      total_time: '2 Jam',
    },
    {
      id_recording: '2',
      camera: 'Camera 26 - POS 30',
      date: 1720750396000,
      total_time: '2 Jam',
    },
    {
      id_recording: '3',
      camera: 'Camera 26 - POS 30',
      date: 1720339056000,
      total_time: '2 Jam',
    },
    {
      id_recording: '4',
      camera: 'Camera 32 - POS 20',
      date: 1720146897000,
      total_time: '2 Jam',
    },
    {
      id_recording: '5',
      camera: 'Camera 32 - POS 20',
      date: 1719577419000,
      total_time: '2 Jam',
    },
  ],
  count: 5,
}
const COLUMNS = [
  { data: 'id_recording', title: 'ID Recording', type: 'string', sortable: false },
  { data: 'camera', title: 'Kamera', sortable: false },
  { data: 'date', title: 'Tanggal', sortable: false, render: (data) => {
    return data ? formatDateFromUTC(data) : ''
  } },
  { data: 'total_time', title: 'Total Time', sortable: false },
]

const { currentQuery } = useTable()
</script>

<style scoped>

</style>
