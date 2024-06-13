<template>
  <div>
    <div class="header">
      <div class="header__item">
        <span class="fw-bold">CCTV</span>
        <span>{{ dateNow }}</span>
      </div>
    </div>
    <div class="wrapper-primary">
      <ACctv
        :id="`primary-${VIDEOS[0].id32}`"
        class="primary"
        :src="VIDEOS[0].hls_url"
        :width="800"
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
            <small>Unduh</small>
            <div class="d-flex gap-3">
              <small>Log</small>
              <small>|</small>
              <small>Backup</small>
            </div>
          </div>
        </div>
        <div class="primary__statistic">
          <p class="font-bold statistic__title">
            Room Statisti
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
      </div>
    </div>
    <div class="d-flex flex-wrap">
      <ACctv
        v-for="(cctv, cctvIdx) in VIDEOS"
        :id="cctv.id32"
        :key="`cctv-${cctvIdx}`"
        class="p-2"
        :src="cctv.hls_url"
      />
    </div>
  </div>
</template>

<script setup>
import { formatDateFromUTC } from '~/utils/helpers'

const VIDEOS = [
  {
    hls_url: 'https://stream.arnatech.id/22248956-99aa-4ad9-b88b-b410e4d54c13.m3u8',
    id32: '1',
  },
  {
    hls_url: 'https://stream.arnatech.id/5bb8c9fa-17f3-477c-9350-a43494f4742e.m3u8',
    id32: '2',
  },
  {
    hls_url: 'https://stream.arnatech.id/bab5459e-5844-42e4-9e6f-4547465e1122.m3u8',
    id32: '3',
  },
  {
    hls_url: 'https://stream.arnatech.id/e726acdf-6194-4471-88f7-159790713a23.m3u8',
    id32: '4',
  },
]

const dateNow = ref()

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
  }
}
.primary {
  width: 800px;
  padding: 0.5rem;
  &__info {
    background-color: #252525;
    padding: 1rem;
    flex: 1;
  }
  &__status {
    color: #3BA18A;
  }
  &__statistic {
    margin-top: 3rem;
    text-align: center;
    color: #ffffff;
    table {
      margin: 0 auto;
    }
    td {
      text-align: left;
    }
  }
}
.statistic {
  &__title {
    margin-bottom: 10px;
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
