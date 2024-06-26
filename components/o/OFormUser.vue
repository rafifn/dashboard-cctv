<template>
  <div>
    <UForm
      class="space-y-4"
      :schema="schema"
      :state="modelForm"
      @submit="handleSubmit"
    >
      <UFormGroup
        label="Nama"
        name="username"
        required
      >
        <UInput v-model="modelForm.username" />
      </UFormGroup>
      <UFormGroup
        label="Role"
        name="role.name"
        required
      >
        <USelectMenu
          v-model="modelForm.role"
          :options="roles"
          option-attribute="name"
        />
      </UFormGroup>
      <UFormGroup
        name="is_active"
        label="Aktif"
      >
        <UToggle v-model="modelForm.is_active" />
      </UFormGroup>
      <UFormGroup
        name="password"
        label="Password"
        required
      >
        <UInput v-model="modelForm.password" />
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
import type { Role, User } from '~/utils/types'

const schema = object({
  username: string().required('Name Wajib Diisi'),
  password: string().required('Password Wajib Diisi'),
  role: object().shape({ name: string().required('Role Wajib Diisi') }),
})

type Schema = InferType<typeof schema>

interface Props {
  detail?: User
}
const props = defineProps<Props>()
const emit = defineEmits(['submit'])
const { $api } = useNuxtApp()
const toast = useToast()

const roles = ref<Role[]>([])
const modelForm = reactive({
  username: props.detail?.username ?? '',
  is_active: props.detail?.is_active ?? false,
  password: props.detail?.password ?? '',
  role: props.detail?.vehicle_type ?? {
    id: '',
    name: '',
  },
})

const getRole = async (search?: string) => {
  try {
    const { results } = await $api<{ results: Role[] }>('/user/role', {
      query: {
        search,
      },
    })
    roles.value = results
  } catch (err) {
    toast.add({ description: JSON.stringify(err?.response?._data), color: 'red' })
  }
}
const handleSubmit = (event: FormSubmitEvent<Schema>) => {
  emit('submit', event.data)
}

onMounted(() => {
  getRole()
})
</script>

<style scoped>

</style>
