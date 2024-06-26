<template>
  <div>
    <OPageHeader
      page-title="Visitor Management"
      add-title="Daftar Pengunjung"
      @add="isOpenForm = true"
    />
    <ADatatable
      :params="currentQuery"
      :columns="COLUMNS"
      :rows="resident?.results ?? []"
      :total-data="resident?.count?.toString() ?? '0'"
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
              Daftar Pengunjung
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
import { AConfirmation } from '#components'
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
  { data: 'gender', title: 'Jenis Kelamin', sortable: false, render: (data, type) => {
    if (type === 'display') {
      const gender = GENDER_OPTIONS.find(gd => Number(gd.value) === data.value)
      return gender.text || data
    }
    return data
  } },
  { data: 'doc_type', title: 'Tipe Pengunjung', sortable: false, render: (data, type) => {
    if (type === 'display') {
      const vt = VISITOR_TYPE_OPTIONS.find(vo => vo.value === data.value)
      return vt.text
    }
    return data
  } },
]
const { $api } = useNuxtApp()
const toast = useToast()
const modalDelete = useModal()
const route = useRoute()
const { currentQuery, handleUpdatePage, handleSearch, handleUpdateSize } = useTable()

const { data: resident, refresh } = await useAsyncData('resident', () => $api('/resident/resident', {
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

const handleSubmitForm = async (modelForm: unknown) => {
  try {
    isLoading.value = true
    await $api('/resident/resident/', {
      method: 'POST',
      body: {
        id32: modelForm?.id32,
        no_id: modelForm.no_id,
        full_name: modelForm.full_name,
        address: modelForm.address,
        gender: modelForm.gender.value,
        doc_type: modelForm.doc_type.value,
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
const handleDelete = (row: unknown) => {
  modalDelete.open(AConfirmation, {
    title: `Apakah Anda yakin ingin menghapus ${row.full_name} ?`,
    onOk() {
      $api(`/resident/resident/${row.id32}`, {
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
