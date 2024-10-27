<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
function goHome(){
    router.push('/');
}
</script>
<template>
    <div class="flex flex-col justify-center items-center min-h-screen p-4 bg-gray-100">
      <h1 class="text-3xl md:text-4xl font-bold text-center">UH-OH...</h1>
      <h3 class="text-lg md:text-xl mt-4 md:mt-6 text-center">Sorry, the page you are looking for does not exist</h3>
      <button 
        @click="goHome" 
        class="text-lg mt-6 w-full md:w-32 border rounded-lg bg-[#F3DA97] hover:bg-[#D3B965] py-2"
      >
        Go to Home
      </button>
    </div>
  </template>