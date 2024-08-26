<template>
  <div class="cursor-pointer">
    <div v-if="isLoading" class="spinner"></div> <!-- Loading Spinner -->
    <img
        :id="id"
        :src="streamUrl"
        :width="width"
        :style="{ width: '100%'}"
        :height="height"
        alt="MJPEG Stream"
        @load="handleLoad"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

interface Props {
  id: string
  src: string
  width?: number
  height?: number
}

const props = withDefaults(defineProps<Props>(), {
  width: 400,
  height: 400,
})

const streamUrl = ref('')
const isLoading = ref(true)  // Spinner visibility state

const handleLoad = () => {
  isLoading.value = false;  // Hide spinner when video is loaded
}

onMounted(() => {
  streamUrl.value = `http://localhost:8081/process_stream/${props.src}`
})

onBeforeUnmount(() => {
  // Stop the stream when navigating away
  const imgElement = document.getElementById(props.id) as HTMLImageElement;
  if (imgElement) {
    imgElement.src = '';  // Set the image source to empty string to stop streaming
  }
})
</script>

<style lang="scss" scoped>
.spinner {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  margin: 100px auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
