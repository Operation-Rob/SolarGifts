<template>
  <nav class="flex items-center p-2">
    <img class="h-10" src="/images/logo.png" alt="" />
    <RouterLink to="/dashboard" class="mx-6 text-xl text-gray-900">Dashboard</RouterLink>
  </nav>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
