export default defineNuxtPlugin(() => {
  const authToken = useCookie('_auth_token')
  const cfg = useRuntimeConfig()

  const api = $fetch.create({
    baseURL: cfg.public.apiBaseUrl,
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
    async onResponseError({ response }) {
      if (response.status === 401) {
        await navigateTo('/login')
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
