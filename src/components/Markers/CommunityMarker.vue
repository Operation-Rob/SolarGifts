<template>
<MapboxMarker :lng-lat="props.coordinates" @click="">
      <template v-slot:popup>
        <div class="flex">
          <div class="flex-shrink-0">
            <img
              class="w-10 h-10 rounded-full"
              :src="`@/assets/image/communities/${props.image}`"
              alt="Community logo"
            />
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-900">
              {{ props.description }}
            </p>
          </div>
        </div>
      </template>
    </MapboxMarker>
</template>

<script setup lang="ts">
import { MapboxMarker } from '@studiometa/vue-mapbox-gl'
import { defineProps, ref } from 'vue'
import AppSidebar from '../Sidebar/AppSidebar.vue'


const props = defineProps({
  coordinates: {
    type: Array,
    required: true
  },
  description: {
    type: String,
    default: 'No description provided'
  },
  image: {
    type: String,
    default: ''
  }
})

const sidebarOpen = ref(false);




</script>