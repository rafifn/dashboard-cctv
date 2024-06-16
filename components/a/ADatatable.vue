<!-- eslint-disable max-len -->
<template>
  <div id="datatable">
    <div class="card">
      <div class="card-body">
        <div class="headers">
          <div class="dt-length d-flex align-items-center gap-2">
            <select
              id="dt-length-0"
              v-model="selectedSize"
              name="datatableDefault_length"
              aria-controls="datatableDefault"
              class="form-select form-select-sm"
              style="width: max-content;"
              @update:model-value="$emit('update:size', $event)"
            >
              <option
                v-for="sizeOpt in SIZE_OPTIONS"
                :key="sizeOpt"
                :value="sizeOpt"
              >
                {{ sizeOpt }}
              </option>
            </select>
            <label for="dt-length-0"> entries per page</label>
          </div>
          <div class="dt-search d-flex align-items-center gap-2">
            <label for="dt-search-0">Search:</label>
            <input
              id="dt-search-0"
              type="search"
              class="form-control form-control-sm"
              placeholder=""
              aria-controls="datatableDefault"
            >
          </div>
        </div>
        <DataTable
          id="datatableDefault"
          ref="table"
          class="table text-nowrap w-100"
          :columns="columns"
          :data="rows"
          :options="{
            dom: `<'d-flex justify-content-end'fB>`,
            responsive: true,
            paging: true,
            searching: false,
            buttons: [
              { extend: 'print', className: 'btn btn-outline-default btn-sm ms-2' },
              { extend: 'csv', className: 'btn btn-outline-default btn-sm' },
            ],
          }"
        />
        <APagination
          :model-value="page"
          :size="size"
          :total-data="totalData"
          @update:model-value="$emit('update:page', $event)"
        />
      </div>
      <div class="card-arrow">
        <div class="card-arrow-top-left" />
        <div class="card-arrow-top-right" />
        <div class="card-arrow-bottom-left" />
        <div class="card-arrow-bottom-right" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DataTable from 'datatables.net-vue3'
import DataTablesCore from 'datatables.net-bs5'

import 'datatables.net-buttons-dt'
import 'datatables.net-buttons/js/buttons.html5'
import 'datatables.net-responsive-dt'
import 'datatables.net-buttons/js/buttons.print'
import 'datatables.net-buttons/js/buttons.colVis'

const SIZE_OPTIONS = ['10', '25', '50', '100']

interface Column {
  data: string
  title: string
  render?: string
}
interface Props {
  columns: Column[]
  rows: unknown[]
  page: string
  size?: string
  totalData: string
}

const props = withDefaults(defineProps<Props>(), {
  size: '10',
})

defineEmits(['update:page', 'update:size'])

DataTable.use(DataTablesCore)

const table = ref()
const selectedSize = ref(props.size)
</script>

<style>
@import 'datatables.net-buttons-dt';
@import 'datatables.net-responsive-dt';
@import 'datatables.net-bs5';

.table.table.dataTable {
  margin-bottom: 1rem;
}
</style>

<style lang="scss" scoped>
.headers {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}
</style>
