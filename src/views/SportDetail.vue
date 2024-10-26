<template>
    <div class="container mx-auto p-6">
      <!-- Sport Header Section -->
      <div class="flex items-center mb-8">
        <h1 class="text-4xl font-bold">{{ sportDetail?.name || 'Sport Name' }}</h1>
      </div>
  
      <!-- Sport Information Section -->
      <div class="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
        <h2 class="text-xl font-semibold">Sport Information</h2>
        <p><strong>Type:</strong> {{ sportDetail?.type || 'N/A' }}</p>
        <p><strong>Season:</strong> {{ sportDetail?.season || 'N/A' }}</p>
        <p><strong>Olympic Events:</strong> {{ sportDetail?.events?.join(', ') || 'N/A' }}</p>
      </div>
  
      <!-- Medal Summary Section -->
      <div class="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 class="text-xl font-semibold">Medal Summary</h2>
        <p><strong>Total Medals:</strong> {{ medalSummary.total }}</p>
        <p><strong>Gold:</strong> {{ medalSummary.gold }}</p>
        <p><strong>Silver:</strong> {{ medalSummary.silver }}</p>
        <p><strong>Bronze:</strong> {{ medalSummary.bronze }}</p>
      </div>
  
      <!-- Participating Countries Section -->
      <div v-if="sportDetail?.countries && sportDetail.countries.length > 0" class="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4">Participating Countries</h2>
        <table class="table-auto w-full border">
          <thead>
            <tr class="bg-gray-300">
              <th class="px-4 py-2">Country</th>
              <th class="px-4 py-2">Gold</th>
              <th class="px-4 py-2">Silver</th>
              <th class="px-4 py-2">Bronze</th>
              <th class="px-4 py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="country in sportDetail.countries" :key="country.code">
              <td class="border px-4 py-2">{{ country.name }}</td>
              <td class="border px-4 py-2">{{ country.gold }}</td>
              <td class="border px-4 py-2">{{ country.silver }}</td>
              <td class="border px-4 py-2">{{ country.bronze }}</td>
              <td class="border px-4 py-2">{{ country.total }}</td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <!-- Athlete List Section -->
      <div v-if="sportDetail?.athletes && sportDetail.athletes.length > 0" class="bg-white mt-8 p-4 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4">Athletes</h2>
        <ul class="list-disc list-inside">
          <li v-for="athlete in sportDetail.athletes" :key="athlete.id">
            {{ athlete.name }} - {{ athlete.country }} ({{ athlete.medal }})
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import SportDetailService from '@/services/SportDetailService';
  
  const route = useRoute();
  const sportDetail = ref<any>(null);
  const medalSummary = ref({ gold: 0, silver: 0, bronze: 0, total: 0 });
  
  onMounted(async () => {
    const sportId = route.params.id as string;
  
    try {
      const response = await SportDetailService.getSportDetail(sportId);
      sportDetail.value = response.data;
  
      // Calculate medal summary
      const { gold, silver, bronze } = sportDetail.value.medals || { gold: 0, silver: 0, bronze: 0 };
      medalSummary.value = {
        gold,
        silver,
        bronze,
        total: gold + silver + bronze,
      };
    } catch (error) {
      console.error('Error fetching sport details:', error);
    }
  });
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
  }
  </style>
  