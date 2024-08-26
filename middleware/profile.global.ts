/* eslint-disable @stylistic/arrow-parens */
import consola from 'consola'
import type { Profile } from '~/utils/types'

export default defineNuxtRouteMiddleware(async (to) => {
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
    if (to.name !== 'login' && myProfileState.value) {
      const envPermissions = JSON.parse(JSON.stringify(cfg.public.permissions))
      const currentPermissions = envPermissions.find((pm) => pm.role === myProfileState.value.role.name)
      if (!currentPermissions || !currentPermissions.permissions.length) return navigateTo('/login')
      return currentPermissions.permissions[0] === 'all' || currentPermissions.permissions.includes(to.name)
        ? true
        : createError({ statusCode: 404, statusMessage: 'Page Not Found' })
    }
  } catch (err) {
    consola.error(err)
  }
})
