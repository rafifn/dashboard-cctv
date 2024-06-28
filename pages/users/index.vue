<template>
  <div>
    <OPageHeader
      page-title="User & Access"
      add-title="Daftar User"
      @add="handleOpenFormCreate"
    />
    <ADatatable
      :params="currentQuery"
      :columns="COLUMNS"
      :rows="users?.results ?? []"
      :total-data="users?.count?.toString() ?? '0'"
      is-deleteable
      is-editable
      @update:search="handleSearch"
      @update:page="handleUpdatePage"
      @update:size="handleUpdateSize"
      @delete="handleDelete"
      @edit="handleOpenFormEdit"
    />
    <AModal
      :is-open="isOpenForm"
    >
      <UCard :ui="{ header: { padding: 'p-4' }, body: { padding: 'p-4' } }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 mb-0 text-white">
              Daftar User
            </h3>
            <UButton
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="isOpenForm = false"
            />
          </div>
        </template>
        <OFormUser
          :detail="selectedRow"
          @submit="handleSubmitForm"
        />
      </UCard>
    </AModal>
  </div>
</template>

<script setup lang="ts">
import { formatDateFromUTC } from '~/utils/helpers'
import { AConfirmation } from '#components'

const FIELDS_REQUEST = {
  username: 'Nama',
  role: 'Role',
}
const COLUMNS = [
  { data: 'username', title: 'Nama', sortable: false },
  { data: 'date_joined', title: 'Tanggal Terdaftar', sortable: false, type: 'string', render: (data) => {
    return formatDateFromUTC(data)
  } },
  { data: 'last_login', title: 'Terakhir Login', sortable: false, type: 'string', render: (data) => {
    return formatDateFromUTC(data)
  } },
  { data: 'is_active', title: 'Aktif', sortable: false, render: (data) => {
    return data ? 'Ya' : 'Tidak'
  } },
  { data: 'role', title: 'Role', sortable: false, render: (data) => {
    return data.name
  } },
]
const { $api } = useNuxtApp()
const toast = useToast()
const modalDelete = useModal()
const route = useRoute()
const { currentQuery, handleUpdatePage, handleSearch, handleUpdateSize } = useTable()

const { data: users, refresh } = await useAsyncData('users', () => $api('/user/user', {
  query: {
    ...route.query,
  },
}),
{
  watch: [currentQuery],
  immediate: true,
})

const isOpenForm = ref(false)
const selectedRow = ref()

const handleSubmitForm = async (modelForm: unknown) => {
  const method = modelForm.id ? 'PATCH' : 'POST'
  const endpoint = modelForm.id ? `/user/user/${modelForm.id}/` : '/user/user/'
  try {
    await $api(endpoint, {
      method: method,
      body: {
        username: modelForm.username,
        role: modelForm.role.id,
        is_active: modelForm.is_active,
        ...(modelForm.password ? { password: modelForm.password } : {}),
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
    title: `Apakah Anda yakin ingin menghapus ${row.username} ?`,
    onOk() {
      $api(`/user/user/${row.id}`, {
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
const handleOpenFormEdit = (row: unknown) => {
  selectedRow.value = row
  isOpenForm.value = true
}
const handleOpenFormCreate = () => {
  selectedRow.value = undefined
  isOpenForm.value = true
}
</script>

<style scoped>

</style>
