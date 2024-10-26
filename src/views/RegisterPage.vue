<template>
  <div class="flex min-h-screen bg-gradient-to-r">
    <!-- Left Side -->
    <div class="hidden md:flex items-center justify-center w-[40%] bg-gradient-to-b from-[#d3b965] to-[#fbf4df]"></div>
    <!-- Right Side -->
    <div class="flex items-center w-full p-6 bg-white md:w-[60%]">
        <div class="w-full max-w-md md:ml-20">
          <div class="signup-form">
            <h2 class="text-3xl font-bold mb-2 text-[#26294D] leading-tight">CREATE NEW<br>ACCOUNT</h2>
            <form @submit.prevent="handleSignup">
                <div class="mb-4">
                    <label for="username" class="block text-baseline font-medium">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        v-model="username" 
                        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#d3b965]"
                        required />
                </div>
                <div class="mb-4">
                    <label for="password" class="block text-baseline font-medium">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        v-model="passwordHash" 
                        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#d3b965]"
                        required />
                </div>
                <div class="mb-6">
                    <label for="email" class="block text-baseline font-medium">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        v-model="email" 
                        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#d3b965]"
                        required />
                </div>
                <div class="mb-6">
                    <label for="role" class="text-baseline font-medium">Role:</label>
                    <select v-model="role" class="w-32 h-9 ml-4 rounded border ">
                        <option value="REGISTERED">Registered</option>
                        <option value="ADMIN">Admin</option>
                    </select>
                </div>
                <button 
                    type="submit"
                    class="w-full bg-[#d3b965] text-white py-2 rounded hover:bg-[#bda553] focus:outline-none"
                    >Sign Up
                </button>
                <p class=" text-sm text-[#26294D] mt-6">Alredy have an account. 
                    <RouterLink to="/login" class="text-[#26294D] font-medium underline">Log in</RouterLink>
                </p>

                <div v-if="errorMessage" class="error-message">
                    {{ errorMessage }}
                </div>
            </form>
          </div>
        </div>
    </div>
        
 
    </div>
</template>

<script setup lang="ts">
import { Role } from '@/services/ApiService';  // Ensure this import is correct
import { signup } from '@/services/AuthenticationService';  // Ensure this import is correct
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const passwordHash = ref('');
const email = ref('');
const role = ref<Role>(Role.REGISTERED); // Assuming Role is properly defined
const errorMessage = ref<string | null>(null);

const handleSignup = async () => {
  try {
      const now = new Date();
      const createdAt = now.toISOString(); // Use full timestamp for better precision

      // Optionally hash the password here if you need to
      // const hashedPassword = await hashPassword(passwordHash.value);
      
      await signup(username.value, passwordHash.value, email.value, role.value, createdAt);
      router.push('/login');
  } catch (error) {
      console.error('Signup error:', error); // Log error for debugging
      errorMessage.value = 'Signup failed. Please try again.';
  }
};
</script>
