<template>
  <div>
    <video
      controls
      autoplay
      :width="600"
      :height="500"
      name="media"
    >
      <source
        :src="url"
        type="video/mp4"
      >
    </video>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const cfg = useRuntimeConfig()
const url = computed(() => `${cfg.public.recordingBaseUrl}/get?path=${route.params.channel}&start=${route.query.start}&duration=${route.query.duration}&format=fmp4`)
</script>
