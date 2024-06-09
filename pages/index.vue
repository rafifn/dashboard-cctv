<template>
  <div class="login">
    <!-- BEGIN login-content -->
    <div class="login-content">
      <form @submit.prevent="handleSubmit">
        <div class="d-flex justify-content-center mb-3">
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
          <input
            type="text"
            class="form-control form-control--underline"
            value=""
            placeholder="username"
          >
        </div>
        <div class="mb-3">
          <div class="d-flex">
            <label class="form-label">Password <span class="text-danger">*</span></label>
          </div>
          <input
            type="password"
            class="form-control form-control--underline"
            value=""
            placeholder="password"
          >
        </div>
        <div class="mb-3 d-flex justify-content-between">
          <div class="form-check">
            <input
              id="customCheck1"
              class="form-check-input"
              type="checkbox"
              value=""
            >
            <label
              class="form-check-label"
              for="customCheck1"
            >Remember me</label>
          </div>
          <span
            class="ms-auto text-inverse text-decoration-none text-opacity-50 cursor-pointer"
          >Forgot password?</span>
        </div>
        <button
          type="submit"
          class="btn btn-theme btn-lg d-block w-100 fw-500 mb-3 rounded-5"
        >
          Login
        </button>
      </form>
    </div>
    <!-- END login-content -->
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
})

const router = useRouter()

const handleSubmit = () => {
  router.push('/home')
}

useHead({
  script: () => {
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return
      n = f.fbq = function () {
        n.callMethod
          // eslint-disable-next-line prefer-rest-params, prefer-spread
          ? n.callMethod.apply(n, arguments)
          // eslint-disable-next-line prefer-rest-params
          : n.queue.push(arguments)
      }
      // eslint-disable-next-line @stylistic/max-statements-per-line
      if (!f._fbq)f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'
      // eslint-disable-next-line @stylistic/max-statements-per-line
      n.queue = []; t = b.createElement(e); t.async = !0
      // eslint-disable-next-line @stylistic/max-statements-per-line
      t.src = v; s = b.getElementsByTagName(e)[0]
      s.parentNode.insertBefore(t, s)
    }(window, document, 'script',
      'https://connect.facebook.net/en_US/fbevents.js'))
    fbq('init', '2197734383896259')
    fbq('track', 'PageView')
  },
})
</script>

<style lang="scss" scoped>

</style>
