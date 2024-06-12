<template>
  <div>
    <video
      :id="id"
      ref="video"
      class="video-js vjs-default-skin"
      controls
      autoplay
      preload="auto"
    />
  </div>
</template>

<script setup lang="ts">
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

interface Props {
  id: string
  src: string
}

const props = defineProps<Props>()
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
