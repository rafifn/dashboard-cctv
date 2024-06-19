<template>
  <div>
    <div class="header">
      <div class="header__item">
        <h1 class="page-header">
          Streaming CCTV
        </h1>
        <span>{{ dateNow }}</span>
      </div>
    </div>
    <div class="wrapper-primary">
      <div
        v-if="isLoading"
        class="card primary__video"
        aria-hidden="true"
      >
        <div class="card-body">
          <h5 class="card-title placeholder-glow">
            <span class="placeholder bg-black" />
          </h5>
        </div>
      </div>
      <ACctv
        v-else
        :id="`primary-${primary.id32}`"
        class="primary__video"
        :src="primary.channel_id"
        :height="500"
      />
      <div class="primary__info">
        <div class="d-flex justify-content-between">
          <div>
            <p>Front Office A</p>
            <p class="primary__status">
              Active
            </p>
            <p>Last Movement: recent</p>
          </div>
          <div>
            <small class="cursor-pointer">Unduh</small>
            <div class="d-flex gap-3">
              <small class="cursor-pointer">Log</small>
              <small>|</small>
              <small class="cursor-pointer">Backup</small>
            </div>
          </div>
        </div>
        <div class="primary__statistic">
          <p class="font-bold statistic__title">
            Room Statistic
          </p>
          <table>
            <tbody>
              <tr>
                <td>Movement</td>
                <td>&nbsp;</td>
                <td>200 Movement</td>
              </tr>
              <tr>
                <td>Personal</td>
                <td>&nbsp;</td>
                <td>12 Personal</td>
              </tr>
              <tr>
                <td>Visitor</td>
                <td>&nbsp;</td>
                <td>2 Visitor</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="statistic__footer">
          <p class="statistic__title">
            Feed Detail
          </p>
          <span>mpeg4 1080p 30fps</span>
          <br>
          <span>Backed to: 11-10-2013 12:00:00</span>
        </div>
      </div>
    </div>
    <div class="d-flex flex-wrap">
      <ACctv
        v-for="(cctv, cctvIdx) in data.results"
        :id="cctv.id32"
        :key="`cctv-${cctvIdx}`"
        :class="['p-1', { 'cctv--active': primary.id32 === cctv.id32 }]"
        :width="347"
        :src="cctv.channel_id"
        @click="handleClickThumbnail(cctv)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatDateFromUTC } from '~/utils/helpers'

const { $api } = useNuxtApp()

const { data } = await useAsyncData('camera', () => $api('/cctv/camera', {
  baseUrl: 'https://stream.arnatech.id',
  query: {
    is_active: true,
    page_size: 50,
  },
}))

const dateNow = ref()
const primary = ref(data.value.results[0])
const isLoading = ref(false)

const handleClickThumbnail = (item: { hls_url: string, id32: string, channel_id: string }) => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
  primary.value = item
}

onMounted(() => {
  dateNow.value = formatDateFromUTC('', 'dddd, DD MMMM YYYY')
})
</script>

<style lang="scss" scoped>
p {
  margin: unset;
}
.header {
  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      color: #ffffff;
      font-size: 1rem;
    }
  }
}
.wrapper {
  &-primary {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
}
.primary {
  &__video {
    flex: 1;
    width: 100%;
    --bs-border-color-rgb: '';
    .card-body {
      padding: 0;
    }
    .placeholder {
      height: 500px;
      width: 100%;
    }
  }
  &__info {
    background-color: #252525;
    padding: 1rem;
    width: fit-content;
    display: flex;
    flex-direction: column;
  }
  &__status {
    color: #3BA18A;
  }
  &__statistic {
    margin-top: 3rem;
    text-align: center;
    color: #ffffff;
    font-weight: 500;
    table {
      margin: 0 auto;
    }
    td {
      text-align: left;
      padding: 6px;
    }
  }
}
.cctv {
  &--active {
    box-shadow: 0px 4px 20px 0px rgba(59, 161, 138, 1);
    border: 3px solid rgba(59, 161, 138, 1);
  }
}
.statistic {
  &__title {
    margin-bottom: 10px;
    font-weight: 700;
  }
  &__footer {
    margin-top: auto;
  }
}
.gap {
  &-3 {
    gap: 0.75;
  }
  &-4 {
    gap: 1rem;
  }
}
</style>

<style>
.primary__video .video-js {
  width: 100%;
}
</style>
