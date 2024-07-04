<template>
  <div class="login">
    <!-- BEGIN login-content -->
    <div class="login-content">
      <Form
        ref="formInstance"
        class="space-y-4"
        :validation-schema="schema"
        @submit="handleSubmit"
      >
        <div class="d-flex justify-content-center mb-3 max-w-[15rem] mx-auto">
          <img
            src="~/assets/images/logo.png"
            alt="logo"
          >
        </div>
        <h1 class="text-center mb-3">
          Login
        </h1>
        <div class="mb-3">
          <label class="form-label">Username<span class="text-danger">*</span></label>
          <AInput
            id="username"
            v-model="modelform.username"
            name="username"
            type="text"
            placeholder="username"
          />
        </div>
        <div class="mb-3">
          <div class="d-flex">
            <label class="form-label">Password <span class="text-danger">*</span></label>
          </div>
          <AInput
            id="password"
            v-model="modelform.password"
            name="password"
            type="password"
            placeholder="password"
          />
        </div>
        <div class="mb-3 d-flex justify-content-between">
          <div class="form-check">
            <input
              id="isRemember"
              v-model="isRemember"
              class="form-check-input"
              type="checkbox"
            >
            <label
              class="form-check-label"
              for="isRemember"
            >
              Remember me
            </label>
          </div>
          <span
            class="ms-auto text-inverse text-decoration-none text-opacity-50 cursor-pointer"
          >Forgot password?</span>
        </div>
        <button
          type="submit"
          class="btn btn-theme btn-lg d-block w-100 fw-500 mb-3 rounded-5"
          :disabled="isLoading"
        >
          Login
        </button>
      </Form>
    </div>
    <!-- END login-content -->
  </div>
</template>

<script setup>
import { object, string } from 'yup'

definePageMeta({
  layout: false,
})

const router = useRouter()
const { $api } = useNuxtApp()
const authToken = useCookie('_auth_token')
const refreshToken = useCookie('_refresh_token')

const modelform = ref({
  username: '',
  password: '',
})
const isRemember = ref(false)
const isLoading = ref(false)

const schema = object().shape({
  username: string().required('Username wajib diisi'),
  password: string().required('Password wajib diisi'),
})

const handleSubmit = async () => {
  try {
    isLoading.value = true
    const { token, refresh_token } = await $api('/auth/sign-in/', {
      method: 'POST',
      body: {
        email: modelform.value.username,
        password: modelform.value.password,
      },
    })
    authToken.value = token
    refreshToken.value = refresh_token
    router.push('/')
  } catch (error) {
    isLoading.value = false
    const objKey = Object.keys(error?.response?._data)[0]
    alert(objKey ? error.response._data[objKey] : 'Terjadi Kesalahan')
  }
}
</script>

<style lang="scss" scoped>

</style>
