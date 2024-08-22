<template>
  <div class="a-loader">
    <div :class="['a-loader', { 'a-loader--loading': loader.isShow }]">
      <div
        v-if="loader.isShow"
        class="a-loader__backdrop"
      >
        <div class="a-loader__wrapper">
          <div
            class="a-loader__text anim anim--blink"
            v-text="loader.message || 'Tunggu, ya...'"
          />
        </div>
      </div>
      <div class="a-loader__runner">
        <div
          ref="loaderContent"
          class="a-loader__content"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import lottie from 'lottie-web'
import animationData from '~/assets/json/loading_anim.json'
import type { Loader } from '~/utils/types'

defineProps<{ loader: Loader }>()

const loaderContent = ref(null)

onMounted(() => {
  nextTick(() => {
    lottie.loadAnimation({
      container: loaderContent.value!,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData,
    })
  })
})
</script>

<style lang="scss">
.a-loader {
  $gp: &;

  &__backdrop {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2000;
    background: rgba(255, 255, 255, 0.5);
    text-align: center;
    text-shadow: 0 -1px 1px rgba(255, 255, 255, 0.7);
    color: rgba(255, 255, 255, 0.7);
    cursor: wait;
    backdrop-filter: blur(5px);
  }

  &__runner {
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -100px;
    margin-left: -100px;
    z-index: 2020;
    pointer-events: none;
    visibility: hidden;
    opacity: 0;

    #{$gp}--loading & {
      visibility: visible;
      opacity: 1;
    }
  }

  &__wrapper {
    width: 300px;
  }

  &__text {
    margin-top: 100px;
    line-height: 20px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.75);

    b {
      text-transform: none;
    }
  }

  &__content {
    width: 200px;
    height: 200px;
    overflow: 'hidden';
    margin: '0 auto';
  }
}

.anim {
  &--blink {
    animation: blink 1.2s infinite;
  }

  &--roll {
    animation: roll 3s infinite linear;
  }
}

@keyframes blink {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.25;
  }

  100% {
    opacity: 1;
  }
}
</style>
