<template>
  <div
    id="sidebar"
    class="app-sidebar"
  >
    <!-- BEGIN scrollbar -->
    <div
      class="app-sidebar-content"
      data-scrollbar="true"
      data-height="100%"
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
          >
            <span class="menu-icon"><i class="bi bi-box-arrow-right" /></span>
            <span class="menu-text">Keluar</span>
          </span>
        </div>
      </div>
      <!-- END menu -->
    </div>
    <!-- END scrollbar -->
  </div>
</template>

<script setup>
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
