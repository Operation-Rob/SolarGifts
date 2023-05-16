<template>
  <div class="min-h-screen bg-indigo-100">
    <header class="py-6 px-8 mb-8 bg-white shadow">
      <h1 class="text-2xl font-semibold text-indigo-600">SolarGifts</h1>
      <nav>
        <ul class="flex space-x-4">
          <li><a href="/" class="text-indigo-600 hover:text-indigo-900">Home</a></li>
          <li><a href="#" class="text-indigo-600 hover:text-indigo-900">Communities</a></li>
          <li><a href="#" class="text-indigo-600 hover:text-indigo-900">My Donations</a></li>
          <li><a href="#" class="text-indigo-600 hover:text-indigo-900">Profile</a></li>
          <li><a href="#" class="text-indigo-600 hover:text-indigo-900">Logout</a></li>
        </ul>
      </nav>
    </header>

    <section class="py-4 px-8 bg-white shadow mb-8">
      <h2 class="text-lg font-semibold text-indigo-600">Welcome back, {{ username }}!</h2>
    </section>

    <section class="grid grid-cols-3 gap-4 px-8 mb-8">
      <div class="col-span-1 p-6 bg-indigo-500 text-white shadow rounded">
        <h2 class="text-lg font-semibold">Total Donations</h2>
        <p class="text-4xl font-bold">{{ totalDonations }}</p>
      </div>
      <div class="col-span-1 p-6 bg-indigo-600 text-white shadow rounded">
        <h2 class="text-lg font-semibold">Total kWh Produced</h2>
        <p class="text-4xl font-bold">{{ totalKwhProduced }}</p>
      </div>
      <div class="col-span-1 p-6 bg-indigo-700 text-white shadow rounded">
        <h2 class="text-lg font-semibold">Estimated kWh Next 20 Years</h2>
        <p class="text-4xl font-bold">{{ estimatedKwhNext20Years }}</p>
      </div>
    </section>

    <section class="py-4 px-8 bg-white shadow mb-8">
      <h2 class="text-lg font-semibold text-indigo-600">Donation History</h2>
      <ul class="mt-4">
        <li v-for="donation in donations" :key="donation.id" class="border-b border-gray-200 py-4">
          <p><span class="font-semibold">Date:</span> {{ donation.date }}</p>
          <p><span class="font-semibold">Community:</span> {{ donation.community }}</p>
          <p><span class="font-semibold">Amount:</span> {{ donation.amount }}</p>
          <p><span class="font-semibold">Impact:</span> {{ donation.impact }}</p>
        </li>
      </ul>
    </section>

    <section class="py-4 px-8 bg-white shadow">
      <h2 class="text-lg font-semibold text-indigo-600">Community Updates</h2>
      <ul class="mt-4">
         <li v-for="update in communityUpdates" :key="update.id" class="border-b border-gray-200 py-4">
          {{ update.msg }}
        </li>
      </ul>
    </section>

    <footer class="py-6 px-8 mt-8 bg-white shadow">
      <nav>
        <ul class="flex space-x-4">
          <li><a href="#" class="text-indigo-600 hover:text-indigo-900">About Us</a></li>
          <li><a href="#" class="text-indigo-600 hover:text-indigo-900">Contact Us</a></li>
          <li><a href="#" class="text-indigo-600 hover:text-indigo-900">FAQ</a></li>
          <li><a href="#" class="text-indigo-600 hover:text-indigo-900">Privacy Policy</a></li>
          <li><a href="#" class="text-indigo-600 hover:text-indigo-900">Terms of Service</a></li>
        </ul>
      </nav>
    </footer>
  </div>
</template>
<script lang="ts">
import TopBar from '@/components/TopBar/TopBar.vue';

export default {
    data() {
        return {
            username: "Sarah",
            totalDonations: 1,
            totalKwhProduced: 123,
            estimatedKwhNext20Years: 12323,
            donations: [
              {
                "id": "1231231",
                "date": "23/12/2020",
                "community": "Dandjoo Bidi",
                "amount": "250",
                "impact": "15456 kW"
              },
              {
                "id": "4564561",
                "date": "07/05/2021",
                "community": "Wandoo Karda",
                "amount": "150",
                "impact": "8765 kW"
              },
              {
                "id": "7897891",
                "date": "18/09/2021",
                "community": "Boorgoon",
                "amount": "500",
                "impact": "30456 kW"
              }
            ],
            communityUpdates: [
                { "id": "123123", "msg": "We have installed 10 new solar panels in the community center!" },
                { "id": "123124", "msg": "WOO WE GOT SOLARRR YASSS!" },
            ],
        };
    },
    components: { TopBar }
};
</script>
