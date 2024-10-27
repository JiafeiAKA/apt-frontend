<template>
    <div class="w-full max-w-[600px] mx-auto p-6 bg-white rounded shadow-md">
      <!-- Title -->
      <h1 class="text-2xl font-bold mb-6 text-center">ADD NEW COUNTRY</h1>
  
      <!-- Form -->
      <form @submit.prevent="submitForm">
        <!-- Country Name -->
        <div class="mb-4">
          <label for="countryName" class="block text-gray-700">Country Name:</label>
          <input
            v-model="country.name"
            id="countryName"
            type="text"
            class="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
  
        <!-- Capital City -->
        <div class="mb-4">
          <label for="capitalCity" class="block text-gray-700">Capital City:</label>
          <input
            v-model="country.capital"
            id="capitalCity"
            type="text"
            class="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
  
        <!-- Continent -->
        <div class="mb-4">
          <label for="continent" class="block text-gray-700">Continent:</label>
          <select
            v-model="country.continent"
            id="continent"
            class="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Oceania">Oceania</option>
            <option value="Antarctica">Antarctica</option>
          </select>
        </div>
  
        <!-- Currency -->
        <div class="mb-4">
          <label for="currency" class="block text-gray-700">Currency:</label>
          <input
            v-model="country.currency"
            id="currency"
            type="text"
            class="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
  
        <!-- Population -->
        <div class="mb-4">
          <label for="population" class="block text-gray-700">Population:</label>
          <input
            v-model="country.population"
            id="population"
            type="number"
            class="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
  
        <!-- Official Language -->
        <div class="mb-4">
          <label for="officialLanguage" class="block text-gray-700">Official Language:</label>
          <input
            v-model="country.officialLanguage"
            id="officialLanguage"
            type="text"
            class="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
  
        <!-- Buttons -->
        <div class="flex justify-between mt-6">
          <button
            type="button"
            @click="cancel"
            class="bg-red-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="bg-yellow-500 text-white px-4 py-2 rounded"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import CountryService from '@/services/CountryDetailService'; // Assuming you have a CountryService to handle API requests
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  // Country data model
  const country = ref({
    name: '',
    capital: '',
    continent: 'Asia',
    currency: '',
    population: null,
    officialLanguage: '',
    flag: null, // This will store the uploaded file
  });
  
  // Submit form data
  async function submitForm() {
    try {
      const formData = new FormData();
      formData.append('name', country.value.name);
      formData.append('capital', country.value.capital);
      formData.append('continent', country.value.continent);
      formData.append('currency', country.value.currency);
      formData.append('population', country.value.population?.toString() || '');
      formData.append('officialLanguage', country.value.officialLanguage);
      if (country.value.flag) {
        formData.append('flag', country.value.flag);
      }
  
      // Send formData to backend
      await CountryService.addCountry(formData);
  
      // Redirect or give feedback after successful submission
      router.push('/manageuser');
    } catch (error) {
      console.error('Failed to add country:', error);
    }
  }
  
  // Cancel button action
  function cancel() {
    router.push('/manageuser');
  }
  </script>
  
  <style scoped>
  /* Add any additional styling here */
  </style>
  