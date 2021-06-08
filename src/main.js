import { createApp } from 'vue';
// import store from './store/store'

import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import '@/styles/app.css';
import Routes from './routes';

const router = createRouter({
	routes: Routes,
	history: createWebHistory(),
});

createApp(App)
	.use(router)
	.mount('#app');

// createApp(App).use(store).mount('#app')