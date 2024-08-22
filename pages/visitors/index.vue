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
        <button
          class="btn btn-outline-info mr-1"
          @click="handleVerify(prop)"
        >
          <i class="fa-regular fa-eye" />
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
              @click="isOpenVerify = false"
            />
          </div>
        </template>
        <div class="flex space-x-4 divide-x">
          <div class="space-y-4 w-[50%]">
            <img
              v-if="selectedRow.rowData.person.photo.url"
              :src="selectedRow.rowData.person.photo.url"
              :alt="selectedRow.rowData.person.full_name"
              class="w-20 mb-2"
            >
            <span class="block">Nama : {{ selectedRow.rowData.person?.full_name }}</span>
            <hr>
            <span class="block">NIK : {{ selectedRow.rowData.person.no_id }}</span>
            <hr>
            <span class="block">Alamat : {{ selectedRow.rowData.person.address }}</span>
          </div>
          <div class="px-2 w-[50%]">
            <img
              v-if="visitorVerificationData.image"
              :src="visitorVerificationData.image"
              :alt="visitor.nama_lgkp"
              class="w-20 mb-2"
            >
            <span class="block">Nama : {{ visitorVerificationData.nama_lgkp }}</span>
            <hr>
            <span class="block">NIK : {{ visitorVerificationData.nik }}</span>
            <hr>
            <span class="block">Jenis Kelamin : {{ visitorVerificationData.jenis_klmin }}</span>
            <hr>
            <span class="block">TTL :
              {{ visitorVerificationData.tmpt_lhr }},
              {{ visitorVerificationData.tgl_lhr }}
            </span>
            <hr>
            <span class="block">
              Status : {{ visitorVerificationData.stat_kwn }}
            </span>
            <hr>
            <span class="block">
              Pekerjaan : {{ visitorVerificationData.jenis_pkrjn }}
            </span>
            <hr>
            <span class="block">
              Alamat :
              {{ visitorVerificationData.alamat }},
              {{ visitorVerificationData.nama_kel }},
              {{ visitorVerificationData.nama_kec }},
              {{ visitorVerificationData.nama_kab }},
              {{ visitorVerificationData.nama_prop }}
            </span>
          </div>
        </div>
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
  { data: 'visitor_id', title: 'ID', responsivePriority: 0, sortable: false },
  { data: 'person', title: 'NIK', sortable: false, type: 'string', responsivePriority: 1, render: (data) => {
    return data?.no_id ?? ''
  } },
  { data: 'person', title: 'Nama', sortable: false, responsivePriority: 2, render: (data) => {
    return data?.full_name ?? ''
  } },
  { data: 'purpose_of_visit', title: 'Tujuan', sortable: false, type: 'string', responsivePriority: 3, render: (data) => {
    return data?.text ?? ''
  } },
  { data: 'check_in_timestamp', title: 'Waktu Checkin', sortable: false, responsivePriority: 4, render: (data) => {
    return data ? formatDateFromUTC(data) : ''
  } },
  { data: 'check_out_timestamp', title: 'Waktu Checkout', sortable: false, responsivePriority: 5, render: (data) => {
    return data ? formatDateFromUTC(data) : ''
  } },
  { data: 'person', title: 'Alamat', sortable: false, responsivePriority: 9, target: 0, render: (data) => {
    return data?.address ?? ''
  } },
  { data: null, title: 'KTP', responsivePriority: 8, target: 0, render: '#id_card' },
]
const { $api, $loader } = useNuxtApp()
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
const isOpenVerify = ref(false)
const isLoading = ref(false)
const selectedRow = ref()
const visitorVerificationData = ref()
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
const handleVerify = async (row: Vehicle) => {
  try {
    $loader.start()
    const resp = await $dukcapil('/kependudukan/public/api/get-info-nik', {
      method: 'POST',
      body: {
        nik: row?.rowData?.person?.no_id,
      },
      headers: {
        key: Math.random(),
      },
    })
    if (resp?.data) {
      visitorVerificationData.value = resp.data
      selectedRow.value = row
      isOpenVerify.value = true
    } else {
      toast.add({ description: JSON.stringify(resp?.message) ?? 'Terjadi Kesalahan, coba lagi beberapa saat', color: 'red' })
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
