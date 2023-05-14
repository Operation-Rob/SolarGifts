<template>
    <TopBar />
    <AppMap
    class="w-full h-[calc(100vh-56px)]"
    :toggleSidebar="toggleSidebar" />
  <AppSidebar :show="showSidebar" @closed="showSidebar = false" />
</template>

<script setup lang="ts">
import AppSidebar from '@/components/Sidebar/AppSidebar.vue'
import AppMap from '@/components/Map/AppMap.vue'
import TopBar from '@/components/TopBar/TopBar.vue'
import { ref } from 'vue';

const showSidebar = ref(false)

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value
}

</script>
