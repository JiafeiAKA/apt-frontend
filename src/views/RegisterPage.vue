<template>
  <div class="flex min-h-screen bg-gradient-to-r">
    <!-- Left side -->
    <div class="hidden md:flex items-center justify-center w-[40%] bg-gradient-to-b from-[#d3b965] to-[#fbf4df]"></div>

    <!-- Right side -->
    <div class="flex items-center w-full p-6 bg-white md:w-[60%]">
      <div class="w-full max-w-md md:ml-20">
        <h2 class="text-3xl font-bold mb-2 text-[#26294D] leading-tight">REGISTER<br>YOUR ACCOUNT</h2>
        <p class="text-sm text-[#26294D] my-3">Create your account</p>

        <form @submit.prevent="handleRegister">
          <div class="mb-4">
            <label for="username" class="block text-sm font-semibold text-[#26294D]">Username</label>
            <input
              type="text"
              id="username"
              v-model="username"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#d3b965]"
              required
            />
          </div>

          <div class="mb-4">
            <label for="email" class="block text-sm font-semibold text-[#26294D]">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#d3b965]"
              required
            />
          </div>
  
          <div class="mb-6">
            <label for="password" class="block text-sm font-semibold text-[#26294D]">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#d3b965]"
              required
            />
          </div>
  
          <button
            type="submit"
            class="w-full bg-[#d3b965] text-white py-2 rounded hover:bg-[#bda553] focus:outline-none"
          >
            Register
          </button>
          <p v-if="errorMessage" class="text-red-500 mt-4 text-center">{{ errorMessage }}</p>
          <p class="text-sm text-[#26294D] mt-6">
            Already have an account? 
            <RouterLink to="/login" class="text-[#26294D] font-medium underline">Log in</RouterLink>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import RegisterService from '@/services/RegisterService';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const email = ref('');
const password = ref('');
const errorMessage = ref('');

async function handleRegister() {
  try {
    const response = await RegisterService.register(username.value, email.value, password.value);
    if (response.data.success) {
      router.push('/login'); // Redirect to login page after successful registration
    } else {
      errorMessage.value = response.data.message || 'Registration failed.';
    }
  } catch (error) {
    console.error('Registration error:', error);
    errorMessage.value = 'Registration failed. Please try again.';
  }
}
</script>
