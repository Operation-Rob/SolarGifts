<template>
  <div class="flex items-center">
    <div class="flex-shrink-0">
      <img
        class="rounded-full w-14 h-14"
        :src="`images/communities/${properties.image}`"
        alt="Community logo"
      />
    </div>
    <div class="ml-3">
      <p class="text-lg font-medium text-gray-900">
        {{ properties.name }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
  const properties = defineProps({
    properties: Object,
  })
</script>
