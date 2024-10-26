<template>
  <div class="container mx-auto p-6">
    <div class="flex items-center mb-8">
      <!-- <country-flag :country="countryCode" size="big" class="mr-4" /> -->
      <div class="w-[300px]">Hello</div>
      <div>
        <h1 class="text-3xl font-bold">{{ countryDetails?.name || 'Country Name' }}</h1>
          <p>Capital City: {{ countryDetails?.capital || 'N/A' }}</p>
          <p>Currency: {{ countryDetails?.currency || 'N/A' }}</p>
          <p>Continent: {{ countryDetails?.continent || 'N/A' }}</p>
          <p>Population: {{ countryDetails?.population || 'N/A' }}</p>
          <p>Official Languages: {{ countryDetails?.officialLanguages || 'N/A' }}</p>
      </div>
      
    </div>

    <div class="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-4">Country Information</h2>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue';
import CountryDetailService from '@/services/CountryDetailService';

const props = defineProps<{ countryId: string }>();

const countryDetails = ref<any>(null);
const countryCode = ref<string | null>(null);

onMounted(async () => {
  try {
    const response = await CountryDetailService.getCountryDetail(props.countryId);
    countryDetails.value = response.data;
    countryCode.value = countryDetails.value?.noc || 'USA';
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
