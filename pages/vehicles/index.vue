<template>
  <div>
    <div class="header">
      <div class="header__item">
        <h1 class="page-header">
          Vehicle Management
        </h1>
      </div>
    </div>
    <ADatatable
      :params="currentQuery"
      :columns="COLUMNS"
      :rows="vehicles?.results ?? []"
      :total-data="vehicles?.count?.toString() ?? '0'"
      @update:search="handleSearch"
      @update:page="handleUpdatePage"
      @update:size="handleUpdateSize"
    />
  </div>
</template>

<script setup lang="ts">
const COLUMNS = [
  { data: 'license_plate_number', title: 'Nopol', sortable: false },
  { data: 'vehicle_type', title: 'Jenis Kendaraan', sortable: false, render: (data, type) => {
    if (type === 'display') {
      return data.name
    }
    return data
  } },
  { data: 'owner', title: 'Pemilik', sortable: false, type: 'string', render: (data, type) => {
    if (type === 'display') {
      return `${data?.full_name} - ${data?.no_id}`
    }
    return data
  } },
]
const { $api } = useNuxtApp()
const route = useRoute()
const { currentQuery, handleUpdatePage, handleSearch, handleUpdateSize } = useTable()

const { data: vehicles } = await useAsyncData('vehicles', () => $api('/vehicle/vehicle', {
  query: {
    ...route.query,
  },
}),
{
  watch: [currentQuery],
  immediate: true,
})
</script>

<style scoped>

</style>
