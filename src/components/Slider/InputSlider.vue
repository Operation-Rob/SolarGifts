<template>
  <div class="slidecontainer">
    <input type="range" min="1" max="100" class="slider" id="donation"
    :value="modelValue" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
  {{ modelValue }}
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
const modelValue = '3'
defineEmits(["update:modelValue"])
</script>

<style>
.slidecontainer {
  width: 100%; /* Width of the outside container */
}
.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #04aa6d;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #04aa6d;
  cursor: pointer;
}
</style>
