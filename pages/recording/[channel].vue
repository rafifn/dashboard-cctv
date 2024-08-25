<template>
  <div>
    <video
      :src="url"
      controls
      preload="auto"
      :width="600"
      :height="500"
    />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const url = computed(() => `http://36.94.131.179:9996/get/path=${route.params.channel}&start=${route.query.start}&duration=${route.query.duration}`)
</script>
