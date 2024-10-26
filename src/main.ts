import './assets/main.css'

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './index.css';
import CountryFlag from 'vue-country-flag-next';

const app = createApp(App);
app.use(createPinia());
app.component('country-flag', CountryFlag);
app.use(store).use(router).mount('#app');
