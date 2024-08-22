export default defineNuxtPlugin((/* nuxtApp */) => {
  const loader = useLoader()
  return {
    provide: {
      loader: {
        isShow: loader.value.isShow,
        start: (message = '') => (loader.value = { isShow: true, message }),
        finish: () => (loader.value = { isShow: false, message: '' }),
      },
    },
  }
})
