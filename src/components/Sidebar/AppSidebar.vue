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
              <div class="flex flex-col h-full bg-white shadow-xl">
                <div class="px-4 py-6 sm:px-6">
                  <div class="flex items-start justify-between">
                    <!-- Add the description -->
                    <div>
                      <div class="flex flex-row mb-3">
                        <img
                          :src="`images/communities/${properties.image}`"
                          class="w-40 h-40"
                          alt="Community logo"
                        />
                        <div class="flex justify-center items-center w-full ml-10 text-4xl">
                          {{ properties.name }}
                        </div>
                        <div class="flex flex-col p-2 mr-5 bg-yellow-200 rounded-lg h-30 w-80">
                          <div class="flex justify-center text-xl"> Solar Goal</div>
                          <div class="flex items-center justify-center h-full text-m"> 
                            {{ currency.format(properties.money_raised) }} / {{ currency.format(properties.goal) }}
                          </div>
                        </div>
                        
                      </div>
                      <p class="text-sm text-gray-500" v-if="properties">
                        {{ properties.description }}
                      </p>
                      <div></div>
                    </div>

                    <div class="flex items-center ml-3 h-7">
                      <button
                        class="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        @click="
                          $emit('closed');
                          emitter.emit('sidebarClosed', 100)
                        "
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

                <div
                  class="relative flex flex-col items-center content-center flex-1 w-full px-4 sm:px-6"
                >
                  <div class="flex flex-row">
                    <div class="flex flex-col p-2 mr-5 bg-green-200 rounded-lg h-30 w-60">
                      <div class="flex justify-center text-xl">Donation Amount</div>
                      <div class="flex items-center justify-center h-full text-3xl">
                        {{ currency.format(donationValue) }}
                      </div>
                    </div>

                    <div class="flex flex-col h-32 p-2 bg-green-200 rounded-lg min-w-80">
                      <div class="flex justify-center text-xl text-center">Your Gift</div>
                      <div class="flex items-center justify-center h-full text-3xl text-center">
                        <div>
                          {{ gift }}
                        </div>
                        <img
                          :src="`images/gifts/${gift}.jpg`"
                          class="w-20 h-20 ml-2 rounded"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div class="w-full my-4">
                    <p class="mb-3 font-bold">Donation Amount</p>
                    <InputSlider :min="1" :max="500" v-model="donationValue" class="mb-4" />
                    <p class="mt-6 font-bold">Donation Frquency</p>
                    <div class="flex">
                      <input type="radio" id="once-off" name="donation" value="once-off" class="mr-1" />
                      <label for="once-off" class="mr-4">Once off</label>
                      <input type="radio" id="monthly" name="donation" value="monthly"  class="mr-1"/>
                      <label for="monthly" class="mr-4">Monthly</label>
                      <input type="radio" id="quarterly" checked name="donation" value="quarterly" class="mr-1" />
                      <label for="quarterly">quarterly</label>
                    </div>

                  </div>

                  <a href="/dashboard">

                    <button
                    class="px-4 py-3 text-white transition-all bg-blue-500 rounded-xl hover:bg-blue-600"
                    >
                    Donate Now
                  </button>
                </a>
                </div>
                <p class="mb-4 ml-6">
                  20% of your donations goes to other communities in need<i
                    class="fa fa-sort-numeric-desc"
                    aria-hidden="true"
                  ></i>
                </p>
              </div>
            </TransitionChild>
          </div>
        </div>
      </HeadlessDialog>
    </TransitionRoot>
  </div>
</template>

<script setup lang="ts">
import { Dialog as HeadlessDialog, TransitionRoot, TransitionChild } from '@headlessui/vue'
import { inject, ref, watchEffect } from 'vue'
import InputSlider from '@/components/Slider/InputSlider.vue'

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
})
const open = ref(props.show)

const emitter: any = inject('emitter')

let properties: any
let gifts: string
const gift = ref();
emitter.on('properties', (value: any) => {
  properties = value
  gifts = JSON.parse(properties.rewards)

  watchEffect(() => {
      if (donationValue.value >= 500) {
        gift.value = gifts[2]
      } else if (donationValue.value >= 250) {
        gift.value = gifts[1]
      } else if (donationValue.value >= 50) {
        gift.value = gifts[0]
      } else {
        gift.value = "Donate more receive to get a gift!"
      }
  })
})

const donationValue = ref(50)

const currency = new Intl.NumberFormat('en-AU', {
  style: 'currency',
  currency: 'AUD'
})
</script>
