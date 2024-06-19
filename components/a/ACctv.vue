<template>
  <div class="cursor-pointer">
    <video
      :id="id"
      ref="video"
      class="video-js vjs-default-skin"
      controls
      autoplay
      preload="auto"
      :width="width"
      :height="height"
    />
  </div>
</template>

<script setup lang="ts">
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

interface Props {
  id: string
  src: string
  width?: number
  height?: number
  controls?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  width: 400,
  height: 200,
  controls: true,
})

const cfg = useRuntimeConfig()

const video = ref()

onMounted(() => {
  const element = document.getElementById(props.id)
  const url = `${cfg.public.streamBaseUrl}/${props.src}.m3u8`
  videojs(element, {
    controls: props.controls,
    autoplay: true,
    responsive: true,
    userActions: {
      click: false,
    },
    sources: [
      {
        src: url,
        type: 'application/x-mpegURL',
      },
    ],
  })
})
</script>

<style lang="scss" scoped>

</style>
