<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 class="text-2xl font-bold mb-6 text-center">Log In</h2>
        
        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              v-model="username"
              class="mt-1 block w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-blue-500"
              required
            />
          </div>
  
          <div class="mb-6">
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              class="mt-1 block w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-blue-500"
              required
            />
          </div>
  
          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 focus:outline-none"
          >
            Log In
          </button>
  
          <p v-if="errorMessage" class="text-red-500 mt-4 text-center">{{ errorMessage }}</p>
        </form>
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
  
  async function handleLogin() {
    try {
      const response = await LoginService.login(username.value, password.value);
      if (response.data.success) {
        // Redirect to home page or desired route after successful login
        router.push('/');
      } else {
        errorMessage.value = response.data.message || 'Invalid credentials';
      }
    } catch (error) {
      console.error('Login error:', error);
      errorMessage.value = 'Login failed. Please try again.';
    }
  }
  </script>
  
  <style scoped>
  /* Additional styling */
  </style>
  