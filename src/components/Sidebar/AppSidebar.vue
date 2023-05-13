<script setup lang="ts">
import { Dialog as HeadlessDialog, TransitionRoot, TransitionChild } from '@headlessui/vue'
import { ref } from 'vue'

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    default: 'No description provided'
  }
})
const open = ref(false)
</script>


<template>
  <div>
    <TransitionRoot :show="props.show" as="div">
      <HeadlessDialog
        as="div"
        static
        class="fixed inset-0 overflow-hidden"
        :open="props.show"
        @close="open = false"
      >
        <div class="absolute inset-0 overflow-hidden">
          <HeadlessDialog.Overlay class="absolute inset-0" />

          <div class="fixed inset-y-0 right-0 flex max-w-full pl-10">
            <TransitionChild
              as="div"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
              class="w-screen max-w-[75vw]"
            >
              <div class="flex flex-col h-full overflow-y-scroll bg-white shadow-xl">
                <div class="px-4 py-6 sm:px-6">
                  <div class="flex items-start justify-between">
                    <HeadlessDialog.Title class="text-lg font-medium text-gray-900"
                      >Shopping cart</HeadlessDialog.Title
                    >

                    <!-- Add the description -->

                    <p class="ml-3 text-sm text-gray-500" v-if="description">
                      {{ description }}
                    </p>

                    <div class="flex items-center ml-3 h-7">
                      <button
                        class="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        @click="open = false"
                      >
                        <span class="sr-only">Close panel</span>
                        <!-- Heroicon name: outline/x -->
                        <svg
                          class="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="relative flex-1 px-4 mt-6 sm:px-6">
                  <!-- Replace with your content -->
                  <div class="absolute inset-0 px-4 sm:px-6">
                    <div
                      class="h-full border-2 border-gray-200 border-dashed"
                      aria-hidden="true"
                    ></div>
                  </div>
                  <!-- /End replace -->
                </div>
              </div>
            </TransitionChild>
          </div>
        </div>
      </HeadlessDialog>
    </TransitionRoot>
  </div>
</template>

