<template>
  <div>
    <div class="flex gap-4">
      <UForm
        class="space-y-4 flex-1"
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
          label="Tujuan Visit"
          name="purpose_of_visit.value"
          required
        >
          <USelectMenu
            v-model="modelForm.purpose_of_visit"
            :options="purposeVisits"
            option-attribute="text"
          />
        </UFormGroup>
        <UFormGroup
          v-if="modelForm.purpose_of_visit?.value === 'others'"
          name="purpose_of_visit_others"
          required
        >
          <UInput
            v-model="modelForm.purpose_of_visit_others"
            placeholder="Masukkan Tujuan Visit Lainnya"
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
      <div class="flex flex-col items-center">
        <canvas
          v-show="isCaptured"
          id="imageCaptured"
          ref="imageCaptured"
          :width="400"
          :height="300"
        />
        <video
          v-show="!isCaptured"
          ref="camera"
          :width="400"
          :height="300"
          autoplay
        />
        <UButton
          v-if="isCaptured"
          variant="solid"
          class="my-2 text-white"
          color="orange"
          @click="isCaptured = false"
        >
          Retry
        </UButton>
        <UButton
          v-else
          variant="solid"
          class="my-2 text-white"
          color="white"
          @click="cameraCapture"
        >
          Capture
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDevicesList, useUserMedia } from '@vueuse/core'
import { object, string, type InferType } from 'yup'
import { GENDER_OPTIONS, VISITOR_TYPE_OPTIONS } from '~/utils/constants'
import type { FormSubmitEvent } from '#ui/types'
import type { Visitor, VehicleType } from '~/utils/types'

interface Props {
  detail?: Visitor
  isLoading?: boolean
}
const props = defineProps<Props>()
const emit = defineEmits(['submit'])
const { $api } = useNuxtApp()
const toast = useToast()

const currentCamera = ref<string>()
const imageCaptured = ref<string>()
const camera = ref()
const isCaptured = ref(false)
const isLoadingScan = ref(false)
const vehicles = ref([])
const vehicleType = ref<VehicleType[]>([])
const purposeVisits = ref<{ text: string, value: string }[]>([])
const cameraCapturedSrc = ref()
const isAllowFailSubmit = ref(false)
const modelForm = ref({
  no_id: props.detail?.person?.no_id ?? '',
  full_name: props.detail?.person?.full_name ?? '',
  address: props.detail?.person?.address ?? '',
  gender: props.detail?.person?.gender ?? GENDER_OPTIONS[0],
  doc_type: VISITOR_TYPE_OPTIONS[0],
  purpose_of_visit: props.detail?.purpose_of_visit ?? purposeVisits.value[0],
  purpose_of_visit_others: '',
  vehicle: props.detail?.vehicle ?? {
    license_plate_number: '',
    vehicle_type: {
      id32: '',
      name: '',
    },
  },
})

const schema = computed(() => object({
  no_id: string().required('ID Wajib Diisi'),
  full_name: string().required('Nama Wajib Diisi'),
  address: string().required('Alamat Wajib Diisi'),
  gender: object().shape({ value: string().required('Jenis Kelamin Wajib Diisi') }),
  purpose_of_visit: object().shape({ value: string().required('Tujuan Visit Wajib Diisi') }),
  ...(modelForm.value.purpose_of_visit?.value === 'others' ? { purpose_of_visit_others: string().required('Tujuan Visit Wajib Diisi') } : {}),
  vehicle: object().shape({
    license_plate_number: string().required('Kendaraan Wajib Diisi'),
    vehicle_type: object().shape({
      id32: string().required('Kendaraan Wajib Diisi'),
      name: string().required('Kendaraan Wajib Diisi'),
    }),
  }),
}))

type Schema = InferType<typeof schema>

const { videoInputs: cameras } = useDevicesList({
  requestPermissions: true,
  onUpdated() {
    if (!cameras.value.find(i => i.deviceId === currentCamera.value))
      currentCamera.value = cameras.value[0]?.deviceId
  },
})

const { stream, enabled } = useUserMedia({
  constraints: { video: { deviceId: currentCamera }, audio: false },
})

const getScan = async () => {
  try {
    isLoadingScan.value = true
    const data = await $api<Visitor>('/person/person/recent', {
      query: {
        person_type: 'visitor',
      },
    })
    const gender = GENDER_OPTIONS.find(gd => Number(gd.value) === data.gender.value)
    const vt = VISITOR_TYPE_OPTIONS.find(vo => vo.value === data.doc_type.value)
    modelForm.value = {
      no_id: data.no_id,
      full_name: data.full_name,
      address: data.address,
      doc_type: vt,
      gender,
      vehicle: data.vehicles.length
        ? data.vehicles[0]
        : {
            license_plate_number: '',
            vehicle_type: {
              id32: '',
              name: '',
            },
          },
    }
    vehicles.value = data.vehicles
  } catch (err) {
    toast.add({ description: JSON.stringify(err?.response?._data), color: 'red' })
  } finally {
    isLoadingScan.value = false
  }
}
const handleSubmit = (event: FormSubmitEvent<Schema>) => {
  emit('submit', { ...props.detail, ...event.data, camera_photo_base64: cameraCapturedSrc.value, allow_fail_eocortex: isAllowFailSubmit.value })
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
const getVisitPurpose = async (search?: string) => {
  try {
    const { results } = await $api<{ results: { text: string, value: string }[] }>('/common/purpose-of-visit', {
      query: {
        search,
      },
    })
    purposeVisits.value = [...results, { text: 'Lainnya', value: 'others' }]
  } catch (err) {
    toast.add({ description: JSON.stringify(err?.response?._data), color: 'red' })
  }
}
const cameraStop = () => {
  enabled.value = false
}
const cameraCapture = () => {
  const context = imageCaptured.value.getContext('2d')
  context.drawImage(camera.value, 0, 0, 400, 300)
  isCaptured.value = true
  const img = document.getElementById('imageCaptured').toDataURL()
  cameraCapturedSrc.value = img.replace('data:image/png;base64,', '')
}

onMounted(() => {
  enabled.value = true
  getVehiclesType()
  getVisitPurpose()
})

watchEffect(() => {
  if (camera.value)
    camera.value.srcObject = stream.value!
})

defineExpose({ cameraStop })
</script>

<style scoped>

</style>
