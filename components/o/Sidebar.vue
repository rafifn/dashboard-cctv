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
        <div class="menu-item active">
          <span
            class="menu-link"
          >
            <span class="menu-icon"><i class="bi bi-grid" /></span>
            <span class="menu-text">Dashboard</span>
          </span>
        </div>
        <div class="menu-item">
          <span
            class="menu-link"
          >
            <span class="menu-icon"><i class="bi bi-camera-video" /></span>
            <span class="menu-text">Streaming CCTV</span>
          </span>
        </div>
        <div class="menu-item">
          <span
            class="menu-link"
          >
            <span class="menu-icon"><i class="bi bi-floppy" /></span>
            <span class="menu-text">Gate Monitoring</span>
          </span>
        </div>
      </div>
      <!-- END menu -->
    </div>
    <!-- END scrollbar -->
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.menu {
  &-link {
    cursor: pointer;
  }
}
</style>
