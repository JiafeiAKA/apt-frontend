<script setup lang = "ts">
import { useRouter } from 'vue-router';
const router = useRouter()
function retry(){
    router.go(0); // refresh the current page
}
</script>

<template>
    <div class="flex flex-col justify-center h-[70vh] text-[#000000]">
        <h1 class="text-4xl">Oops!</h1>
        <h3 class="text-xl mt-6">It seems there was a problem connecting to the network.</h3>
        <p class="text-lg mt-2">Please check your internet connection and try again.</p>
        <div class="flex gap-8 mt-6 text-lg">
            <button @click="retry" class="w-24 border border-[#FFB4C2] bg-[#FFB4C2] rounded-lg hover:bg-[#fc869b]">Retry</button>
            <RouterLink to="/" class="text-[#FFB4C2] hover:text-[#D1E9F6]">Go to Home</RouterLink>
        </div>
    </div>
</template>