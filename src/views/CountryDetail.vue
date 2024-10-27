<template>
  <div class="w-full max-w-[1000px] mx-auto p-6 bg-white items-center">
    <div class="flex flex-col items-center md:flex-row m-5">
      <div class="w-[250px] h-[150px] md:w-[300px] md:h-[180px] md:mr-8 flex justify-center items-center">
        <country-flag :country="(props.id || 'USA')" size='big' 
          class="transform scale-300 border" />
      </div>
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
  <div class="w-full max-w-[1000px] mx-auto py-8 px-10 bg-white">
    <div class="w-5/6 mx-auto">
      <p class="text-gray-700 leading-relaxed text-lg">
        <span class="font-bold">{{ countryDetails?.Name || 'This country' }}</span> is located in
        <span class="font-semibold">{{ countryDetails?.Continent || 'a certain region' }}</span>,
        with a population of approximately <span class="font-semibold">{{ countryDetails?.Population || 'an unknown number' }}</span> people.
        The capital city, <span class="font-semibold">{{ countryDetails?.CapitalCity || 'the main city' }}</span>, serves as the center of political and cultural activity.
        The official currency is the <span class="font-semibold">{{ countryDetails?.Currency || 'local currency' }}</span>,
        and residents primarily speak <span class="font-semibold">{{ countryDetails?.OfficialLanguage || 'various languages' }}</span>.
        With a rich history and diverse culture, <span class="font-bold">{{ countryDetails?.Name || 'this nation' }}</span> continues to make its mark on the global stage.
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
