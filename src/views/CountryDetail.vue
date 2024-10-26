<template>
    <div class="container mx-auto px-4 py-8">
      <!-- Country Detail Header -->
      <div class="bg-white shadow rounded p-6">
        <div class="flex items-center">
          <!-- Country Flag -->
          <div class="w-1/4">
            <country-flag :country="codeCountry.get(nocNames.get(countryDetail.NOC) || 'USA')" size="big" />
          </div>
          <!-- Country Info -->
          <div class="w-3/4 px-4">
            <h2 class="text-2xl font-bold">{{ countryDetail.name }}</h2>
            <p><strong>Capital City:</strong> {{ countryDetail.capitalCity }}</p>
            <p><strong>Currency:</strong> {{ countryDetail.currency }}</p>
            <p><strong>Continent:</strong> {{ countryDetail.continent }}</p>
            <p><strong>Population:</strong> {{ countryDetail.population }}</p>
            <p><strong>Official Languages:</strong> {{ countryDetail.officialLanguages.join(', ') }}</p>
          </div>
        </div>
      </div>
  
      <!-- Country Description -->
      <div class="mt-6 bg-white shadow rounded p-6">
        <p>
          {{ countryDetail.name }} is a nation located in {{ countryDetail.continent }},
          with a population of approximately {{ countryDetail.population }}. The capital
          city of {{ countryDetail.name }} is {{ countryDetail.capitalCity }}, serving as the
          political and cultural hub of the country. The nation has a proud Olympic history,
          having first participated in the Olympics in {{ countryDetail.firstOlympics }}.
        </p>
        <p>
          Since then, {{ countryDetail.name }} has made {{ countryDetail.olympicAppearances }} Olympic appearances,
          represented by the {{ countryDetail.olympicCommittee }}. The country has earned a total of
          {{ countryDetail.totalMedals }} medals, including {{ countryDetail.goldMedals }} gold,
          {{ countryDetail.silverMedals }} silver, and {{ countryDetail.bronzeMedals }} bronze.
        </p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, ref } from 'vue';
  import { NOC_NAMES, countryCodes } from '@/constants/NationName';
  
  // Props for passing the country details
  const props = defineProps({
    countryDetail: {
      type: Object,
      required: true
    }
  });
  
  const nocNames = NOC_NAMES;
  const codeCountry = countryCodes;
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  </style>
  