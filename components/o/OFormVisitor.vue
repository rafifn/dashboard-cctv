<template>
  <div>
    <UForm
      class="space-y-4"
      :schema="schema"
      :state="modelForm"
      @submit="handleSubmit"
    >
      <UFormGroup
        label="ID"
        name="no_id"
        required
      >
        <UInput v-model="modelForm.no_id" />
      </UFormGroup>
      <UFormGroup
        label="Nama"
        name="full_name"
        required
      >
        <UInput v-model="modelForm.full_name" />
      </UFormGroup>
      <UFormGroup
        label="Jenis Kelamin"
        name="gender.value"
        required
      >
        <USelectMenu
          v-model="modelForm.gender"
          :options="GENDER_OPTIONS"
          option-attribute="text"
        />
      </UFormGroup>
      <UFormGroup
        label="Alamat"
        name="address"
        required
      >
        <UTextarea v-model="modelForm.address" />
      </UFormGroup>
      <UFormGroup
        label="Tipe Pengunjung"
        name="doc_type.value"
        required
      >
        <USelectMenu
          v-model="modelForm.doc_type"
          :options="VISITOR_TYPE_OPTIONS"
          option-attribute="text"
        />
      </UFormGroup>
      <UFormGroup
        v-if="vehicles.length"
        label="Kendaraan"
        name="vehicle.license_plate_number"
        required
      >
        <USelectMenu
          v-model="modelForm.vehicle"
          :options="vehicles"
          option-attribute="license_plate_number"
        />
      </UFormGroup>
      <div
        v-else
        class="space-y-4"
      >
        <UFormGroup
          label="Nopol"
          name="vehicle.license_plate_number"
          required
        >
          <UInput v-model="modelForm.vehicle.license_plate_number" />
        </UFormGroup>
        <UFormGroup
          label="Jenis Kendaraan"
          name="vehicle.vehicle_type.name"
          required
        >
          <USelectMenu
            v-model="modelForm.vehicle.vehicle_type"
            :options="vehicleType"
            option-attribute="name"
          />
        </UFormGroup>
      </div>
      <UFormGroup
        label="Activity"
        name="activity"
        required
      >
        <URadioGroup
          v-model="modelForm.activity"
          :options="ACTIVITIES"
          :ui-radio="{
            label: 'text-sm font-medium text-white',
          }"
          :ui="{
            fieldset: 'flex space-x-3',
          }"
        />
      </UFormGroup>
      <div class="flex space-x-2">
        <UButton
          color="orange"
          type="button"
          role="button"
          :loading="isLoadingScan"
          @click="getScan"
        >
          Scan
        </UButton>
        <UButton
          type="submit"
          :loading-="isLoading"
        >
          Submit
        </UButton>
      </div>
    </UForm>
  </div>
</template>

<script setup lang="ts">
import { object, string, type InferType } from 'yup'
import { GENDER_OPTIONS, VISITOR_TYPE_OPTIONS } from '~/utils/constants'
import type { FormSubmitEvent } from '#ui/types'
import type { Visitor, VehicleType } from '~/utils/types'

const ACTIVITIES = [
  {
    value: 'check_in',
    label: 'Checkin',
  },
  {
    value: 'check_out',
    label: 'Checkout',
  },
]

const schema = object({
  no_id: string().required('ID Wajib Diisi'),
  full_name: string().required('Nama Wajib Diisi'),
  address: string().required('Alamat Wajib Diisi'),
  gender: object().shape({ value: string().required('Jenis Kelamin Wajib Diisi') }),
  doc_type: object().shape({ value: string().required('Tipe Pengunjung Wajib Diisi') }),
  activity: string().required('Activity Wajib Diisi'),
  vehicle: object().shape({
    license_plate_number: string().required('Kendaraan Wajib Diisi'),
    vehicle_type: object().shape({
      id32: string().required('Kendaraan Wajib Diisi'),
      name: string().required('Kendaraan Wajib Diisi'),
    }),
  }),
})

type Schema = InferType<typeof schema>

interface Props {
  isLoading?: boolean
}
defineProps<Props>()
const emit = defineEmits(['submit'])
const { $api } = useNuxtApp()
const toast = useToast()

const isLoadingScan = ref(false)
const vehicles = ref([])
const vehicleType = ref<VehicleType[]>([])
const modelForm = ref({
  no_id: '',
  full_name: '',
  address: '',
  gender: GENDER_OPTIONS[0],
  doc_type: VISITOR_TYPE_OPTIONS[0],
  activity: ACTIVITIES[0],
  vehicle: {
    license_plate_number: '',
    vehicle_type: {
      id32: '',
      name: '',
    },
  },
})

const getScan = async () => {
  try {
    isLoadingScan.value = true
    const data = await $api<Visitor>('/resident/resident/recent')
    const gender = GENDER_OPTIONS.find(gd => Number(gd.value) === data.gender.value)
    const vt = VISITOR_TYPE_OPTIONS.find(vo => vo.value === data.doc_type.value)
    modelForm.value = {
      no_id: data.no_id,
      full_name: data.full_name,
      address: data.address,
      doc_type: vt,
      gender,
      vehicle: data.vehicles[0],
    }
    vehicles.value = data.vehicles
  } catch (err) {
    toast.add({ description: JSON.stringify(err?.response?._data), color: 'red' })
  } finally {
    isLoadingScan.value = false
  }
}
const handleSubmit = (event: FormSubmitEvent<Schema>) => {
  emit('submit', event.data)
}
const getVehiclesType = async (search?: string) => {
  try {
    const { results } = await $api<{ results: VehicleType[] }>('/vehicle/vehicle-type', {
      query: {
        search,
      },
    })
    vehicleType.value = results
  } catch (err) {
    toast.add({ description: JSON.stringify(err?.response?._data), color: 'red' })
  }
}

onMounted(() => {
  getVehiclesType()
})
</script>

<style scoped>

</style>
