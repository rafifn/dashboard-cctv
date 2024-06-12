export default defineNuxtRouteMiddleware((to) => {
  const authToken = useCookie('_auth_token')
  if (to.name !== 'index' && !authToken.value) {
    return navigateTo('/')
  } else if (to.name === 'index' && authToken.value) {
    return navigateTo('/home')
  }
})
