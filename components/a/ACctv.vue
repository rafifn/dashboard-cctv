<template>
  <div>
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
}

const props = withDefaults(defineProps<Props>(), {
  width: 400,
  height: 200,
})
onMounted(() => {
  const element = document.getElementById(props.id)
  videojs(element, {
    controls: true,
    autoplay: true,
    sources: [
      {
        src: props.src,
        type: 'application/x-mpegURL',
      },
    ],
  })
})
</script>

<style lang="scss" scoped>

</style>
