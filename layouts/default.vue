<!-- eslint-disable max-len -->
<template>
  <main
    id="app"
    :class="['app', isExpandSidebar ? isMobile ? 'app-sidebar-mobile-toggled' : 'app-sidebar-toggled' : 'app-sidebar-collapsed']"
  >
    <div
      id="header"
      class="app-header"
    >
      <!-- BEGIN desktop-toggler -->
      <div class="desktop-toggler">
        <button
          type="button"
          class="menu-toggler"
          data-toggle-class="app-sidebar-collapsed"
          data-dismiss-class="app-sidebar-toggled"
          data-toggle-target=".app"
          @click="isExpandSidebar = !isExpandSidebar"
        >
          <span class="bar" />
          <span class="bar" />
          <span class="bar" />
        </button>
      </div>
      <!-- BEGIN desktop-toggler -->

      <!-- BEGIN mobile-toggler -->
      <div
        class="mobile-toggler"
      >
        <button
          type="button"
          class="menu-toggler"
          data-toggle-class="app-sidebar-mobile-collapsed"
          data-dismiss-class="app-sidebar-mobile-toggled"
          data-toggle-target=".app"
          @click="isExpandSidebar = !isExpandSidebar"
        >
          <span class="bar" />
          <span class="bar" />
          <span class="bar" />
        </button>
      </div>
      <!-- END mobile-toggler -->

      <!-- BEGIN brand -->
      <div class="brand">
        <NuxtLink
          to="/"
          class="brand-logo"
        >
          <span class="brand-img">
            <span class="brand-img-text text-theme">
              <img
                src="~/assets/images/logo.png"
                alt="logo"
              >
            </span>
          </span>
          <span class="brand-text">Surveillance Center</span>
        </NuxtLink>
      </div>
      <!-- END brand -->
      <div class="menu">
        <div class="menu-item dropdown dropdown-mobile-full">
          <div
            data-bs-toggle="dropdown"
            data-bs-display="static"
            class="menu-link"
          >
            <div class="menu-text d-sm-block d-none w-170px">
              username@account.com
            </div>
            <div class="menu-img online">
              <img
                src="assets/img/user/profile.jpg"
                alt="Profile"
                height="60"
              >
            </div>
          </div>
          <div class="dropdown-menu dropdown-menu-end me-lg-3 fs-11px mt-1">
            <div
              class="dropdown-item d-flex align-items-center"
              @click="handleLogout"
            >
              LOGOUT <i class="bi bi-toggle-off ms-auto text-theme fs-16px my-n1" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END #header -->
    <OSidebar />
    <!-- BEGIN mobile-sidebar-backdrop -->
    <button
      class="app-sidebar-mobile-backdrop"
      data-toggle-target=".app"
      data-toggle-class="app-sidebar-mobile-toggled"
      @click="isExpandSidebar = false"
    />
    <!-- END mobile-sidebar-backdrop -->
    <div
      id="content"
      class="app-content"
    >
      <slot />
    </div>
  </main>
</template>

<script setup>
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smallerOrEqual('sm')
const router = useRouter()
const authToken = useCookie('_auth_token')
const refreshToken = useCookie('_refresh_token')

const isExpandSidebar = ref(true)

const handleLogout = () => {
  authToken.value = undefined
  refreshToken.value = undefined
  router.replace('/')
}
</script>

<style lang="scss" scoped>

</style>
