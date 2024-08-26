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
          v-for="(menu, menuIdx) in MENUS"
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

<script setup>
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'

const MENUS = [
  {
    label: 'Face Recognition',
    name: 'facerecognition',
    path: '/facerecognition',
    icon: 'bi-person-square',
  },
  {
    label: 'Visitor Management',
    name: 'visitors',
    path: '/visitors',
    icon: 'bi-flag',
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

const isExpandSidebar = useState('isExpandSidebar', () => true)
const authToken = useCookie('_auth_token')
const refreshToken = useCookie('_refresh_token')
const router = useRouter()

const isOpenConfirmationLogout = ref(false)

const handleClickLogout = () => {
  if (isMobile.value) {
    isExpandSidebar.value = false
  }
  isOpenConfirmationLogout.value = true
}
const handleLogout = () => {
  authToken.value = undefined
  refreshToken.value = undefined
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
