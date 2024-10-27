<template>
  <div class="flex min-h-screen bg-gradient-to-r">
    <!-- Left side -->
    <div class="hidden md:flex items-center justify-center w-[40%] bg-gradient-to-b from-[#d3b965] to-[#fbf4df]"></div>

    <!-- Right side -->
    <div class="flex items-center w-full p-6 bg-white md:w-[60%]">
      <div class="w-full max-w-md md:ml-20">
        <h2 class="text-3xl font-bold mb-4 text-[#26294D] leading-tight">LOG IN<br>YOUR<br>ACCOUNT</h2>        
        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label for="username" class="block font-medium">Username</label>
            <input
              type="text"
              id="username"
              v-model="username"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#d3b965]"
              required
            />
          </div>
  
          <div class="mb-6">
            <label for="password" class="block font-medium">Password</label>
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
          <p  v-if="errorMessage" class="text-red-500 mt-4 text-center">{{ errorMessage }}</p>
          <p class=" text-sm text-[#26294D] mt-6">Don't have an account yet? 
            <RouterLink to="/register" class="text-[#26294D] font-medium underline">Sign up</RouterLink>
          </p>
        </form>
      </div>
    </div>

  
  </div>
</template>

<script setup lang="ts">
import { ref ,defineEmits,provide, inject } from 'vue';

import { useRouter } from 'vue-router';
import { login, saveToken, userIdKey, usernameKey } from '@/services/AuthenticationService';
import axios, { AxiosError } from 'axios';
import { apiClient } from '@/services/ApiService';

const router = useRouter();
const username = ref('');
const password = ref('');
const errorMessage = ref('');

// ใช้ inject เพื่อรับฟังก์ชันจาก parent component
const updateData = inject<(data: string) => void>('updateData');

if (!updateData) {
  throw new Error('Update function is not provided');
}

// ฟังก์ชันสำหรับส่งข้อมูลกลับไปยัง parent component
const sendDataToParent = (username :string) => {
  updateData(username);
};
// Updated handleLogin method
const handleLogin = async () => {
    try {
        const response = await login(username.value, password.value);

        if (response.token) {
            saveToken(response.token); // Save token in localStorage
            localStorage.setItem(usernameKey, response.username);
            localStorage.setItem(userIdKey, response?.userId.toString());

           sendDataToParent(username.value);



            router.push('/'); // Redirect after login
        } else {
            errorMessage.value = 'Invalid credentials. Please try again.';
        }
    } catch (error) {

      console.log(error);

      if (axios.isAxiosError(error)) {

        const errorAx = error as AxiosError;
        const errorMess = JSON.stringify(errorAx.response?.data);
        errorMessage.value = errorMess; 
      }else {
        errorMessage.value = 'Login failed. Please check your credentials.';
      }

    
    }
};



</script>
