<template>
  <div class="cursor-pointer">
    <video
      :id="id"
      ref="video"
      class="video-js vjs-default-skin"
      controls
      preload="auto"
      :width="width"
      :height="height"
    />
  </div>
</template>

<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import 'videojs-contrib-quality-levels' // Import quality levels plugin
import 'jb-videojs-hls-quality-selector' // Import HLS quality selector plugin
import '@theonlyducks/videojs-zoom/styles'
import '@theonlyducks/videojs-zoom'

interface Props {
  id: string
  src: string
  width?: number
  height?: number
  controls?: boolean
  fluid?: boolean
  displayCurrentQuality?: boolean // Prop to control display of current quality
  isHls?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  width: 400,
  height: 200,
  controls: true,
  fluid: true,
  displayCurrentQuality: true, // Default to displaying current quality in the button
  isHls: true,
})

const cfg = useRuntimeConfig()

const video = ref()
const isVisible = useElementVisibility(video)

onMounted(() => {
  const element = document.getElementById(props.id)
  const url = props.isHls
    ? `${cfg.public.streamBaseUrl}/${props.src}/index.m3u8`
    : props.src

  // Initialize the video.js player with HLS quality selector plugin
  const player = videojs(element, {
    fluid: props.fluid,
    controls: props.controls,
    autoplay: false,
    liveui: true,
    preload: 'auto',
    userActions: {
      click: false,
    },
    sources: [
      {
        src: url,
        type: props.isHls ? 'application/x-mpegURL' : 'video/mp4',
      },
    ],
  })

  // Apply the HLS quality selector plugin
  player.hlsQualitySelector({
    displayCurrentQuality: props.displayCurrentQuality, // Use the prop value for displayCurrentQuality
  })

  const zoom = player.zoomPlugin({
    showZoom: true,
    showMove: true,
    showRotate: false,
  })
  zoom.zoom(1)
  zoom.move(0, 0)
})

onBeforeUnmount(() => {
  const element = document.getElementById(props.id)
  if (!element) window.location.reload()
  videojs(element).dispose()
})

watch(isVisible, (visible) => {
  const element = document.getElementById(props.id)
  if (!visible && element) {
    videojs(element).pause()
  } else {
    videojs(element).play()
  }
})
</script>

<style lang="scss" scoped>
/* Add any scoped styles here */
</style>
