<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="handleLogin">
            <label>
                Username:
                <input v-model="username" type="text" required />
            </label>
            <label>
                Password:
                <input v-model="password" type="password" required />
            </label>
            <button type="submit">Login</button>
            <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { login, saveToken } from '@/services/AuthenticationService';

const router = useRouter();
const username = ref('');
const password = ref('');
const errorMessage = ref<string | null>(null);

const handleLogin = async () => {
    try {
        const response = await login(username.value, password.value);
        saveToken(response.token);
        router.push('/profile');
    } catch (error) {
        errorMessage.value = 'Login failed. Please check your credentials.';
    }
};
</script>