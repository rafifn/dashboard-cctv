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
      <div class="flex space-x-2">
        <UButton
          color="orange"
          type="button"
          role="button"
          @click="getScan"
        >
          Scan
        </UButton>
        <UButton type="submit">
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
import type { Resident } from '~/utils/types'

const schema = object({
  no_id: string().required('ID Wajib Diisi'),
  full_name: string().required('Nama Wajib Diisi'),
  address: string().required('Alamat Wajib Diisi'),
  gender: object().shape({ value: string().required('Jenis Kelamin Wajib Diisi') }),
  doc_type: object().shape({ value: string().required('Tipe Pengunjung Wajib Diisi') }),
})

type Schema = InferType<typeof schema>

interface Props {
  detail?: Vehicle
}
const props = defineProps<Props>()
const emit = defineEmits(['submit'])
const { $api } = useNuxtApp()
const toast = useToast()

const modelForm = ref({
  id32: props.detail?.id32,
  no_id: props.detail?.no_id ?? '',
  full_name: props.detail?.full_name ?? '',
  address: props.detail?.address ?? '',
  gender: props.detail?.gender
    ? {
        text: props.detail.gender.text,
        value: props.detail.gender.value.toString(),
      }
    : GENDER_OPTIONS[0],
  doc_type: props.detail?.doc_type ?? VISITOR_TYPE_OPTIONS[0],
})

const getScan = async () => {
  try {
    const data = await $api<Resident>('/resident/resident/recent')
    const gender = GENDER_OPTIONS.find(gd => Number(gd.value) === data.gender.value)
    const vt = VISITOR_TYPE_OPTIONS.find(vo => vo.value === data.doc_type.value)
    modelForm.value = { ...data, gender, doc_type: vt }
  } catch (err) {
    toast.add({ description: JSON.stringify(err?.response?._data) })
  }
}
const handleSubmit = (event: FormSubmitEvent<Schema>) => {
  emit('submit', event.data)
}
</script>

<style scoped>

</style>
