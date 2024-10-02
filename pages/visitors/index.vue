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
      <template #photo="prop">
        <img
          v-if="prop.rowData?.camera_photo?.url"
          :src="prop.rowData?.camera_photo?.url"
          alt="photo"
          class="object-contain w-10 h-10 cursor-pointer"
          @click="openImage(prop.rowData?.camera_photo?.url)"
        >
        <span v-else>-</span>
      </template>
      <template #id_card="prop">
        <img
          v-if="prop.rowData?.person?.photo?.url"
          :src="prop.rowData?.person?.photo?.url"
          alt="ktp"
          class="object-contain w-10 h-10 cursor-pointer"
          @click="openImage(prop.rowData?.person?.photo?.url)"
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
          v-if="prop.rowData?.person?.no_id"
          class="btn btn-outline-info mr-1"
          @click="handleVerify(prop)"
        >
          <i class="fa-regular fa-eye" />
        </button>
      </template>
    </ADatatable>
    <AModal
      v-model:is-open="isOpenForm"
      width="sm:max-w-[1000px] w-[800px]"
      @update:model-value="handleCloseForm"
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
              @click="handleCloseForm"
            />
          </div>
        </template>
        <OFormVisitor
          ref="formVisitor"
          :detail="selectedRow"
          :is-loading="isLoading"
          @submit="handleSubmitForm"
        />
      </UCard>
    </AModal>
    <AModal
      :is-open="isOpenVerify"
      width="w-full sm:max-w-[45%]"
    >
      <UCard :ui="{ header: { padding: 'p-4' }, body: { padding: 'py-4 px-0' } }">
        <template #header>
          <div class="flex items-center justify-between">
            <p class="font-bold mb-0">
              DATA DUKCAPIL
            </p>
            <UButton
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="isOpenVerify = false"
            />
          </div>
        </template>
        <div class="text-center pb-4 border-b">
          <h2 :class="`${[isDukcapilValid ? 'text-green-600' : 'text-red-600']} mb-0`">
            {{ isDukcapilValid ? 'SESUAI' : 'TIDAK SESUAI' }}
          </h2>
        </div>
        <div class="flex space-x-4 divide-x px-4">
          <div class="w-[50%] pt-4">
            <img
              v-if="selectedRow?.rowData?.person?.photo?.url"
              :src="selectedRow?.rowData?.person?.photo?.url"
              :alt="selectedRow?.rowData.person.full_name"
              class="w-20 mb-2"
            >
          </div>
          <div class="w-[50%] px-2 pt-4">
            <img
              v-if="visitorVerificationData?.image"
              :src="visitorVerificationData?.image"
              :alt="visitor?.nama_lgkp"
              class="w-20 mb-2"
            >
          </div>
        </div>
        <div class="flex space-x-4 divide-x px-4">
          <div class="space-y-4 w-[50%]">
            <div class="flex flex-wrap gap-x-2">
              <span>Nama : </span>
              <span>{{ selectedRow.rowData.person?.full_name }}</span>
            </div>
            <hr>
            <div class="flex flex-wrap gap-x-2">
              <span>NIK : </span>
              <span>{{ selectedRow.rowData.person?.no_id }}</span>
            </div>
            <hr>
            <div class="flex flex-wrap gap-x-2">
              <span>Alamat : </span>
              <span>{{ selectedRow.rowData.person?.address }}</span>
            </div>
          </div>
          <div class="px-2 w-[50%]">
            <div class="flex flex-wrap gap-x-2">
              <span>Nama :</span>
              <span>{{ visitorVerificationData?.nama_lgkp }}</span>
            </div>
            <hr>
            <div class="flex flex-wrap gap-x-2">
              <span>NIK :</span>
              <span>{{ visitorVerificationData?.nik }}</span>
            </div>
            <hr>
            <div class="flex flex-wrap gap-x-2">
              <span>Jenis Kelamin :</span>
              <span>{{ visitorVerificationData?.jenis_klmin }}</span>
            </div>
            <hr>
            <div class="flex flex-wrap gap-x-2">
              <span>TTL :</span>
              <span v-if="isDukcapilValid">
                {{ visitorVerificationData?.tmpt_lhr }}, {{ visitorVerificationData?.tgl_lhr }}
              </span>
            </div>
            <hr>
            <div class="flex flex-wrap gap-x-2">
              <span>Status :</span>
              <span v-if="isDukcapilValid">
                {{ visitorVerificationData?.stat_kwn }}
              </span>
            </div>
            <hr>
            <div class="flex flex-wrap gap-x-2">
              <span>Pekerjaan :</span>
              <span v-if="isDukcapilValid">
                {{ visitorVerificationData?.jenis_pkrjn }}
              </span>
            </div>
            <hr>
            <div class="flex flex-wrap gap-x-2">
              <span>Alamat :</span>
              <span v-if="isDukcapilValid">
                {{ visitorVerificationData?.alamat }},
                {{ visitorVerificationData?.nama_kel }},
                {{ visitorVerificationData?.nama_kec }},
                {{ visitorVerificationData?.nama_kab }},
                {{ visitorVerificationData?.nama_prop }}
              </span>
            </div>
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
  camera_photo_base64: 'Foto',
}
const COLUMNS = [
  { data: 'person', title: 'NIK', sortable: false, type: 'string', responsivePriority: 0, render: (data) => {
    return data?.no_id ?? ''
  } },
  { data: 'person', title: 'Nama', sortable: false, responsivePriority: 1, render: (data) => {
    return data?.full_name ?? ''
  } },
  { data: 'purpose_of_visit', title: 'Tujuan', sortable: false, type: 'string', responsivePriority: 2, render: (data) => {
    return data?.text ?? ''
  } },
  { data: 'check_in_timestamp', title: 'Waktu Checkin', sortable: false, responsivePriority: 3, render: (data) => {
    return data ? formatDateFromUTC(data) : ''
  } },
  { data: 'check_out_timestamp', title: 'Waktu Checkout', sortable: false, type: 'string', responsivePriority: 4, render: (data) => {
    return data ? formatDateFromUTC(data) : ''
  } },
  { data: null, title: 'KTP', responsivePriority: 5, sortable: false, render: '#id_card' },
  { data: null, title: 'Foto', responsivePriority: 6, sortable: false, render: '#photo' },
  { data: 'visitor_id', title: 'ID', responsivePriority: 7, sortable: false },
  { data: 'person', title: 'Alamat', sortable: false, responsivePriority: 8, render: (data) => {
    return data?.address ?? ''
  } },
]
const cfg = useRuntimeConfig()
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

const formVisitor = ref()
const isOpenForm = ref(false)
const isOpenVerify = ref(false)
const isLoading = ref(false)
const isDukcapilValid = ref(false)
const selectedRow = ref()
const visitorVerificationData = ref()
const modalDelete = useModal()
const modalResubmit = useModal()
const tempBody = ref()

const handleSubmitForm = async (modelForm: unknown) => {
  const isEdit = selectedRow.value
  const method = isEdit ? 'PUT' : 'POST'
  const endpoint = isEdit ? `/person/person/${modelForm.person.id32}/` : '/person/person/'
  tempBody.value = {
    ...modelForm,
    person_type: 'visitor',
    no_id: modelForm.no_id,
    full_name: modelForm.full_name,
    address: modelForm.address,
    gender: modelForm.gender.value,
    purpose_of_visit: modelForm.purpose_of_visit.value === 'others' ? modelForm.purpose_of_visit_others : modelForm.purpose_of_visit.value,
    vehicle: {
      license_plate_number: modelForm.vehicle.license_plate_number,
      vehicle_type: modelForm.vehicle.vehicle_type.id32,
    },
  }
  try {
    isLoading.value = true
    await $api(endpoint, {
      method: method,
      body: tempBody.value,
    })
    isOpenForm.value = false
    selectedRow.value = undefined
    refresh()
    toast.add({ title: 'Berhasil', description: 'Data Berhasil Ditambahkan', icon: 'i-heroicons-check-circle' })
  } catch (err) {
    isLoading.value = false
    if (err?.response?._data?.errors?.camera_photo_base64) {
      modalResubmit.open(AConfirmation, {
        title: err?.response?._data?.errors?.camera_photo_base64[0] ?? 'Terjadi Kesalahan',
        btnOkText: 'Lanjutkan',
        btnCancelText: 'Batalkan',
        onOk() {
          $api(endpoint, {
            method: method,
            body: { ...tempBody.value, allow_fail_eocortex: true },
          }).then(() => {
            refresh()
            toast.add({ title: 'Berhasil', description: 'Data Berhasil Disimpan', icon: 'i-heroicons-check-circle' })
            modalResubmit.close()
            isOpenForm.value = false
          }).catch((err) => {
            useToastError(FIELDS_REQUEST, err?.response?._data)
          })
        },
        onCancel() {
          modalResubmit.close()
        },
      })
      return
    }
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
  if (!src) return
  window.open(src, '_blank')
}
const handleOpenEditForm = (row: Vehicle) => {
  isOpenForm.value = true
  selectedRow.value = row
}
const handleVerify = async (row: Vehicle) => {
  try {
    $loader.start()
    const resp = await $fetch('/api/dukcapil', {
      method: 'POST',
      body: {
        nik: row?.rowData?.person?.no_id,
      },
      timeout: cfg.public.timeoutDukcapil,
    })
    if (resp?.data) {
      visitorVerificationData.value = resp.data
      // eslint-disable-next-line max-len
      isDukcapilValid.value = resp.data.nama_lgkp.toLowerCase() === row.rowData.person?.full_name.toLowerCase() && resp.data.nik === row.rowData.person.no_id
    } else {
      if (resp?.message) {
        toast.add({ description: resp.message, color: 'red' })
      }
      visitorVerificationData.value = undefined
      isDukcapilValid.value = false
    }
    selectedRow.value = row
    isOpenVerify.value = true
  } catch (err) {
    selectedRow.value = row
    visitorVerificationData.value = undefined
    isDukcapilValid.value = false
    isOpenVerify.value = true
    toast.add({ description: err?.response?._data?.data ?? err?.response?.statusMessage ?? 'Data Tidak Ditemukan', color: 'red' })
  } finally {
    $loader.finish()
  }
}
const handleCloseForm = () => {
  isOpenForm.value = false
  formVisitor.value.cameraStop()
}
</script>

<style scoped>

</style>
