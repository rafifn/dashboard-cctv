<template>
  <div>
    <UForm
      class="space-y-4"
      :schema="schema"
      :state="modelForm"
      @submit="handleSubmit"
    >
      <UFormGroup
        label="Nopol"
        name="license"
        required
      >
        <UInput v-model="modelForm.license" />
      </UFormGroup>
      <UFormGroup
        label="Jenis Kendaraan"
        name="vehicle.name"
        required
      >
        <USelectMenu
          v-model="modelForm.vehicle"
          :options="vehicleType"
          option-attribute="name"
        />
      </UFormGroup>
      <UFormGroup
        label="Pemilik"
        name="owner.full_name"
        required
      >
        <USelectMenu
          v-model="modelForm.owner"
          :options="resident"
          option-attribute="full_name"
        />
      </UFormGroup>

      <UButton type="submit">
        Submit
      </UButton>
    </UForm>
  </div>
</template>

<script setup lang="ts">
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'
import type { Vehicle, VehicleType, Resident } from '~/utils/types'

const schema = object({
  license: string().required('Nopol Wajib Diisi'),
  vehicle: object().shape({ name: string().required('Jenis Kendaraan Wajib Diisi') }),
  owner: object().shape({ full_name: string().required('Pemilik Wajib Diisi') }),
})

type Schema = InferType<typeof schema>

interface Props {
  detail?: Vehicle
}
const props = defineProps<Props>()
const emit = defineEmits(['submit'])
const { $api } = useNuxtApp()
const toast = useToast()

const vehicleType = ref<VehicleType[]>([])
const resident = ref<Resident[]>([])
const modelForm = reactive({
  license: props.detail?.license_plate_number ?? '',
  vehicle: props.detail?.vehicle_type ?? {
    id32: '',
    name: '',
  },
  owner: props.detail?.owner ?? {
    full_name: '',
    no_id: '',
    id32: '',
  },
})

const getVehicles = async (search?: string) => {
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
const getResident = async (search?: string) => {
  try {
    const { results } = await $api<{ results: Resident[] }>('/resident/resident', {
      query: {
        search,
      },
    })
    resident.value = results
  } catch (err) {
    toast.add({ description: JSON.stringify(err?.response?._data), color: 'red' })
  }
}
const handleSubmit = (event: FormSubmitEvent<Schema>) => {
  emit('submit', event.data)
}

onMounted(() => {
  getVehicles()
  getResident()
})
</script>

<style scoped>

</style>
