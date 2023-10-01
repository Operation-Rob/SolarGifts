<template>
  <nav class="flex items-center p-2 justify-between">
    <div class="flex items-center content-center">
      <img class="h-10" src="/images/logo.png" alt="" />
      <RouterLink to="/dashboard" class="mx-6 text-xl text-gray-900">Dashboard</RouterLink>
    </div>
</nav></template>
<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
