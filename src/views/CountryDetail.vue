<template>
  <div class="w-full max-w-[1000px] mx-auto p-6 bg-white items-center">
    <div class="flex flex-col items-center md:flex-row m-5">
      <country-flag :country="(props.id || 'USA')" size='big' class="border" />

      <div class="w-[250px] h-[150px] md:w-[300px] md:h-[180px] bg-black md:mr-8 flex justify-center">Flag</div>
      <div class="md:text-left mt-5 md:mt-0">
        <h1 class="text-3xl font-bold mb-5 ">{{ countryDetails?.Name || 'COUNTRY NAME' }}</h1>
        <p>Capital City: {{ countryDetails?.CapitalCity || 'N/A' }}</p>
        <p>Currency: {{ countryDetails?.Currency || 'N/A' }}</p>
        <p>Continent: {{ countryDetails?.Continent || 'N/A' }}</p>
        <p>Population: {{ countryDetails?.Population || 'N/A' }}</p>
        <p>Official Languages: {{ countryDetails?.OfficialLanguage || 'N/A' }}</p>
      </div>
    </div>
  </div>
  <hr class="border-gray-300">
  <div class="w-full max-w-[1000px] mx-auto p-6 bg-white">
    <div class="items-center">
      <p>
        {{ countryDetails?.Name || 'This country' }} is located in {{ countryDetails?.Continent || 'a certain region'
        }},
        with a population of approximately {{ countryDetails?.Population || 'an unknown number' }} people.
        The capital city, {{ countryDetails?.CapitalCity || 'the main city' }}, serves as the center of political and
        cultural activity.
        The official currency is the {{ countryDetails?.Currency || 'local currency' }},
        and residents primarily speak {{ countryDetails?.OfficialLanguages?.join(', ') || 'various languages' }}.
        With a rich history and diverse culture, {{ countryDetails?.Name || 'this nation' }} continues to make its mark
        on the global stage.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue';
import { addNewCountry, CountryResponse, deleteCountry, getCountryDetailByCode } from '@/services/CountryDetailService';
import { NAME_TO_NOC, NOC_NAMES } from '@/constants/NationName';

const nocToname = NOC_NAMES;
const nameToNOC = NAME_TO_NOC;
const props = defineProps<{ id: string }>();



const countryDetails = ref<CountryResponse>();
const countryCode = ref<string | null>(null);

const fetchCountryMedal = async () => {

  //TODO ทดสอบ
  const countryTest: CountryResponse = {
    CountryCode: "MMM",
    Name: "MMM",
    CapitalCity: "MMM",
    Currency: "MMM",
    Continent: "MMM",
    Population: 1000,
    OfficialLanguage: "MMM"
  };

  await deleteCountry(countryTest);
  // await addNewCountry(countryTest);
  //////

  try {
    const response = await getCountryDetailByCode(props.id);
    console.log(response);
    countryDetails.value = response;


  } catch (error) {
    console.error('Error fetching medalByCountry:', error);
  }
};

onMounted(async () => {
  fetchCountryMedal();
});
</script>
