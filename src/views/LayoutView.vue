<template>
  <div class="px-4 md:px-8 space-y-6 mt-[100px]">
    <div class="p-4 rounded flex justify-center space-x-4">
      <RouterLink
        :to="{ name: 'country-detail', params: { id: $route.params.id } }"
        class="px-4 py-2 rounded transition-colors duration-200"
        :class="{ 'bg-[#E8B93A] text-[#26294D]': $route.name === 'country-detail', 'bg-[#F3DA97]': $route.name !== 'country-detail' }"
      >
        Detail
      </RouterLink>
      <RouterLink
        :to="{ name: 'sport-detail', params: { id: $route.params.id } }"
        class="px-4 py-2 rounded transition-colors duration-200"
        :class="{ 'bg-[#E8B93A] text-[#26294D]': $route.name === 'sport-detail', 'bg-[#F3DA97]': $route.name !== 'sport-detail' }"
      >
        Sports
      </RouterLink>
    </div>
    <router-view :countryId="$route.params.id" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
