<template>
  <div class="container">
    <input
      type="range"
      :min="0"
      :max="max"
      :step="step"
      class="slider"
      id="donation"
      list="tickmarks"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <datalist id="tickmarks">
      <option>50</option>
      <option>250</option>
      <option>500</option>
    </datalist>
    <div class="relative">
      <div class="absolute -translate-y-2 pointer-events-none left-[calc(10%+2px)] h-3 w-3 rounded-full bg-blue-500"></div>
      <div class="absolute -translate-y-2 pointer-events-none left-[calc(50%-6px)] h-3 w-3 rounded-full bg-blue-500"></div>
      <div class="absolute -translate-y-2 pointer-events-none right-[4px] h-3 w-3 rounded-full bg-blue-500"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({ modelValue: Number, min: Number, max: Number, step: Number })

defineEmits(['update:modelValue'])
</script>

<style>
.slider {
  display: flex;
  align-items: center;

  -webkit-appearance: none;
  width: 100%;
  height: 5px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.slider::-webkit-slider-thumb {
  display: flex;
  justify-content: center;
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #04aa6d;
  cursor: pointer;
}

</style>
