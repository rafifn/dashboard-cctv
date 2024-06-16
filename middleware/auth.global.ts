export default defineNuxtRouteMiddleware((to) => {
  const authToken = useCookie('_auth_token')
  if (to.name !== 'login' && !authToken.value) {
    return navigateTo('/login')
  } else if (to.name === 'login' && authToken.value) {
    return navigateTo('/')
  }
})
