<script setup lang = "ts">
import { useRouter } from 'vue-router';
const router = useRouter()
function retry(){
    router.go(0); // refresh the current page
}
</script>

<template>
    <div class="flex items-center justify-center min-h-screen p-4">
      <div class="w-full max-w-[700px] p-6 md:p-8">
        <div class="flex flex-col justify-center items-start h-full">
          <h1 class="text-3xl md:text-4xl font-bold">Oops!</h1>
          <h3 class="text-lg md:text-xl mt-4 md:mt-6">It seems there was a problem connecting to the network.</h3>
          <p class="text-sm md:text-base mt-2">Please check your internet connection and try again.</p>
          <div class="flex flex-row gap-4 md:gap-8 mt-6 text-lg">
            <button @click="retry" class="text-lg text-center w-32 border rounded-lg bg-[#F3DA97] hover:bg-[#D3B965]">
              Retry
            </button>
            <RouterLink to="/" class="hover:text-[#D3B965] text-center md:text-left">
              Go to Home
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </template>
