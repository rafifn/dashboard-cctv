<template>
  <main class="app">
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
        >
          <span class="bar" />
          <span class="bar" />
          <span class="bar" />
        </button>
      </div>
      <!-- BEGIN desktop-toggler -->

      <!-- BEGIN mobile-toggler -->
      <div class="mobile-toggler">
        <button
          type="button"
          class="menu-toggler"
          data-toggle-class="app-sidebar-mobile-toggled"
          data-toggle-target=".app"
        >
          <span class="bar" />
          <span class="bar" />
          <span class="bar" />
        </button>
      </div>
      <!-- END mobile-toggler -->

      <!-- BEGIN brand -->
      <div class="brand">
        <a
          href="index.html"
          class="brand-logo"
        >
          <span class="brand-img">
            <span class="brand-img-text text-theme">H</span>
          </span>
          <span class="brand-text">HUD ADMIN</span>
        </a>
      </div>
      <!-- END brand -->
      <div class="menu">
        <div class="menu-item dropdown dropdown-mobile-full">
          <a
            href="#"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            class="menu-link"
          >
            <div class="menu-img online">
              <img
                src="assets/img/user/profile.jpg"
                alt="Profile"
                height="60"
              >
            </div>
            <div class="menu-text d-sm-block d-none w-170px">username@account.com</div>
          </a>
          <div class="dropdown-menu dropdown-menu-end me-lg-3 fs-11px mt-1">
            <a
              class="dropdown-item d-flex align-items-center"
              href="page_login.html"
            >LOGOUT <i class="bi bi-toggle-off ms-auto text-theme fs-16px my-n1" /></a>
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

</script>

<style lang="scss" scoped>

</style>
