<template>
  <div :class="[sizeClass]">
    <l-map
      ref="map"
      :zoom="zoom"
      :center="firstCoordinates"
      :use-global-leaflet="false"
      @update:zoom="$emit('update:zoom', $event)"
    >
      <l-tile-layer
        ref="tileLayer"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      />
      <div
        v-for="(location, locationIdx) in locations"
        :key="locationIdx"
      >
        <l-marker
          v-model:lat-lng="location.latlng"
          :draggable="isDraggable"
          @click="$emit('click-marker', location)"
        >
          <l-icon class-name="someExtraClass">
            <div class="map-marker">
              <div class="marker-pin" />
              <img
                class="marker-icon"
                :src="`${marker}?text=${location?.text ?? locationIdx + 1}`"
              >
            </div>
          </l-icon>
          <l-popup v-if="location.popup && location.popup.length">
            <template #default>
              <table class="w-full text-xs">
                <tbody>
                  <tr
                    v-for="(pp, popupIdx) in location.popup"
                    :key="`popup-${popupIdx}`"
                  >
                    <td class="py-2">
                      {{ pp.label }}
                    </td>
                    <td class="py-2">
                      : {{ pp.value }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </template>
          </l-popup>
        </l-marker>
      </div>
      <l-marker
        v-if="singleLoc"
        v-model:lat-lng="singleLoc.latlng"
      >
        <l-icon class-name="someExtraClass">
          <div class="map-marker">
            <div />
            <img src="https://api.iconify.design/fa6-solid:truck-moving.svg?color=%23ff5454">
          </div>
        </l-icon>
      </l-marker>
    </l-map>
  </div>
</template>

<script lang="ts" setup>
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer, LMarker, LPopup, LIcon } from '@vue-leaflet/vue-leaflet'

interface Props {
  locations: {
    text?: string
    latlng: {
      lat: number | string
      lng: number | string
    }
    popup?: {
      label: string
      value: string
    }[]
  }[]
  singleLocation?: {
    latlng?: {
      lat: number | string
      lng: number | string
    }
  }
  sizeClass?: string
  isDraggable?: boolean
  centerPosition?: string[]
  zoom?: number
  isSingle?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  zoom: 15,
  sizeClass: 'h-[500px] w-[500px]',
  centerPosition: () => [],
  singleLocation: undefined,
})
defineEmits(['click-marker', 'update:zoom'])

const map = ref(null)

const marker = computed(() =>
  props.isSingle ? 'https://placehold.co/24x24/000/000' : 'https://placehold.co/24x24/000/fff',
)
const firstCoordinates = computed(() =>
  props.centerPosition.length ? props.centerPosition : [props.locations[0].latlng.lat, props.locations[0].latlng.lng],
)
const singleLoc = computed(() => props.singleLocation)
</script>

<style lang="scss" scoped>
.map-marker {
  position: relative;
  width: 32px;
  height: 64px;
  .marker-pin {
    position: absolute;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 16px solid black;
    top: 0;
    left: 50%;
    margin-left: -10px;
  }
  .marker-icon {
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    top: -19px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
  }
}
</style>
