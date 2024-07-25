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
      @update:search="handleSearch"
      @update:page="handleUpdatePage"
      @update:size="handleUpdateSize"
      @delete="handleDelete"
    />
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
        <OFormVehicle @submit="handleSubmitForm" />
      </UCard>
    </AModal>
  </div>
</template>

<script setup lang="ts">
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
]
const { $api } = useNuxtApp()
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

const handleSubmitForm = async (modelForm: unknown) => {
  try {
    await $api('/vehicle/vehicle/', {
      method: 'POST',
      body: {
        license_plate_number: modelForm.license,
        vehicle_type: modelForm.vehicle.id32,
        person: modelForm.person.id32,
      },
    })
    isOpenForm.value = false
    refresh()
    toast.add({ title: 'Berhasil', description: 'Data Berhasil Ditambahkan', icon: 'i-heroicons-check-circle' })
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
</script>

<style scoped>

</style>
