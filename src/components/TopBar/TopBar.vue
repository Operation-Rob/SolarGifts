<template>
  <nav class="flex items-center p-2 justify-between">
    <div class="flex items-center content-center">
      <img class="h-10" src="/images/logo.png" alt="" />
      <RouterLink to="/dashboard" class="mx-6 text-xl text-gray-900">Dashboard</RouterLink>
    </div>
<div class=" flex flex-row">

  <div class="rounded-lg p-2 bg-slate-400 h-10 w-28 text-white flex items-center justify-center mr-2">
    <img class="d-flex justify-content-center d-flex justify-content-center rounded-lg py-2 bg-slate-400 h-10 mr-2"
    src="/global.svg">
    English</div>
    
    
    <button class="btn resize" type="button"><img class="d-flex justify-content-center d-flex justify-content-center rounded-lg p-2 bg-slate-400 h-10 w-12 mr-2"
      src="/increase_font_size.svg"></button><button class="" type="button"><img
        class="d-flex justify-content-center rounded-lg p-2 bg-slate-400 h-10" src="/decrease_font_size.svg"></button>
      </div>
</nav></template>
<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
