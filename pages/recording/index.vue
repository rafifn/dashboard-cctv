<!-- eslint-disable max-len -->
<template>
  <div class="space-y-4">
    <span class="text-xs">Pilih Kamera:</span>
    <USelectMenu
      v-model="selectedCamera"
      :options="cameraOptions"
      :ui="{
        wrapper: 'relative',
        base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0',
        form: 'form-select',
        rounded: 'rounded-md',
        placeholder: 'text-gray-400',
        file: {
          base: 'file:mr-1.5 file:font-medium file:text-gray-500 file:bg-transparent file:border-0 file:p-0 file:outline-none',
        },
        size: {
          '2xs': 'text-xs',
          'xs': 'text-xs',
          'sm': 'text-sm',
          'md': 'text-sm',
          'lg': 'text-sm',
          'xl': 'text-base',
        },
        gap: {
          '2xs': 'gap-x-1',
          'xs': 'gap-x-1.5',
          'sm': 'gap-x-1.5',
          'md': 'gap-x-2',
          'lg': 'gap-x-2.5',
          'xl': 'gap-x-2.5',
        },
        padding: {
          '2xs': 'px-2 py-1',
          'xs': 'px-2.5 py-1.5',
          'sm': 'px-2.5 py-1.5',
          'md': 'px-3 py-2',
          'lg': 'px-3.5 py-2.5',
          'xl': 'px-3.5 py-2.5',
        },
        leading: {
          padding: {
            '2xs': 'ps-7',
            'xs': 'ps-8',
            'sm': 'ps-9',
            'md': 'ps-10',
            'lg': 'ps-11',
            'xl': 'ps-12',
          },
        },
        trailing: {
          padding: {
            '2xs': 'pe-7',
            'xs': 'pe-8',
            'sm': 'pe-9',
            'md': 'pe-10',
            'lg': 'pe-11',
            'xl': 'pe-12',
          },
        },
        color: {
          white: {
            outline: 'shadow-sm bg-white text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary-500 ',
          },
          gray: {
            outline: 'shadow-sm bg-gray-50 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary-500',
          },
        },
        variant: {
          outline: 'shadow-sm bg-transparent text-gray-900 ring-1 ring-inset ring-{color}-500 focus:ring-2 focus:ring-{color}-500',
          none: 'bg-transparent focus:ring-0 focus:shadow-none',
        },
        icon: {
          base: 'flex-shrink-0 text-gray-400',
          color: 'text-{color}-500',
          loading: 'animate-spin',
          size: {
            '2xs': 'h-4 w-4',
            'xs': 'h-4 w-4',
            'sm': 'h-5 w-5',
            'md': 'h-5 w-5',
            'lg': 'h-5 w-5',
            'xl': 'h-6 w-6',
          },
          leading: {
            wrapper: 'absolute inset-y-0 start-0 flex items-center',
            pointer: 'pointer-events-none',
            padding: {
              '2xs': 'px-2',
              'xs': 'px-2.5',
              'sm': 'px-2.5',
              'md': 'px-3',
              'lg': 'px-3.5',
              'xl': 'px-3.5',
            },
          },
          trailing: {
            wrapper: 'absolute inset-y-0 end-0 flex items-center',
            pointer: 'pointer-events-none',
            padding: {
              '2xs': 'px-2',
              'xs': 'px-2.5',
              'sm': 'px-2.5',
              'md': 'px-3',
              'lg': 'px-3.5',
              'xl': 'px-3.5',
            },
          },
        },
        default: {
          size: 'sm',
          color: 'white',
          variant: 'outline',
          loadingIcon: 'i-heroicons-arrow-path-20-solid',
          trailingIcon: 'i-heroicons-chevron-down-20-solid',
        },
      }"
      :ui-menu="{
        container: 'z-20 group',
        trigger: 'flex items-center w-full',
        width: 'w-full',
        height: 'max-h-60',
        base: 'relative focus:outline-none overflow-y-auto scroll-py-1',
        background: 'bg-white',
        shadow: 'shadow-lg',
        rounded: 'rounded-md',
        padding: 'p-1',
        ring: 'ring-1 ring-gray-200',
        empty: 'text-sm text-gray-400 px-2 py-1.5',
        option: {
          base: 'cursor-default select-none relative flex items-center justify-between gap-1',
          rounded: 'rounded-md',
          padding: 'px-1.5 py-1.5',
          size: 'text-sm',
          color: 'text-gray-900',
          container: 'flex items-center gap-1.5 min-w-0',
          active: 'bg-gray-100',
          inactive: '',
          selected: 'pe-7',
          disabled: 'cursor-not-allowed opacity-50',
          empty: 'text-sm text-gray-400 px-2 py-1.5',
          icon: {
            base: 'flex-shrink-0 h-5 w-5',
            active: 'text-gray-900',
            inactive: 'text-gray-400',
          },
          selectedIcon: {
            wrapper: 'absolute inset-y-0 end-0 flex items-center',
            padding: 'pe-2',
            base: 'h-5 w-5 text-gray-900 flex-shrink-0',
          },
          avatar: {
            base: 'flex-shrink-0',
            size: '2xs',
          },
          chip: {
            base: 'flex-shrink-0 w-2 h-2 mx-1 rounded-full',
          },
          create: 'block truncate',
        },
        transition: {
          leaveActiveClass: 'transition ease-in duration-100',
          leaveFromClass: 'opacity-100',
          leaveToClass: 'opacity-0',
        },
        popper: {
          placement: 'bottom-end',
        },
        default: {
          selectedIcon: 'i-heroicons-check-20-solid',
          clearSearchOnClose: false,
          showCreateOptionWhen: 'empty',
        },
        arrow: {
          base: 'invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2',
          ring: 'before:ring-1 before:ring-gray-200',
          rounded: 'before:rounded-sm',
          background: 'before:bg-white',
          shadow: 'before:shadow',
        },
        select: 'inline-flex items-center text-left cursor-default',
        input: 'block w-[calc(100%+0.5rem)] focus:ring-transparent text-sm px-3 py-1.5 text-gray-700 bg-white border-0 border-b border-gray-200 sticky -top-1 -mt-1 mb-1 -mx-1 z-10 placeholder-gray-400 focus:outline-none',
        required: 'absolute inset-0 w-px opacity-0 cursor-default',
        label: 'block truncate',
      }"
      @update:model-value="handleFetchTable"
    />
    <video
      v-if="selectedItem"
      :id="selectedItem.id"
      controls
      autoplay
      :width="800"
      :height="600"
      name="media"
    >
      <source
        :src="selectedItem.src"
        type="video/mp4"
      >
    </video>
    <ADatatable
      :params="currentQuery"
      :columns="COLUMNS"
      :rows="items ?? []"
      total-data="0"
      :downloadable="false"
      :searchable="false"
      has-actions
    >
      <template #start="prop">
        {{ prop.rowData.start ? formatDateFromUTC(prop.rowData.start) : '' }}
      </template>
      <template #duration="prop">
        {{ prop.rowData.duration ? getDurationsHours(prop.rowData.duration) : '' }}
      </template>
      <template #actions="prop">
        <div class="space-x-2">
          <button
            class="btn btn-outline-info mr-1"
            @click="handleFetchDataPlayer(prop.rowData)"
          >
            <i class="fa-solid fa-circle-play" />
          </button>
          <button
            class="btn btn-outline-success mr-1"
            @click="handleDownload(prop.rowData)"
          >
            <i class="fa-solid fa-circle-down" />
          </button>
        </div>
      </template>
    </ADatatable>
  </div>
</template>

<script setup lang="ts">
import moment from 'moment'
import { formatDateFromUTC } from '~/utils/helpers'

const PAGE_SIZE_CAMERA = 1000
const cfg = useRuntimeConfig()
const { $api, $loader } = useNuxtApp()

const { data: cameras } = await useAsyncData('cm', () => $api('/cctv/camera', {
  query: {
    is_active: true,
    page_size: PAGE_SIZE_CAMERA,
  },
}))

const selectedCamera = ref()
const items = ref([])
const selectedItem = ref()
const cameraOptions = computed(() => cameras.value?.results.map(cm => ({ value: cm.channel_id, label: cm.name })))

const COLUMNS = [
  { data: null, title: 'Tanggal', sortable: false, render: '#start' },
  { data: null, title: 'Durasi', sortable: false, render: '#duration' },
]
const getDurationsHours = (sec) => {
  if (!sec) return ''
  const duration = (moment.duration(sec, 'seconds').asHours()).toFixed(2)
  return `${duration} Jam`
}
const handleFetchTable = async () => {
  try {
    $loader.start()
    const resp = await $fetch(`${cfg.public.recordingBaseUrl}/list`, {
      query: {
        path: selectedCamera.value?.value,
      },
    })
    items.value = resp
  } catch (err) {
    alert(err)
  } finally {
    $loader.finish()
  }
}
const handleFetchDataPlayer = (item) => {
  selectedItem.value = {
    id: selectedCamera.value.value,
    src: `${cfg.public.recordingBaseUrl}/get?path=${selectedCamera.value.value}&start=${item.start}&duration=${item.duration}&format=fmp4`,
  }
}
const handleDownload = (item) => {
  navigateTo(`/recording/${selectedCamera.value.value}?start=${item.start}&duration=${item.duration}`, { open: { target: '_blank' } })
}

const { currentQuery } = useTable()
</script>

<style scoped>

</style>
