<template>
    <div class="signup-form">
        <h2>Sign Up</h2>
        <form @submit.prevent="handleSignup">
            <div>
                <label for="username">Username:</label>
                <input type="text" id="username" v-model="username" required />
            </div>

            <div>
                <label for="passwordHash">Password:</label>
                <input type="password" id="passwordHash" v-model="passwordHash" required />
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
                    <!-- เพิ่ม role อื่น ๆ ที่คุณต้องการได้ที่นี่ -->
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
import { Role } from '@/services/ApiService';
import { signup } from '@/services/AuthenticationService';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter();
const username = ref('');
const passwordHash = ref('');
const email = ref('');
const role = ref<Role>(Role.REGISTERED);

const errorMessage = ref<string | null>(null);


/**
 * "username": "user2",
"passwordHash": "hashed_password_here",
"email": "user2@example.com",
"role": "REGISTERED",
"createdAt" : "2024-10-25T10:15:30"
 */
const handleSignup = async () => {
    try {

        const now = new Date();
        const createdAt = now.toISOString().slice(0, 19);
        await signup(username.value, passwordHash.value, email.value, role.value, createdAt);
        router.push('/login');
    } catch (error) {
        errorMessage.value = 'Signup failed. Please try again.';
    }
};
</script>