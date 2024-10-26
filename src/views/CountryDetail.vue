<template>
  <div class="container mx-auto p-6">
    <!-- Header Section -->
    <div class="flex items-center mb-8">
      <country-flag :country="countryCode" size="big" class="mr-4" />
      <h1 class="text-3xl font-bold">{{ countryDetails?.name || 'Country Name' }}</h1>
    </div>

    <!-- Country Information Section -->
    <div class="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-4">Country Information</h2>
      <p><strong>Capital City:</strong> {{ countryDetails?.capital || 'N/A' }}</p>
      <p><strong>Currency:</strong> {{ countryDetails?.currency || 'N/A' }}</p>
      <p><strong>Continent:</strong> {{ countryDetails?.continent || 'N/A' }}</p>
      <p><strong>Population:</strong> {{ countryDetails?.population || 'N/A' }}</p>
      <p><strong>Official Languages:</strong> {{ countryDetails?.officialLanguages || 'N/A' }}</p>
    </div>

    <!-- Medal Summary Section -->
    <div class="bg-white mt-8 p-4 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-4">Medal Summary</h2>
      <p><strong>Total Medals:</strong> {{ medalSummary?.total || 0 }}</p>
      <p><strong>Gold:</strong> {{ medalSummary?.gold || 0 }}</p>
      <p><strong>Silver:</strong> {{ medalSummary?.silver || 0 }}</p>
      <p><strong>Bronze:</strong> {{ medalSummary?.bronze || 0 }}</p>
    </div>

    <!-- Medal Details by Sport Section -->
    <div v-if="countryDetails?.sports && countryDetails.sports.length > 0" class="bg-gray-100 mt-8 p-4 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-4">Medal Details by Sport</h2>
      <table class="table-auto w-full border">
        <thead>
          <tr class="bg-gray-300">
            <th class="px-4 py-2">Sport</th>
            <th class="px-4 py-2">Gold</th>
            <th class="px-4 py-2">Silver</th>
            <th class="px-4 py-2">Bronze</th>
            <th class="px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="sport in countryDetails.sports" :key="sport.name">
            <td class="border px-4 py-2">{{ sport.name }}</td>
            <td class="border px-4 py-2">{{ sport.gold }}</td>
            <td class="border px-4 py-2">{{ sport.silver }}</td>
            <td class="border px-4 py-2">{{ sport.bronze }}</td>
            <td class="border px-4 py-2">{{ sport.total }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import CountryDetailService from '@/services/CountryDetailService'; // assuming you have this service for fetching country details

// State variables
const countryDetails = ref<any>(null);
const medalSummary = ref<any>(null);
const route = useRoute();
const countryCode = ref<string | null>(null); // To store the country code for the flag component

// Fetch country details when component is mounted
onMounted(async () => {
  const countryId = route.params.id as string;

  try {
    // Fetch country details
    const response = await CountryDetailService.getCountryDetail(countryId);
    countryDetails.value = response.data;

    // Set country code for flag display
    countryCode.value = countryDetails.value?.noc || 'USA';

    // Calculate medal summary if data is available
    if (countryDetails.value?.medals) {
      const { gold, silver, bronze } = countryDetails.value.medals;
      medalSummary.value = {
        total: gold + silver + bronze,
        gold,
        silver,
        bronze,
      };
    }
  } catch (error) {
    console.error('Error fetching country details:', error);
  }
});
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
