<template>
  <div class="container mx-auto p-6">
    <!-- Display Country Name -->
    <div class="flex items-center mb-8">
      <country-flag :country="countryCode" size="big" class="mr-4" />
      <h1 class="text-3xl font-bold">{{ countryDetails?.name || 'Country Name' }}</h1>
    </div>

    <!-- Medal Summary Section -->
    <div class="bg-white mt-8 p-4 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-4">Medal Summary</h2>
      <p><strong>Total Medals:</strong> {{ medalSummary.total || 0 }}</p>
      <p><strong>Gold:</strong> {{ medalSummary.gold || 0 }}</p>
      <p><strong>Silver:</strong> {{ medalSummary.silver || 0 }}</p>
      <p><strong>Bronze:</strong> {{ medalSummary.bronze || 0 }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import CountryDetailService from '@/services/CountryDetailService';

const route = useRoute();
const countryDetails = ref<any>(null);
const countryCode = ref<string | null>(null);
const medalSummary = ref({ total: 0, gold: 0, silver: 0, bronze: 0 });

onMounted(async () => {
  const countryId = route.params.id as string;

  try {
    const response = await CountryDetailService.getCountryDetail(countryId);
    countryDetails.value = response.data;
    countryCode.value = countryDetails.value?.noc || 'USA';

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
