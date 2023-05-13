<template>
  <MapboxMap
    :access-token="accessToken"
    map-style="mapbox://styles/cjnbennett/clhli6yhp009p01rfbkox2bbg"
    :center="westernAustralia"
    :zoom="1"
    class="w-full h-screen"
  >
    <div v-for="feature in dataset.features" :key="feature.id">
      <CommunityMarker
        :coordinates="feature.geometry.coordinates"
        :image="feature.properties.image"
        :name="feature.properties.name"
      />
    </div>
  </MapboxMap>
  <span v-if="hover">This is a secret message.</span>
</template>

<script setup lang="ts">
import CommunityMarker from '@/components/Markers/CommunityMarker.vue'
import { MapboxMap } from '@studiometa/vue-mapbox-gl'
import dataset from '@/data/features.json'
import 'mapbox-gl/dist/mapbox-gl.css'
import { ref } from 'vue'

const accessToken = ref(
  'pk.eyJ1IjoiY2puYmVubmV0dCIsImEiOiJjbGhsaTRxc2EwOWw3M3FwOTQ0N3luaW5qIn0.8XbLwV61cr2oFs7ue0wCCw'
)
const westernAustralia = ref([121.8997, -25.5528])
const hover = ref(false)
</script>
