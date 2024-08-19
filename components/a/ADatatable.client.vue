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
          <div
            v-if="searchable"
            class="dt-search d-flex align-items-center gap-2"
          >
            <label for="dt-search-0">Search:</label>
            <input
              id="dt-search-0"
              v-model="keyword"
              type="search"
              class="form-control form-control-sm"
              placeholder=""
              aria-controls="datatableDefault"
              @update:model-value="$emit('update:search', $event)"
            >
          </div>
        </div>
        <DataTable
          id="datatableDefault"
          ref="table"
          class="table text-nowrap w-100"
          :columns="columnsTable"
          :data="rows"
          :options="{
            dom: `<'d-flex justify-content-end'fB>`,
            responsive: {
              orthogonal: 'responsive',
              details: {
                renderer: DataTablesCore.Responsive.renderer.listHiddenNodes(),
              },
            },
            paging: true,
            searching: false,
            buttons: downloadable ? [
              { extend: 'print', className: 'btn btn-outline-default btn-sm ms-2' },
              { extend: 'csv', className: 'btn btn-outline-default btn-sm' },
            ] : [],
          }"
        >
          <template
            v-for="(_, slot) of $slots"
            #[slot]="prop"
          >
            <slot
              v-if="slot !== 'actions'"
              :name="slot"
              v-bind="prop"
            />
          </template>
          <template #action="prop">
            <slot
              name="actions"
              v-bind="prop"
            />
            <button
              v-if="isEditable"
              class="btn btn-outline-info mr-1"
              @click="handleEdit(prop)"
            >
              <i class="fa-solid fa-pen-to-square" />
            </button>
            <button
              v-if="isDeleteable"
              class="btn btn-outline-danger"
              @click="handleDelete(prop)"
            >
              <i class="fa-solid fa-trash" />
            </button>
          </template>
        </DataTable>
        <APagination
          :model-value="params.page"
          :size="params.page_size"
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
  name?: string
}
interface Props {
  columns: Column[]
  rows: unknown[]
  isDeleteable?: boolean
  isEditable?: boolean
  hasActions?: boolean
  totalData: string
  downloadable?: boolean
  searchable?: boolean
  params: {
    search?: string
    page: string
    page_size?: string
  }
}

const props = withDefaults(defineProps<Props>(), {
  downloadable: true,
  searchable: true,
})
const emit = defineEmits(['update:page', 'update:size', 'update:search', 'delete', 'edit'])

DataTable.use(DataTablesCore)

const table = ref()
const selectedSize = ref(props.params.size ?? '10')
const keyword = ref(props.params.search)
const columnsTable = computed(() => [
  ...props.columns,
  ...(props.isDeleteable || props.isEditable || props.hasActions
    ? [{ data: null, title: '', sortable: false, render: '#action', orthogonal: null }]
    : []),
])

const handleDelete = (row: unknown) => {
  emit('delete', row.rowData)
}
const handleEdit = (row: unknown) => {
  emit('edit', row.rowData)
}
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
