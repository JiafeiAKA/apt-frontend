<template>
  <div class="signup-form">
      <h2>Sign Up</h2>
      <form @submit.prevent="handleSignup">
          <div>
              <label for="username">Username:</label>
              <input type="text" id="username" v-model="username" required />
          </div>

          <div>
              <label for="password">Password:</label>
              <input type="password" id="password" v-model="passwordHash" required />
          </div>

          <div>
              <label for="email">Email:</label>
              <input type="email" id="email" v-model="email" required />
          </div>

          <div>
              <label for="role">Role:</label>
              <select v-model="role">
                  <option value="REGISTERED">Registered</option>
                  <option value="ADMIN">Admin</option>
                  <!-- Add other roles as needed -->
              </select>
          </div>

          <button type="submit">Sign Up</button>

          <div v-if="errorMessage" class="error-message">
              {{ errorMessage }}
          </div>
      </form>
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
