<template>
  <div class="px-4 sm:px-8 space-y-6 mt-[100px]">
    <div class="p-4 rounded bg-white text-blue-500 shadow-md flex justify-center space-x-4">
      <RouterLink
        :to="{ name: 'country-detail', params: { id: $route.params.id } }"
        class="px-4 py-2 rounded transition-colors duration-200"
        :class="{ 'bg-yellow-500 text-white': $route.name === 'country-detail', 'bg-gray-200 text-blue-500': $route.name !== 'country-detail' }"
      >
        Detail
      </RouterLink>
      <RouterLink
        :to="{ name: 'sport-detail', params: { id: $route.params.id } }"
        class="px-4 py-2 rounded transition-colors duration-200"
        :class="{ 'bg-yellow-500 text-white': $route.name === 'sport-detail', 'bg-gray-200 text-blue-500': $route.name !== 'sport-detail' }"
      >
        Sports
      </RouterLink>
    </div>

    <!-- Use router-view and pass countryId as a prop -->
    <router-view :countryId="$route.params.id" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style scoped>
.active {
  background-color: #f0c040;
  color: white;
}
</style>
