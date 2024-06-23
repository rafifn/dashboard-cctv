<template>
  <div>
    <div class="o-page-header">
      <h1 class="o-page-header__title">
        {{ pageTitle }}
      </h1>
      <div
        v-if="addTitle"
        class="o-page-header__button"
      >
        <button
          class="btn btn-outline-theme"
          @click="$emit('add')"
        >
          <i class="fa fa-plus-circle fa-fw me-1" />
          {{ addTitle }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  pageTitle: string
  addTitle?: string
}
withDefaults(defineProps<Props>(), {
  addTitle: '',
})
defineEmits(['add'])
</script>

<style scoped lang="scss">
.o-page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
