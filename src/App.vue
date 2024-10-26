<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
  <div id="layout" class="font-regular"> 
    <header v-if="!$route.meta.hideNavbar" class=" navbar bg-[#D3B965] w-full py-4 shadow-md fixed top-0 left-0 z-20">
      <nav class="flex items-center px-4 md:pl-16 relative">
        
        <!-- Hamburger Icon for Mobile (Visible only on small screens) -->
        <button @click="toggleMenu" class="text-[#FBF4DF] md:hidden focus:outline-none mr-4">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        <!-- Logo (Centered on Small Screens, Left-Aligned on Large Screens) -->
        <RouterLink class="text-[24px] text-[#FBF4DF] font-bold no-underline hover:text-[#001231] font-cinzel ml-28 md:mx-0 md:mr-10" 
          :to="{ name: 'home' }">APT
        </RouterLink> 

        <!-- Links (Hidden on small screens, Left-Aligned on larger screens) -->
        <div class="hidden md:flex space-x-10">
          <RouterLink class="text-[18px] text-[#FBF4DF] no-underline hover:text-[#001231]" :to="{ name: 'home' }">Home</RouterLink> 
          <RouterLink class="text-[18px] text-[#FBF4DF] no-underline hover:text-[#001231]" :to="{ name: 'login' }">Log in</RouterLink> 
          <RouterLink class="text-[18px] text-[#FBF4DF] no-underline hover:text-[#001231]" :to="{ name: 'register' }">Register</RouterLink> 
          <RouterLink class="text-[18px] text-[#FBF4DF] no-underline hover:text-[#001231]" :to="{ name: 'manage user' }">Manage User</RouterLink> 
        </div>
      </nav>

      <div v-if="isMenuOpen" class="flex flex-col md:hidden bg-[#D3B965] p-4 space-y-4">
        <RouterLink class="text-[18px] text-[#FBF4DF] no-underline hover:text-[#001231]" @click="toggleMenu" :to="{ name: 'home' }">Home</RouterLink> 
        <RouterLink class="text-[18px] text-[#FBF4DF] no-underline hover:text-[#001231]" @click="toggleMenu" :to="{ name: 'login' }">Log in</RouterLink> 
        <RouterLink class="text-[18px] text-[#FBF4DF] no-underline hover:text-[#001231]" @click="toggleMenu" :to="{ name: 'register' }">Register</RouterLink>
        <RouterLink class="text-[18px] text-[#FBF4DF] no-underline hover:text-[#001231]" @click="toggleMenu" :to="{ name: 'manage user' }">Manage User</RouterLink>  
      </div>
    </header>

    <!-- Main Content -->
    <RouterView />
  </div>
</template>
