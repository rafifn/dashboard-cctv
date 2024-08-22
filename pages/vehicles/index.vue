<template>
  <div>
    <OPageHeader
      page-title="Vehicle Management"
      add-title="Daftar Kendaraan"
      @add="isOpenForm = true"
    />
    <ADatatable
      :params="currentQuery"
      :columns="COLUMNS"
      :rows="vehicles?.results ?? []"
      :total-data="vehicles?.count?.toString() ?? '0'"
      is-deleteable
      is-editable
      @update:search="handleSearch"
      @update:page="handleUpdatePage"
      @update:size="handleUpdateSize"
      @delete="handleDelete"
      @edit="handleOpenEditForm"
    >
      <template #last_snapshot="prop">
        <img
          v-if="prop?.rowData?.last_snapshot"
          :src="prop?.rowData?.last_snapshot?.url"
          class="h-20 w-20 object-contain cursor-pointer"
          alt="kendaraan"
          @click="openImage(prop.rowData.last_snapshot?.url)"
        >
      </template>
      <template #last_checkin_timestamp="prop">
        <span>{{ formatDateFromUTC(prop.rowData?.last_checkin_timestamp) }}</span>
      </template>
      <template #actions="prop">
        <button
          v-if="prop.rowData?.license_plate_number"
          class="btn btn-outline-info mr-1"
          @click="handleVerify(prop)"
        >
          <i class="fa-regular fa-eye" />
        </button>
      </template>
    </ADatatable>
    <AModal
      :is-open="isOpenForm"
    >
      <UCard :ui="{ header: { padding: 'p-4' }, body: { padding: 'p-4' } }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 mb-0 text-white">
              Daftar Kendaraan
            </h3>
            <UButton
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="isOpenForm = false"
            />
          </div>
        </template>
        <OFormVehicle
          :detail="selectedRow"
          @submit="handleSubmitForm"
        />
      </UCard>
    </AModal>
    <AModal
      :is-open="isOpenVerify"
    >
      <UCard :ui="{ header: { padding: 'p-4' }, body: { padding: 'p-4' } }">
        <template #header>
          <div class="flex items-center justify-end">
            <UButton
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="isOpenForm = false"
            />
          </div>
        </template>
        <div class="flex space-x-4 divide-x">
          <div class="space-y-4 w-[50%]">
            <span class="block">Nama : {{ selectedRow.rowData.person?.full_name }}</span>
            <hr>
            <span class="block">Plat Nomor : {{ selectedRow.rowData.license_plate_number }}</span>
          </div>
          <div class="px-2 w-[50%]">
            <span class="block">Nama : {{ vehicleVerificationData.nama }}</span>
            <hr>
            <span class="block">Plat Nomor : {{ vehicleVerificationData.nopol }}</span>
            <hr>
            <span class="block">Merk : {{ vehicleVerificationData.merks_text }}</span>
            <hr>
            <span class="block">
              Warna : {{ vehicleVerificationData.warna }}
            </span>
            <hr>
            <span class="block">
              Tahun : {{ vehicleVerificationData.thn }}
            </span>
            <hr>
            <span class="block">
              No. Mesin : {{ vehicleVerificationData.no_mesin }}
            </span>
            <hr>
            <span class="block">
              Alamat :
              {{ vehicleVerificationData.alamat }}
            </span>
          </div>
        </div>
      </UCard>
    </AModal>
  </div>
</template>

<script setup lang="ts">
import type { Vehicle } from '~/utils/types'
import { formatDateFromUTC } from '~/utils/helpers'
import { AConfirmation } from '#components'

const FIELDS_REQUEST = {
  license_plate_number: 'Nopol',
  vehicle_type: 'Jenis Kendaraan',
  person: 'Pemilik',
}
const COLUMNS = [
  { data: 'license_plate_number', title: 'Plat Nomor', sortable: false },
  { data: 'vehicle_type', title: 'Jenis Kendaraan', sortable: false, render: (data) => {
    return data?.name ?? ''
  } },
  { data: 'person', title: 'Nama Pemilik', sortable: false, type: 'string', render: (data) => {
    return data?.full_name ?? ''
  } },
  { data: null, title: 'Checkin Terakhir', sortable: false, type: 'string', render: '#last_checkin_timestamp' },
  { data: null, title: 'Foto Kendaraan', render: '#last_snapshot' },
]
const { $api, $loader } = useNuxtApp()
const toast = useToast()
const modalDelete = useModal()
const route = useRoute()
const { currentQuery, handleUpdatePage, handleSearch, handleUpdateSize } = useTable()

const { data: vehicles, refresh } = await useAsyncData('vehicles', () => $api('/vehicle/vehicle', {
  query: {
    ...route.query,
  },
}),
{
  watch: [currentQuery],
  immediate: true,
})

const isOpenForm = ref(false)
const isOpenVerify = ref(false)
const selectedRow = ref()
const vehicleVerificationData = ref()

const handleSubmitForm = async (modelForm: unknown) => {
  try {
    const isEdit = selectedRow.value
    const endpoint = isEdit ? `/vehicle/vehicle/${selectedRow.value.id32}/` : '/vehicle/vehicle/'
    await $api(endpoint, {
      method: isEdit ? 'PATCH' : 'POST',
      body: {
        license_plate_number: modelForm.license,
        vehicle_type: modelForm.vehicle.id32,
        person: modelForm.person.id32,
      },
    })
    isOpenForm.value = false
    selectedRow.value = undefined
    refresh()
    const description = isEdit ? 'Data Berhasil Diperbarui' : 'Data Berhasil Ditambahkan'
    toast.add({ title: 'Berhasil', description, icon: 'i-heroicons-check-circle' })
  } catch (err) {
    useToastError(FIELDS_REQUEST, err?.response?._data)
  }
}
const handleDelete = (row: unknown) => {
  modalDelete.open(AConfirmation, {
    title: `Apakah Anda yakin ingin menghapus ${row.license_plate_number} ?`,
    onOk() {
      $api(`/vehicle/vehicle/${row.id32}`, {
        method: 'DELETE',
      }).then(() => {
        refresh()
        toast.add({ title: 'Berhasil', description: 'Data Berhasil Dihapus', icon: 'i-heroicons-check-circle' })
        modalDelete.close()
      }).catch((err) => {
        useToastError(FIELDS_REQUEST, err?.response?._data)
      })
    },
    onCancel() {
      modalDelete.close()
    },
  })
}
const openImage = (src: string) => {
  window.open(src, '_blank')
}
const handleOpenEditForm = (row: Vehicle) => {
  isOpenForm.value = true
  selectedRow.value = row
}
const handleVerify = async (row: unknown) => {
  try {
    $loader.start()
    const resp = await $fetch('/api/korlantas', {
      method: 'POST',
      body: {
        search: 'r2183oa',
        key: 'nopol',
      },
    })
    if (resp?.data && resp?.data?.length) {
      vehicleVerificationData.value = resp.data[0]
      selectedRow.value = row
      isOpenVerify.value = true
    } else {
      toast.add({ description: resp?.message ?? 'Terjadi Kesalahan, coba lagi beberapa saat', color: 'red' })
    }
  } catch (err) {
    toast.add({ description: err?.response?._data ?? err?.response?.statusMessage ?? 'Terjadi Kesalahan', color: 'red' })
  } finally {
    $loader.finish()
  }
}
</script>

<style scoped>

</style>
