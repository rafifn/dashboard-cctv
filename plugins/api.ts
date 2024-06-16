export default defineNuxtPlugin(() => {
  const authToken = useCookie('_auth_token')
  const refreshToken = useCookie('_refresh_token')
  const cfg = useRuntimeConfig()

  const api = $fetch.create({
    baseURL: cfg.public.apiBaseUrl,
    retry: 3,
    onRequest({ _request, options, _error }) {
      if (authToken.value) {
        const headers = (options.headers ||= {})
        if (Array.isArray(headers)) {
          headers.push(['Authorization', `Token ${authToken.value}`])
        } else if (headers instanceof Headers) {
          headers.set('Authorization', `Token ${authToken.value}`)
        } else {
          headers.Authorization = `Token ${authToken.value}`
        }
      }
    },
    onResponseError({ response }) {
      if (response.status === 401) {
        $fetch('/auth/refresh/', {
          baseURL: cfg.public.apiBaseUrl,
          method: 'POST',
          body: {
            refresh_token: refreshToken.value,
          },
        })
          .then((data) => {
            authToken.value = data.token
            refreshToken.value = data.refresh_token
          })
          .catch(() => {
            return navigateTo('/login')
          })
      }
    },
  })

  // Expose to useNuxtApp().$api
  return {
    provide: {
      api,
    },
  }
})
