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
      has-actions
      is-editable
      @update:search="handleSearch"
      @update:page="handleUpdatePage"
      @update:size="handleUpdateSize"
      @edit="handleOpenEditForm"
    >
      <template #id_card="prop">
        <img
          v-if="prop.rowData?.person?.photo?.url"
          :src="prop.rowData.person.photo.url"
          alt="ktp"
          class="object-contain w-10 h-10 cursor-pointer"
          @click="openImage(prop.rowData.person.photo.url)"
        >
        <span v-else>-</span>
      </template>
      <template #actions="prop">
        <button
          v-if="!prop.rowData.check_out_timestamp"
          class="btn btn-outline-info mr-1"
          @click="handleCheckout(prop)"
        >
          <i class="fa-solid fa-arrow-right-from-bracket" />
        </button>
      </template>
    </ADatatable>
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
          :detail="selectedRow"
          :is-loading="isLoading"
          @submit="handleSubmitForm"
        />
      </UCard>
    </AModal>
  </div>
</template>

<script setup lang="ts">
import { AConfirmation } from '#components'
import type { Visitor } from '~/utils/types'
import { formatDateFromUTC } from '~/utils/helpers'

const FIELDS_REQUEST = {
  no_id: 'ID',
  full_name: 'Nama',
  address: 'Alamat',
  gender: 'Jenis Kelamin',
  photo: 'Foto',
  doc_type: 'Tipe Pengunjung',
}
const COLUMNS = [
  { data: 'person', title: 'ID', sortable: false, type: 'string', render: (data) => {
    return data?.no_id ?? ''
  } },
  { data: 'person', title: 'Nama', sortable: false, render: (data) => {
    return data?.full_name ?? ''
  } },
  { data: 'purpose_of_visit', title: 'Tujuan', sortable: false, type: 'string', render: (data) => {
    return data?.text ?? ''
  } },
  { data: 'person', title: 'Alamat', sortable: false, render: (data) => {
    return data?.address ?? ''
  } },
  { data: 'check_in_timestamp', title: 'Waktu Checkin', sortable: false, render: (data) => {
    return data ? formatDateFromUTC(data) : ''
  } },
  { data: 'check_out_timestamp', title: 'Waktu Checkout', sortable: false, render: (data) => {
    return data ? formatDateFromUTC(data) : ''
  } },
  { data: null, title: 'KTP', render: '#id_card' },
]
const { $api } = useNuxtApp()
const toast = useToast()
const route = useRoute()
const { currentQuery, handleUpdatePage, handleSearch, handleUpdateSize } = useTable()

const { data: visitor, refresh } = await useAsyncData('visitor', () => $api('/activity/check-in', {
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
const modalDelete = useModal()

const handleSubmitForm = async (modelForm: unknown) => {
  const isEdit = selectedRow.value
  const method = isEdit ? 'PUT' : 'POST'
  const endpoint = isEdit ? `/person/person/${modelForm.person.id32}/` : '/person/person/'
  try {
    isLoading.value = true
    await $api(endpoint, {
      method: method,
      body: {
        person_type: 'visitor',
        no_id: modelForm.no_id,
        full_name: modelForm.full_name,
        address: modelForm.address,
        gender: modelForm.gender.value,
        purpose_of_visit: modelForm.purpose_of_visit.value,
        vehicle: {
          license_plate_number: modelForm.vehicle.license_plate_number,
          vehicle_type: modelForm.vehicle.vehicle_type.id32,
        },
      },
    })
    isOpenForm.value = false
    selectedRow.value = undefined
    refresh()
    toast.add({ title: 'Berhasil', description: 'Data Berhasil Ditambahkan', icon: 'i-heroicons-check-circle' })
  } catch (err) {
    isLoading.value = false
    useToastError(FIELDS_REQUEST, err?.response?._data ?? 'Terjadi Kesalahan')
  }
}
const handleOpenFormCreate = () => {
  selectedRow.value = undefined
  isOpenForm.value = true
}
const handleCheckout = async (row: Visitor) => {
  try {
    modalDelete.open(AConfirmation, {
      title: `Apakah Anda yakin ingin merubah status ${row.rowData.person.no_id} ?`,
      onOk() {
        $api('/activity/check-out/', {
          method: 'POST',
          body: {
            check_in: row.rowData.id32,
          },
        }).then(() => {
          refresh()
          toast.add({ title: 'Berhasil', description: 'Data Berhasil Diperbarui', icon: 'i-heroicons-check-circle' })
          modalDelete.close()
        }).catch((err) => {
          useToastError(FIELDS_REQUEST, err?.response?._data)
        })
      },
      onCancel() {
        modalDelete.close()
      },
    })
  } catch (err) {
    isLoading.value = false
    useToastError(FIELDS_REQUEST, err?.response?._data)
  }
}
const openImage = (src: string) => {
  window.open(src, '_blank')
}
const handleOpenEditForm = (row: Vehicle) => {
  isOpenForm.value = true
  selectedRow.value = row
}
</script>

<style scoped>

</style>
