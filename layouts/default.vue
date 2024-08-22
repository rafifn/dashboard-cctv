<!-- eslint-disable max-len -->
<template>
  <div>
    <ALoader :loader="loader" />
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
            <span class="brand-text">MABES AD COMMAND CENTER</span>
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
                {{ myProfileState?.username ?? '' }}
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
  </div>
</template>

<script setup lang="ts">
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import type { Profile } from '~/utils/types'

const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smallerOrEqual('sm')

const loader = useLoader()
const isExpandSidebar = useState('isExpandSidebar', () => true)
const myProfileState = useState<Profile>('myProfileState', () => {})
</script>

<style lang="scss" scoped>

</style>
