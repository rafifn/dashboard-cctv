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
import 'videojs-contrib-quality-levels' // Import quality levels plugin
import 'jb-videojs-hls-quality-selector' // Import HLS quality selector plugin

interface Props {
  id: string
  src: string
  width?: number
  height?: number
  controls?: boolean
  fluid?: boolean
  displayCurrentQuality?: boolean // New prop to control display of current quality
}

const props = withDefaults(defineProps<Props>(), {
  width: 400,
  height: 200,
  controls: true,
  fluid: true,
  displayCurrentQuality: true, // Default to not displaying current quality in the button
})

const cfg = useRuntimeConfig()

const video = ref()

onMounted(() => {
  const element = document.getElementById(props.id)
  const url = `${cfg.public.streamBaseUrl}/${props.src}/index.m3u8`

  // Initialize the video.js player with HLS quality selector plugin
  const player = videojs(element, {
    fluid: props.fluid,
    controls: props.controls,
    autoplay: true,
    responsive: true,
    liveui: true,
    preload: 'auto',
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

  // Apply the HLS quality selector plugin
  player.hlsQualitySelector({
    displayCurrentQuality: props.displayCurrentQuality, // Use the prop value for displayCurrentQuality
  })
})

onBeforeUnmount(() => {
  const element = document.getElementById(props.id)
  videojs(element).dispose()
})
</script>

<style lang="scss" scoped>
/* Add any scoped styles here */
</style>
