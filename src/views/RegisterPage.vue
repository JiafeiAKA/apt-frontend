<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 class="text-2xl font-bold mb-6 text-center">Register</h2>
        
        <form @submit.prevent="handleRegister">
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
  
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
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
            Register
          </button>
  
          <p v-if="errorMessage" class="text-red-500 mt-4 text-center">{{ errorMessage }}</p>
        </form>
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
  
  <style scoped>
  /* Add custom styling here if needed */
  </style>
  