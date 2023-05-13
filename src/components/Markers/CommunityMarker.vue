<template>
<MapboxMarker :lng-lat="props.coordinates">
      <template v-slot:popup>
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img
              class="rounded-full w-14 h-14"
              :src="`images/communities/${props.image}`"
              alt="Community logo"
            />
          </div>
          <div class="ml-3">
            <p class="text-lg font-medium text-gray-900">
              {{ props.name }}
            </p>
          </div>
        </div>
      </template>
    </MapboxMarker>
</template>

<script setup lang="ts">
import { MapboxMarker } from '@studiometa/vue-mapbox-gl'
import { defineProps } from 'vue'


const props = defineProps({
  coordinates: {
    type: Array,
    required: true
  },
  name: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  }
})
</script>