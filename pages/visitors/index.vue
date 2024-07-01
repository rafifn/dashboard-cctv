<template>
  <div>
    <OPageHeader
      page-title="Visitor Management"
      add-title="Daftar Pengunjung"
      @add="handleOpenFormCreate"
    />
    <ADatatable
      :params="currentQuery"
      :columns="COLUMNS"
      :rows="visitor?.results ?? []"
      :total-data="visitor?.count?.toString() ?? '0'"
      @update:search="handleSearch"
      @update:page="handleUpdatePage"
      @update:size="handleUpdateSize"
    />
    <AModal
      v-model:is-open="isOpenForm"
    >
      <UCard :ui="{ header: { padding: 'p-4' }, body: { padding: 'p-4' } }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 mb-0 text-white">
              {{ selectedRow ? 'Ubah Pengunjung' : 'Daftar Pengunjung' }}
            </h3>
            <UButton
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="isOpenForm = false"
            />
          </div>
        </template>
        <OFormVisitor
          :is-loading="isLoading"
          @submit="handleSubmitForm"
        />
      </UCard>
    </AModal>
  </div>
</template>

<script setup lang="ts">
import { formatDateFromUTC } from '~/utils/helpers'
import { GENDER_OPTIONS, VISITOR_TYPE_OPTIONS } from '~/utils/constants'

const FIELDS_REQUEST = {
  no_id: 'ID',
  full_name: 'Nama',
  address: 'Alamat',
  gender: 'Jenis Kelamin',
  photo: 'Foto',
  doc_type: 'Tipe Pengunjung',
}
const COLUMNS = [
  { data: 'no_id', title: 'ID', sortable: false },
  { data: 'full_name', title: 'Nama', sortable: false },
  { data: 'address', title: 'Alamat', sortable: false },
  { data: 'gender', title: 'Jenis Kelamin', sortable: false, render: (data) => {
    const gender = GENDER_OPTIONS.find(gd => Number(gd.value) === data.value)
    return gender.text || data.text
  } },
  { data: 'doc_type', title: 'Tipe Pengunjung', sortable: false, render: (data) => {
    const vt = VISITOR_TYPE_OPTIONS.find(vo => vo.value === data.value)
    return vt.text || data.text
  } },
  { data: 'vehicle', title: 'Kendaraan', sortable: false, render: (data) => {
    return `${data.license_plate_number} - ${data.vehicle_type.name}`
  } },
  { data: 'activity', title: 'Activity', sortable: false },
  { data: 'created_at', title: 'Tanggal', sortable: false, render: (data) => {
    return formatDateFromUTC(data)
  } },
]
const { $api } = useNuxtApp()
const toast = useToast()
const route = useRoute()
const { currentQuery, handleUpdatePage, handleSearch, handleUpdateSize } = useTable()

const { data: visitor, refresh } = await useAsyncData('visitor', () => $api('/resident/visitor', {
  query: {
    ...route.query,
  },
}),
{
  watch: [currentQuery],
  immediate: true,
})

const isOpenForm = ref(false)
const isLoading = ref(false)
const selectedRow = ref()

const handleSubmitForm = async (modelForm: unknown) => {
  const method = 'POST'
  const endpoint = '/resident/visitor/'
  try {
    isLoading.value = true
    await $api(endpoint, {
      method: method,
      body: {
        no_id: modelForm.no_id,
        full_name: modelForm.full_name,
        address: modelForm.address,
        gender: modelForm.gender.value,
        doc_type: modelForm.doc_type.value,
        vehicle: {
          license_plate_number: modelForm.vehicle.license_plate_number,
          vehicle_type: modelForm.vehicle.vehicle_type.id32,
        },
        activity: modelForm.activity,
      },
    })
    isOpenForm.value = false
    refresh()
    toast.add({ title: 'Berhasil', description: 'Data Berhasil Ditambahkan', icon: 'i-heroicons-check-circle' })
  } catch (err) {
    isLoading.value = false
    useToastError(FIELDS_REQUEST, err?.response?._data)
  }
}
const handleOpenFormCreate = () => {
  selectedRow.value = undefined
  isOpenForm.value = true
}
</script>

<style scoped>

</style>
