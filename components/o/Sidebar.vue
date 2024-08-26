<template>
  <div
    id="sidebar"
    class="app-sidebar"
  >
    <!-- BEGIN scrollbar -->
    <div
      class="app-sidebar-content"
    >
      <!-- BEGIN menu -->
      <div class="menu">
        <NuxtLink
          v-for="(menu, menuIdx) in menusFiltered"
          :key="menuIdx"
          :class="['menu-item', { active: $route.name === menu.name }]"
          :to="menu.path"
        >
          <span
            class="menu-link"
          >
            <span class="menu-icon"><i :class="['bi', menu.icon]" /></span>
            <span class="menu-text">{{ menu.label }}</span>
          </span>
        </NuxtLink>
        <div class="menu-item logout">
          <span
            class="menu-link"
            @click="handleClickLogout"
          >
            <span class="menu-icon"><i class="bi bi-box-arrow-right" /></span>
            <span class="menu-text">Keluar</span>
          </span>
        </div>
      </div>
      <!-- END menu -->
    </div>
    <!-- END scrollbar -->
    <AConfirmation
      v-model="isOpenConfirmationLogout"
      title="Apakah Anda yakin ingin keluar?"
      @ok="handleLogout"
      @cancel="isOpenConfirmationLogout = false"
    />
  </div>
</template>

<script setup lang="ts">
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import type { Profile } from '~/utils/types'

const MENUS = [
  {
    label: 'Dashboard',
    name: 'index',
    path: '/',
    icon: 'bi-grid',
  },
  {
    label: 'Streaming CCTV',
    name: 'streaming',
    path: '/streaming',
    icon: 'bi-camera-video',
  },
  {
    label: 'Gate Monitoring',
    name: 'gate',
    path: '/gate',
    icon: 'bi-floppy',
  },
  {
    label: 'Check LPR',
    name: 'check-lpr',
    path: '/check/lpr',
    icon: 'bi-floppy',
  },
  {
    label: 'Check NIK',
    name: 'check-nik',
    path: '/check/nik',
    icon: 'bi-floppy',
  },
  {
    label: 'Vehicle Management',
    name: 'vehicles',
    path: '/vehicles',
    icon: 'bi-floppy',
  },
  {
    label: 'Visitor Management',
    name: 'visitors',
    path: '/visitors',
    icon: 'bi-flag',
  },
  {
    label: 'Recording Video',
    name: 'recording',
    path: '/recording',
    icon: 'bi-database',
  },
  {
    label: 'User & Access',
    name: 'users',
    path: '/users',
    icon: 'bi-person-badge',
  },
]

const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smallerOrEqual('sm')

const cfg = useRuntimeConfig()

const myProfileState = useState<Profile>('myProfileState')
const isExpandSidebar = useState('isExpandSidebar', () => true)
const authToken = useCookie('_auth_token')
const refreshToken = useCookie('_refresh_token')
const router = useRouter()

const isOpenConfirmationLogout = ref(false)

const menusFiltered = computed(() => {
  const decoded = atob(cfg.public.permissions)
  const envPermissions = JSON.parse(decoded)
  const currentPermissions = myProfileState.value
    ? envPermissions.find(pm => pm.role === myProfileState.value.role.name)
    : undefined
  return currentPermissions && currentPermissions.permissions.length && currentPermissions.permissions[0] === 'all' ? MENUS : currentPermissions ? MENUS.filter(mn => currentPermissions.permissions.includes(mn.name)) : []
})

const handleClickLogout = () => {
  if (isMobile.value) {
    isExpandSidebar.value = false
  }
  isOpenConfirmationLogout.value = true
}
const handleLogout = () => {
  authToken.value = undefined
  refreshToken.value = undefined
  myProfileState.value = undefined
  router.replace('/login')
}
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  flex-direction: column;
  height: 100vh;
  &-link {
    cursor: pointer;
  }
  &-item {
    margin: 10px 0;
    text-decoration: none;
    font-weight: 100;
    display: block;
    &.active .menu-text {
      font-weight: 700;
    }
    &.logout {
      margin-top: auto;
    }
  }
  &-icon {
    color: var(--bs-theme);
  }
  &-text {
    color: white;
  }
}
</style>
