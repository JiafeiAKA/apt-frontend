<template>
  <div class="flex min-h-screen bg-gradient-to-r ]">
    <!-- Left side -->
    <div class="hidden md:flex items-center justify-center w-[40%] bg-gradient-to-b from-[#d3b965] to-[#fbf4df]"></div>

    <!-- Right side -->
    <div class="flex items-center w-full p-6 bg-white md:w-[60%]">
      <div class="w-full max-w-md md:ml-20">
        <h2 class="text-3xl font-bold mb-2 text-[#26294D] leading-tight">LOG IN<br>YOUR<br>ACCOUNT</h2>        
        <form @submit.prevent="handleLogin">
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
  
          <div class="mb-6">
            <label for="password" class="block text-sm font-semibold text-[#1a202c]">Password</label>
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
            Log In
          </button>
          <p v-if="errorMessage" class="text-red-500 mt-4 text-center">{{ errorMessage }}</p>
          <p class=" text-sm text-[#26294D] mt-6">Don't have an account yet? 
            <RouterLink to="/register" class="text-[#26294D] font-medium underline">Sign up</RouterLink>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LoginService from '@/services/LoginService';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const password = ref('');
const errorMessage = ref('');

// Function to save the token
const saveToken = (token: string) => {
  localStorage.setItem('authToken', token);
};

// Updated handleLogin method
const handleLogin = async () => {
    try {
        const response = await LoginService.login(username.value, password.value);
        if (response.data.token) {
            saveToken(response.data.token); // Save token in localStorage
            router.push('/profile'); // Redirect after login
        } else {
            errorMessage.value = 'Invalid credentials. Please try again.';
        }
    } catch (error) {
        errorMessage.value = 'Login failed. Please check your credentials.';
    }
};
</script>
