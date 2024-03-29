<template>
  <div id="map"></div>
</template>

<script setup lang="ts">
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'
import dataset from '@/data/features.json'
import { onMounted, createApp, defineComponent, nextTick, inject, render , h} from 'vue'
import TooltipContent from '@/components/Map/TooltipContent.vue'

const props = defineProps({
  toggleSidebar: {
    type: Function,
    required: true
  }
})

const emitter: any = inject('emitter');   // Inject `emitter`

const accessToken = import.meta.env.VITE_MAPBOX_TOKEN;
const westernAustralia: [number, number] = [121.8997, -25.5528]
const bounds: [number, number, number, number]= [ 104.9211, -42.1406, 136.0019, -6.6683 ]

mapboxgl.accessToken = accessToken

onMounted(() => {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: westernAustralia,
    maxBounds: bounds,
    minZoom: 0,
  })

  const initialZoom = map.getZoom()

  map.on('load', () => {
    map.addSource('places', {
      type: 'geojson',
      data: dataset as GeoJSON.FeatureCollection
    })
    map.addLayer({
      id: 'places',
      type: 'circle',
      source: 'places',
      paint: {
        'circle-color': '#4264fb',
        'circle-radius': 6,
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff'
      }
    })

    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false
    })



    map.on('mouseenter', 'places', (e: any) => {
      map.getCanvas().style.cursor = 'pointer'
      // Copy coordinates array.
      const coordinates = e.features[0].geometry.coordinates.slice()
      const properties = e.features[0].properties

      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
      }

      popup.setLngLat(coordinates).setHTML('<div id="popup-content"></div>').addTo(map)

      // const popupComponent = defineComponent({
      //   extends: TooltipContent,
      //   setup() {
      //     return { properties }
      //   }
      // })
      nextTick(() => {
        // createApp(popupComponent).mount('#popup-content')
        const popupComp = h(TooltipContent, {
      // Add props, eventListeners etc. here
      properties,
    });

    // Tell Vue to render the VNode inside the element with id
    render(popupComp, document.getElementById("popup-content")!);
  });
    })

    map.on('mouseleave', 'places', () => {
      map.getCanvas().style.cursor = ''
      popup.remove()
    })

    map.on('click', 'places', (e: any) => {
      const properties = e.features[0].properties

      emitter.emit('properties', properties)


      popup.remove()
      const targetZoom = 8;  // Adjust to your desired zoom level
      
      const target = e.lngLat;
      const clientWidth = map.getContainer().clientWidth

      target.lng = (target.lng + 0.5) + (clientWidth/1536)
      map.flyTo({ center: target, speed: 2, zoom: targetZoom });
      props.toggleSidebar()
    })

    emitter.on('sidebarClosed', (value: any) => {
      map.flyTo({ center: westernAustralia, speed: 2, zoom: initialZoom});
    });
  })
})



</script>
