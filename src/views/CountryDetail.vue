<template>
  <div class="w-full max-w-[1000px] mx-auto p-6 bg-white items-center">
    <div class="flex flex-col items-center md:flex-row m-5">
      <!-- <country-flag :country="countryCode" size="big" class="mr-4" /> -->
      <div class="w-[250px] h-[150px] md:w-[300px] md:h-[180px] bg-black md:mr-8 flex justify-center">Flag</div>
      <div class="md:text-left mt-5 md:mt-0">
        <h1 class="text-3xl font-bold mb-5 ">{{ countryDetails?.name || 'COUNTRY NAME' }}</h1>
          <p>Capital City: {{ countryDetails?.capital || 'N/A' }}</p>
          <p>Currency: {{ countryDetails?.currency || 'N/A' }}</p>
          <p>Continent: {{ countryDetails?.continent || 'N/A' }}</p>
          <p>Population: {{ countryDetails?.population || 'N/A' }}</p>
          <p>Official Languages: {{ countryDetails?.officialLanguages || 'N/A' }}</p>
      </div>
    </div>
  </div>
  <hr class="border-gray-300">
  <div class="w-full max-w-[1000px] mx-auto p-6 bg-white">
    <div class="items-center">
      <p>
        {{ countryDetails?.name || 'This country' }} is located in {{ countryDetails?.continent || 'a certain region' }}, 
        with a population of approximately {{ countryDetails?.population || 'an unknown number' }} people. 
        The capital city, {{ countryDetails?.capital || 'the main city' }}, serves as the center of political and cultural activity. 
        The official currency is the {{ countryDetails?.currency || 'local currency' }}, 
        and residents primarily speak {{ countryDetails?.officialLanguages?.join(', ') || 'various languages' }}. 
        With a rich history and diverse culture, {{ countryDetails?.name || 'this nation' }} continues to make its mark on the global stage.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue';
import CountryDetailService from '@/services/CountryDetailService';

const props = defineProps<{ countryId: string }>();

const countryDetails = ref<any>(null);
const countryCode = ref<string | null>(null);



// onMounted(async () => {
//   try {
//     const response = await CountryDetailService.getCountryDetail(props.countryId);
//     countryDetails.value = response.data;
//     countryCode.value = countryDetails.value?.noc || 'USA';
//   } catch (error) {
//     console.error('Error fetching country details:', error);
//   }
// });
</script>
