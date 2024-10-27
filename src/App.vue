<template>
  <div id="layout" class="font-regular"> 
    <header v-if="!$route.meta.hideNavbar" class=" navbar bg-[#D3B965] w-full py-4 shadow-md fixed top-0 left-0 z-20">
      <nav class="flex items-center px-4 md:px-16 relative">

        <!-- Hamburger Icon for Mobile (Visible only on small screens) -->
        <button @click="toggleMenu" class="text-[#FBF4DF] md:hidden focus:outline-none mr-4">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        <!-- APT (Centered on Small Screens, Left-Aligned on Large Screens) -->
        <RouterLink class="text-[24px] text-[#FBF4DF] font-bold no-underline hover:text-[#001231] font-cinzel ml-28 md:mx-0 md:mr-10" 
          :to="{ name: 'home' }">APT
        </RouterLink> 

        <!-- Links (Hidden on small screens, Left-Aligned on larger screens) -->
        <div class="hidden md:flex space-x-10">
          <RouterLink class="text-[18px] text-[#FBF4DF] no-underline hover:text-[#001231]" :to="{ name: 'home' }">Home</RouterLink> 
          <RouterLink class="text-[18px] text-[#FBF4DF] no-underline hover:text-[#001231]" :to="{ name: 'manage user' }">Manage User</RouterLink> 
        </div>
        <!-- User dropdown menu -->
        <div class="ml-auto relative bg-[#FBF4DF] rounded-xl p-1">
          <button @click="toggleDropdown" class="flex items-center text-[#D3B965] hover:text-[#001231] focus:outline-none">
            <img src="./assets/pumpkin.png" alt="Profile Picture" class="w-8 h-8 rounded-full" />
            <span class="hidden md:inline text-[18px] font-medium ml-3">{{ receivedData || 'Admin' }}</span>
            <svg class="hidden md:inline w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <!-- Dropdown menu -->
          <div v-if="isDropdownOpen" class="absolute right-0 mt-2 w-40 bg-[#FBF4DF] rounded-lg shadow-lg py-2 z-30">
            <RouterLink @click="logout" class="block px-4 py-2 text-gray-700 hover:bg-[#F3DA97] no-underline" :to="{ name: 'login' }">Log out</RouterLink>
          </div>
        </div>
      </nav>

      <div v-if="isMenuOpen" class="flex flex-col md:hidden bg-[#D3B965] p-4 space-y-4">
        <RouterLink class="text-[18px] text-[#FBF4DF] no-underline hover:text-[#001231]" @click="toggleMenu" :to="{ name: 'home' }">Home</RouterLink> 
        <RouterLink class="text-[18px] text-[#FBF4DF] no-underline hover:text-[#001231]" @click="toggleMenu" :to="{ name: 'manage user' }">Manage User</RouterLink>  
      </div>
    </header>

    <!-- Main Content -->
    <RouterView />
  </div>
</template>


<script setup lang="ts">
import { provide, ref, defineProps } from 'vue';
import router from './router';
import { UserRes } from './services/UserService';

const isMenuOpen = ref(false);
const isDropdownOpen = ref(false);

// สร้างตัวแปรเพื่อเก็บข้อมูลที่รับมาจาก child
const receivedData = ref<string | null>(null);

// สร้างฟังก์ชันสำหรับรับข้อมูลจาก child
const updateData = (data: string) => {
  receivedData.value = data;
};

const users = ref<UserRes[]>([]);
const props = defineProps<{
  user: UserRes;
}>();



// ใช้ provide เพื่อแชร์ข้อมูลและฟังก์ชันไปยัง child component
provide('updateData', updateData);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}

function logout() {
  isDropdownOpen.value = false;
  router.push({ name: 'login' });
}
</script>