import consola from 'consola'
import type { Profile } from '~/utils/types'

export default defineNuxtRouteMiddleware(async () => {
  const authToken = useCookie('_auth_token')
  const myProfileState = useState<Profile>('myProfileState')
  const cfg = useRuntimeConfig()

  if (!authToken.value || myProfileState.value) return
  try {
    const res = await $fetch(`/auth/me`, {
      baseURL: cfg.public.apiBaseUrl,
      headers: {
        Authorization: `Token ${authToken.value}`,
      },
    })
    myProfileState.value = res
  } catch (err) {
    consola.error(err)
  }
})
