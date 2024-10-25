<template>
    <div>
      <h1>Details for Country: {{ countryId }}</h1>
      <!-- Render the details here -->
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRoute } from 'vue-router';
  
  // Access the route parameters
  const route = useRoute();
  const countryId = route.params.id; // Get the dynamic 'id' parameter
  </script>
  