import { createApp } from 'vue';

import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import '@/styles/app.css';
import Routes from './routes';

const router = createRouter({
	routes: Routes,
	history: createWebHistory(),
	mode: 'history'
});

createApp(App)
	.use(router)
	.mount('#app');
